import { useEffect, useRef } from 'react'

const BRAND = {
  name: 'Nate Baron',
  title: 'Cinematic Wedding & Portrait Photographer',
  bio: "I'm a Dallas based photographer who specializes in making people and products look their absolute best. Whether it's your wedding day or your next product launch, I bring cinematic quality to every shoot.",
  services: [
    { icon: '📷', title: 'Wedding Photography', desc: 'Cinematic coverage of your most precious day — every moment, every emotion, captured in full.' },
    { icon: '👤', title: 'Portrait Sessions', desc: 'Professional headshots and personal portraits that reveal your authentic self.' },
    { icon: '🛍️', title: 'Product Photography', desc: 'Clean, bold imagery that makes your product irresistible — crafted to convert.' },
    { icon: '✨', title: 'Brand Shoots', desc: "Content that speaks your brand's language — tailored visuals for social media and campaigns." },
    { icon: '🎉', title: 'Event Coverage', desc: 'Full-spectrum coverage for corporate events, galas, and milestone celebrations.' },
    { icon: '🎨', title: 'Photo Editing & Retouching', desc: 'Expert post-production that elevates every image to publication quality.' },
  ],
  testimonials: [
    { quote: 'Marcus shot our wedding and every single photo felt like a movie. We still get compliments two years later.', author: 'Sarah and Jake T.' },
    { quote: 'Hired him for product shots for our skincare line and sales jumped 30% after we updated our site with his images.', author: 'Lena Park, GlowBar Skincare' },
  ],
  process: [
    { step: '01', title: 'Discovery Call', desc: 'We align on vision, location, mood, and your goals — laying the creative foundation.' },
    { step: '02', title: 'Creative Direction', desc: 'I craft a shot list and runbook tailored to your brand, audience, and aesthetic.' },
    { step: '03', title: 'The Shoot', desc: 'On the day, I direct with cinematic precision — you just show up and be yourself.' },
    { step: '04', title: 'Delivery', desc: 'Edited, retouched, and delivered in 7-14 days via private gallery with full download rights.' },
  ],
  cta: 'Book a call',
  brandColors: { bg: '#0a0a0a', gold: '#c9a84c', white: '#f5f0e8' },
}

