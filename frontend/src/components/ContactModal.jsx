import { useState } from 'react';
import { submitContact } from '../lib/api';

export default function ContactModal({ source, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitContact({ ...form, source });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Start Your Project</h3>
        <p className="sub">Tell us what you need made — we&apos;ll get back to you shortly.</p>

        {status === 'success' ? (
          <>
            <p className="form-status success">Thanks! Your message has been sent.</p>
            <button className="btn-gold" style={{ width: '100%', marginTop: 12 }} onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
            <input
              name="company"
              placeholder="Company (optional)"
              value={form.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us about your product idea, design, or requirements"
              value={form.message}
              onChange={handleChange}
              required
            />

            {status === 'error' && <p className="form-status error">{errorMsg}</p>}

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-gold" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
