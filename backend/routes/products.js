const express = require('express');
const supabase = require('../supabaseClient');

const router = express.Router();

// GET /api/products - list published products for the "Our Products" section
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, slug, description, image_url, category, sort_order')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('[GET /api/products]', error.message);
    return res.status(500).json({ error: 'Could not load products.' });
  }

  res.json({ products: data });
});

// GET /api/products/:slug - single product detail
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;

  const { data, error } = await supabase
    .from('products')
    .select('id, name, slug, description, image_url, category')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('[GET /api/products/:slug]', error.message);
    return res.status(404).json({ error: 'Product not found.' });
  }

  res.json({ product: data });
});

module.exports = router;