function App() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(() => {
      els.forEach(el => {
        const rect = (el as HTMLElement).getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          ;(el as HTMLElement).style.opacity = '1'
          ;(el as HTMLElement).style.transform = 'translateY(0)'
          io.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    els.forEach(el => io.observe(el))
    const onScroll = () => io.observe(document.body)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <div style={{ backgroundColor: BRAND.brandColors.bg, color: BRAND.brandColors.white, fontFamily: 'Space Grotesk, sans-serif', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@200;300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
        body { background: #0a0a0a; }
        .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .grain { position: fixed; top: -50%; left: -50%; width: 200%; height: 200%; pointer-events: none; z-index: 9999; }
        .cursor { width: 20px; height: 20px; border: 1.5px solid #c9a84c; border-radius: 50%; position: fixed; pointer-events: none; z-index: 9998; transform: translate(-50%, -50%); transition: transform 0.15s, width 0.2s, height 0.2s; }
        .cursor.hover { width: 50px; height: 50px; background: rgba(201,168,76,0.08); }
        .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(201,168,76,0.15); }
        .gold-gradient { background: linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-pad { padding: 120px 24px; max-width: 1100px; margin: 0 auto; }
        .hero-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; animation: orbFloat 8s ease-in-out infinite; }
        .hero-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(201,168,76,0.13), transparent 70%); top: -10%; left: -10%; animation-delay: 0s; }
        .hero-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.09), transparent 70%); bottom: -10%; right: -10%; animation-delay: 4s; }
        @keyframes orbFloat { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px, -30px); } }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s; }
        .nav.scrolled { background: rgba(10,10,10,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(201,168,76,0.1); }
        .nav-logo { font-size: 18px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a { color: rgba(245,240,232,0.7); text-decoration: none; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; transition: color 0.3s; font-family: Outfit, sans-serif; }
        .nav-links a:hover { color: #c9a84c; }
        .hero-title { font-size: clamp(52px, 8vw, 110px); font-weight: 700; line-height: 0.95; letter-spacing: -3px; }
        .hero-title-sub { font-size: clamp(14px, 2vw, 18px); font-weight: 300; letter-spacing: 6px; text-transform: uppercase; color: #c9a84c; font-family: Outfit, sans-serif; margin-bottom: 28px; }
        .hero-desc { font-size: clamp(15px, 1.8vw, 18px); font-weight: 300; line-height: 1.7; max-width: 520px; color: rgba(245,240,232,0.65); font-family: Outfit, sans-serif; margin-top: 28px; }
        .hero-cta { display: inline-flex; align-items: center; gap: 12px; margin-top: 48px; padding: 16px 40px; background: linear-gradient(135deg, #c9a84c, #e8d48b); color: #0a0a0a; font-weight: 600; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 4px; transition: all 0.3s; font-family: Outfit, sans-serif; }
        .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(201,168,76,0.4); }
        .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.5; }
        .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, #c9a84c, transparent); animation: scrollPulse 2s ease-in-out infinite; }
        @keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.6); } 50% { opacity: 1; transform: scaleY(1); } }
        .section-label { font-size: 11px; letter-spacing: 5px; text-transform: uppercase; color: #c9a84c; font-family: Outfit, sans-serif; margin-bottom: 16px; }
        .section-title { font-size: clamp(36px, 5vw, 64px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 64px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .service-card { padding: 36px 32px; border-radius: 12px; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); cursor: default; }
        .service-card:hover { background: rgba(201,168,76,0.06); border-color: rgba(201,168,76,0.35); transform: translateY(-4px); }
        .service-icon { font-size: 36px; margin-bottom: 20px; display: block; }
        .service-title { font-size: 17px; font-weight: 600; margin-bottom: 12px; letter-spacing: -0.3px; }
        .service-desc { font-size: 14px; line-height: 1.7; color: rgba(245,240,232,0.55); font-family: Outfit, sans-serif; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-image-wrap { position: relative; border-radius: 12px; overflow: hidden; }
        .about-image-placeholder { width: 100%; aspect-ratio: 3/4; background: linear-gradient(135deg, #1a1a1a, #222); display: flex; align-items: center; justify-content: center; font-size: 80px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.2); }
        .about-image-glow { position: absolute; inset: -2px; border-radius: 14px; background: linear-gradient(135deg, rgba(201,168,76,0.27), transparent 60%); z-index: -1; }
        .about-text { font-size: clamp(15px, 1.6vw, 17px); line-height: 1.8; color: rgba(245,240,232,0.7); font-family: Outfit, sans-serif; }
        .stat-row { display: flex; gap: 48px; margin-top: 48px; }
        .stat { display: flex; flex-direction: column; }
        .stat-n { font-size: 40px; font-weight: 700; color: #c9a84c; letter-spacing: -1px; line-height: 1; }
        .stat-l { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,232,0.4); font-family: Outfit, sans-serif; margin-top: 4px; }
        .process-list { display: flex; flex-direction: column; gap: 0; }
        .process-item { display: grid; grid-template-columns: 80px 1fr; gap: 32px; padding: 40px 0; border-bottom: 1px solid rgba(201,168,76,0.1); align-items: start; }
        .process-item:first-of-type { border-top: 1px solid rgba(201,168,76,0.1); }
        .process-n { font-size: 48px; font-weight: 700; color: rgba(201,168,76,0.2); letter-spacing: -2px; line-height: 1; }
        .process-title { font-size: 20px; font-weight: 600; margin-bottom: 10px; }
        .process-desc { font-size: 14px; line-height: 1.7; color: rgba(245,240,232,0.5); font-family: Outfit, sans-serif; }
        .testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .testimonial-card { padding: 40px; border-radius: 12px; position: relative; }
        .testimonial-quote { font-size: clamp(15px, 1.5vw, 17px); line-height: 1.7; font-style: italic; color: rgba(245,240,232,0.8); margin-bottom: 24px; font-family: Outfit, sans-serif; }
        .testimonial-author { font-size: 13px; font-weight: 600; color: #c9a84c; letter-spacing: 1px; }
        .faq-list { display: flex; flex-direction: column; gap: 0; }
        .faq-item { border-bottom: 1px solid rgba(201,168,76,0.1); }
        .faq-question { width: 100%; background: none; border: none; color: #f5f0e8; text-align: left; font-size: 18px; font-weight: 500; padding: 28px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: Space Grotesk, sans-serif; }
        .faq-question:hover { color: #c9a84c; }
        .faq-item input { display: none; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s; opacity: 0; font-size: 14px; line-height: 1.8; color: rgba(245,240,232,0.55); font-family: Outfit, sans-serif; padding-bottom: 0; }
        .faq-item input:checked ~ .faq-answer { max-height: 300px; opacity: 1; padding-bottom: 28px; }
        .faq-icon { transition: transform 0.3s; flex-shrink: 0; margin-left: 16px; color: #c9a84c; }
        .faq-item input:checked ~ .faq-question .faq-icon { transform: rotate(45deg); }
        .cta-final { text-align: center; padding: 140px 24px; position: relative; overflow: hidden; }
        .cta-final-title { font-size: clamp(40px, 6vw, 80px); font-weight: 700; letter-spacing: -2px; line-height: 1; margin-bottom: 28px; }
        .cta-final-sub { font-size: 16px; color: rgba(245,240,232,0.55); font-family: Outfit, sans-serif; margin-bottom: 48px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .cta-btn { display: inline-flex; align-items: center; gap: 12px; padding: 20px 56px; background: linear-gradient(135deg, #c9a84c, #e8d48b); color: #0a0a0a; font-weight: 700; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 4px; transition: all 0.3s; font-family: Outfit, sans-serif; }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 50px rgba(201,168,76,0.45); }
        .footer { text-align: center; padding: 48px 24px; border-top: 1px solid rgba(201,168,76,0.1); font-size: 13px; color: rgba(245,240,232,0.3); font-family: Outfit, sans-serif; }
        .work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .work-item { aspect-ratio: 4/3; border-radius: 10px; overflow: hidden; position: relative; cursor: pointer; }
        .work-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .work-item:hover img { transform: scale(1.05); }
        .work-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.8), transparent); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 24px; }
        .work-item:hover .work-overlay { opacity: 1; }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .services-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .stat-row { gap: 28px; }
          .process-item { grid-template-columns: 50px 1fr; gap: 20px; }
          .work-grid { grid-template-columns: 1fr; }
          .section-pad { padding: 80px 20px; }
        }
      `}</style>

      <div className="grain" />
      <div className="cursor" id="cursor" />

      <nav className="nav" id="nav">
        <div className="nav-logo gold-gradient">Nate Baron</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#contact" className="cta-btn" style={{ padding: '10px 24px', fontSize: '12px' }}>Book a Call</a>
      </nav>

      <section className="hero-wrap">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 24px' }}>
          <p className="hero-title-sub reveal">Dallas, TX · Available Worldwide</p>
          <h1 className="hero-title reveal">
            <span className="gold-gradient">Cinematic</span><br />
            Photography
          </h1>
          <p className="hero-desc reveal">
            Wedding. Portrait. Product. Brand. I bring a film-maker&apos;s eye to every project — making people and products look their absolute best.
          </p>
          <a href="#contact" className="hero-cta reveal">
            Book a call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      <section className="section-pad" id="about" ref={aboutRef}>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-image-wrap">
              <div className="about-image-glow" />
              <div className="about-image-placeholder">📷</div>
            </div>
            <div className="stat-row">
              <div className="stat"><span className="stat-n">200+</span><span className="stat-l">Projects</span></div>
              <div className="stat"><span className="stat-n">8+</span><span className="stat-l">Years</span></div>
              <div className="stat"><span className="stat-n">100%</span><span className="stat-l">Cinematic</span></div>
            </div>
          </div>
          <div>
            <p className="section-label reveal">About</p>
            <h2 className="section-title reveal" style={{ marginBottom: '32px' }}>Every frame tells a story</h2>
            <div className="about-text">
              <p className="reveal">{BRAND.bio}</p>
              <p className="reveal">My approach blends editorial precision with documentary warmth — I direct when it matters and disappear when it doesn&apos;t. The result: images that feel alive, honest, and unmistakably premium.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" id="services" ref={servicesRef}>
        <p className="section-label reveal">What I Do</p>
        <h2 className="section-title reveal">Services</h2>
        <div className="services-grid">
          {BRAND.services.map((s, i) => (
            <div key={i} className="service-card glass reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="service-icon">{s.icon}</span>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" id="work">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal">Recent Projects</h2>
        <div className="work-grid">
          {[
            { img: 'photo-1582794543139-8ac9cb0b3f6f', label: 'Wedding Editorial' },
            { img: 'photo-1441974231531-c6227db76b6e', label: 'Portrait Session' },
            { img: 'photo-1516035069491-b8e4b4c46bb1', label: 'Product Campaign' },
            { img: 'photo-1506794778202-cad23a7f3c8f', label: 'Brand Story' },
          ].map((item, i) => (
            <div key={i} className="work-item reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <img src={`https://images.unsplash.com/${item.img}?w=800&q=80`} alt={item.label} />
              <div className="work-overlay">
                <span style={{ fontSize: '13px', fontFamily: 'Outfit, sans-serif', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <a href="https://unsplash.com/photos/a-house-nestled-beside-a-forest-and-stream-a8b6zP1wEDQ" target="_blank" rel="noopener noreferrer" className="hero-cta reveal" style={{ fontSize: '12px', padding: '14px 32px' }}>
            View full portfolio
          </a>
        </div>
      </section>

      <section className="section-pad" id="why">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p className="section-label reveal">Why Work With Me</p>
            <h2 className="section-title reveal">Craft that converts</h2>
            <p className="reveal" style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(245,240,232,0.65)', fontFamily: 'Outfit, sans-serif', marginBottom: '32px' }}>
              Great photography does more than look good — it builds trust, drives engagement, and sells. Every session is built around your specific goals.
            </p>
            {[
              { title: 'Cinematic Editing', desc: 'Color grades and retouching inspired by film — not generic filters.' },
              { title: 'Fast Turnaround', desc: '7-14 days from shoot to final files, no exceptions.' },
              { title: 'Full Usage Rights', desc: 'You get unrestricted commercial usage on every delivered image.' },
              { title: 'Dallas-Based + Travel', desc: 'Available worldwide — destination weddings, off-site brand shoots.' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                <span style={{ color: '#c9a84c', fontSize: '16px', marginTop: '2px', flexShrink: 0 }}>✦</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(245,240,232,0.5)', fontFamily: 'Outfit, sans-serif' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)' }}>
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80" alt="Camera in use" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className="section-pad" id="process">
        <p className="section-label reveal">How It Works</p>
        <h2 className="section-title reveal">The Process</h2>
        <div className="process-list">
          {BRAND.process.map((item, i) => (
            <div key={i} className="process-item reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="process-n">{item.step}</div>
              <div>
                <div className="process-title">{item.title}</div>
                <div className="process-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" id="testimonials">
        <p className="section-label reveal">Social Proof</p>
        <h2 className="section-title reveal">What Clients Say</h2>
        <div className="testimonials-grid">
          {BRAND.testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <div style={{ color: '#c9a84c', fontSize: '28px', marginBottom: '20px', lineHeight: 1 }}>&ldquo;</div>
              <div className="testimonial-quote">{t.quote}</div>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" id="faq">
        <p className="section-label reveal">FAQ</p>
        <h2 className="section-title reveal">Common Questions</h2>
        <div className="faq-list">
          {[
            { q: 'How far in advance should I book?', a: 'For weddings, 3-6 months minimum. Portraits and product work, 1-2 weeks ahead.' },
            { q: 'Do you travel for destination shoots?', a: 'Absolutely. I regularly work across the US and internationally — travel fees apply.' },
            { q: 'What is your turnaround time?', a: '7-14 days for all final edited files, delivered via private online gallery.' },
            { q: 'Do I get full commercial rights?', a: 'Yes. Every package includes unrestricted commercial usage rights.' },
            { q: 'Can you shoot both photo and video?', a: 'Photo bundles with motion add-ons are available — ask during our call.' },
          ].map((item, i) => (
            <div key={i} className="faq-item reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <input type="checkbox" id={`faq-${i}`} />
              <label htmlFor={`faq-${i}`} className="faq-question">
                {item.q}
                <span className="faq-icon">+</span>
              </label>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-final" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1208 100%)' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p className="section-label reveal">Ready to Start?</p>
          <h2 className="cta-final-title reveal">
            Let&apos;s create something<br /><span className="gold-gradient">extraordinary.</span>
          </h2>
          <p className="cta-final-sub reveal">
            Book a free 15-minute discovery call. No commitment, no pitch — just a conversation about your vision.
          </p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="cta-btn reveal">
            {BRAND.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nate Baron Photography · Dallas, TX · Available Worldwide</p>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        var c = document.getElementById('cursor');
        document.addEventListener('mousemove', function(e){ c.style.left=e.clientX+'px'; c.style.top=e.clientY+'px'; });
        document.querySelectorAll('a,button,.service-card,.work-item').forEach(function(el){
          el.addEventListener('mouseenter',function(){ c.classList.add('hover'); });
          el.addEventListener('mouseleave',function(){ c.classList.remove('hover'); });
        });
        window.addEventListener('scroll',function(){
          document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60);
        });
        window.addEventListener('scroll',function(){
          var y=window.scrollY;
          document.querySelectorAll('.hero-orb').forEach(function(orb){
            orb.style.transform='translate(0,'+(y*0.3)+'px)';
          });
        });
      ` }} />
    </div>
  )
}

export default App