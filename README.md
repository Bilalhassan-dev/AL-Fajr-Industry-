# Al Fajr Industry — Website

Ye project aap ke Figma design (screenshot: Home page) ko **hoo-ba-hoo** copy karke banaya gaya hai — layout, text, sections, sab kuch wahi hai jo design mein tha. Koi content ya layout change nahi kiya gaya.

Stack:
- **Frontend:** React + Vite (static site) — Home page design ke sections
- **Backend:** Node.js + Express — API (`/api/products`, `/api/contact`) — deploy hoga **Railway** par
- **Database:** **Supabase** (Postgres) — products aur contact form submissions store karne ke liye

```
al-fajr-industry/
├── frontend/     → React website (Vercel/Netlify/Railway kahin bhi deploy ho sakti hai)
├── backend/      → Express API server (Railway par deploy)
└── database/     → Supabase ke liye SQL schema
```

## 1. Database (Supabase) setup

1. https://supabase.com par account banayein, naya project create karein.
2. Project ke **SQL Editor** mein jaake `database/schema.sql` ka pura content paste karke run karein. Isse do tables banengi: `products` aur `contact_messages`.
3. **Project Settings → API** se ye do cheezein copy kar lein:
   - `Project URL` (e.g. `https://xxxxx.supabase.co`)
   - `service_role` key (secret — sirf backend mein use hogi, kabhi frontend mein nahi)

## 2. Backend (Railway) setup

1. `backend/` folder ko GitHub repo mein push karein (ya pura repo push karein, Railway root directory `backend` set kar dega).
2. https://railway.app par naya project banayein → "Deploy from GitHub repo" → apna repo select karein → root directory `backend` set karein.
3. Railway ke **Variables** tab mein ye environment variables add karein (`.env.example` file dekhein):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
   - `FRONTEND_URL` (aapki deployed frontend URL, CORS ke liye — e.g. `https://alfajrindustry.com`)
   - `PORT` (Railway khud set kar deta hai, chhod dein)
4. Deploy hone ke baad Railway aapko ek URL dega, e.g. `https://al-fajr-backend-production.up.railway.app` — ye aapka API base URL hai.

## 3. Frontend setup

1. `frontend/.env` file banayein (`.env.example` copy karein) aur usme apna backend URL daalein:
   ```
   VITE_API_URL=https://al-fajr-backend-production.up.railway.app
   ```
2. Install & run locally:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. Production build:
   ```bash
   npm run build
   ```
   Isse `dist/` folder banega — ye kisi bhi static host (Vercel, Netlify, Railway static site, cPanel) par upload kar sakte hain.

## Notes

- Design ke jo images the (factory floor, Haitian machine, capability photos) unki jagah relevant stock photos (Unsplash) use ki gayi hain kyunke original high-res image files upload nahi hui thin — inhein `frontend/src/components/` mein image URLs replace karke apni asal photos se badla ja sakta hai.
- "Our Products" section design mein khali grey boxes tha — usko Supabase ke `products` table se **live/dynamic** bana diya gaya hai. Jab aap Supabase table mein product add karenge, wo website par khud show ho jayega.
- Contact form abhi design mein nahi tha (sirf "Get in touch" tab aur "Start Your Project" button the) — dono buttons ek simple contact modal kholte hain jo backend ke `/api/contact` par submit karta hai aur Supabase mein save hota hai.
