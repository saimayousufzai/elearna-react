import React, { useEffect, useState } from 'react';
import { assets, courses, portraitCourses, categories } from './data';
import { AboutPage, CoursePage, BlogPage, ContactPage } from './InnerPages.jsx';

const ICONS = {
  arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  arrowUp: <><path d="M7 17 17 7M7 7h10v10"/></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  left: <><path d="m14 18-6-6 6-6"/></>,
  right: <><path d="m10 18 6-6-6-6"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="M5 5 19 19M19 5 5 19"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
  star: <path d="m12 2 3.1 6.6 7.2 1-5.2 5.1 1.25 7.2L12 18.5l-6.35 3.4 1.25-7.2L1.7 9.6l7.2-1z"/>,
  book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 4v16a2 2 0 0 0 2 2h14"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><path d="M17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5"/></>,
  palette: <><circle cx="12" cy="12" r="9"/><circle cx="7.5" cy="10" r="1"/><circle cx="11" cy="6.5" r="1"/><circle cx="16" cy="8" r="1"/><path d="M18 16c0 2-3 2-4 1-2-2 1-4 0-6"/></>,
  chart: <><path d="M3 3v18h18"/><path d="m6 16 5-5 4 3 6-8"/></>,
  monitor: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/></>,
  megaphone: <><path d="m3 11 15-7v16L3 13z"/><path d="M7 14 10 21h4l-3-7M19 9l3-1m-3 6 3 1"/></>,
  code: <><path d="m9 7-5 5 5 5m6-10 5 5-5 5M13 4l-2 16"/></>,
  pencil: <><path d="m4 20 4-.7L20 7.3 16.7 4 4.7 16z"/><path d="m14.5 6.5 3 3"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"/></>,
  award: <><circle cx="12" cy="9" r="6"/><path d="m8 14-1 8 5-3 5 3-1-8"/></>,
  bulb: <><path d="M9 18h6m-5 4h4M8 15a7 7 0 1 1 8 0l-1 2H9z"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  certificate: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8M8 12h6m-2 3 3 2.5 3-2.5"/></>,
  heart: <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2z"/>,
  bag: <><path d="M4 8h16l-1 13H5zM9 9V6a3 3 0 0 1 6 0v3"/></>,
  mail: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  phone: <path d="M7 3H4a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3l-6-3-3 3a16 16 0 0 1-5-5l3-3z"/>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
  play: <path d="m8 5 11 7-11 7z"/>,
  shield: <><path d="M12 2 4 5v7c0 5 4 8 8 10 4-2 8-5 8-10V5z"/><path d="m8 12 3 3 5-6"/></>,
  quote: <><path d="M11 6C6 6 4 10 4 15v3h7v-7H7m14-5c-5 0-7 4-7 9v3h7v-7h-4"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  checkCircle: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
};

function Icon({ name, size = 21, strokeWidth = 1.75, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name] || ICONS.arrow}</svg>;
}

function ExternalImage({ src, alt = '', className = '', loading = 'lazy', ...props }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return failed
    ? <div className={`image-fallback ${className}`} role="img" aria-label={alt}><Icon name="book" size={40}/></div>
    : <img {...props} className={className} loading={loading} src={src} alt={alt} onError={() => setFailed(true)} />;
}

function Logo({ onClick }) {
  return <a href="/home-one" className="brand" aria-label="Elearna Home One" onClick={e => {e.preventDefault(); onClick('/home-one');}}>
    <span className="brand-symbol"><span/></span><span><span className="brand-e">e</span>learna</span>
  </a>;
}

function Button({ children, onClick, light = false, outline = false, className = '', icon = 'arrowUp', type = 'button' }) {
  return <button type={type} className={`btn ${light?'btn-light':''} ${outline?'btn-outline':''} ${className}`} onClick={onClick}>{children} <Icon name={icon} size={16}/></button>;
}

const NAV_LINKS = [
  {title:'Home', choices:[['Home One','/home-one'],['Home Two','/home-two']]},
  {title:'Courses', choices:[['Course One','/course-one'],['Course Two','/course-two']]},
  {title:'Pages', choices:[['About One','/about-one'],['About Two','/about-two']]},
  {title:'Blog', choices:[['Blog One','/blog-one'],['Blog Two','/blog-two']]},
  {title:'Contact', choices:[['Contact One','/contact-one'],['Contact Two','/contact-two']]},
];
function Header({ variant, route, navigate, setAuthOpen, cartCount, setCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {setScrolled(window.scrollY > 35)}
    onScroll(); window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  function go(path) {setMobileOpen(false);setExpanded(null);navigate(path)}
  const showTop = ['/home-two','/blog-one','/blog-two'].includes(route);
  return <>
    {showTop && <div className="top-announcement"><div className="container announcement-inner"><span>Are you interested in online coaching? <a href="mailto:support@example.com">Contact us.</a></span><span className="announcement-contact"><Icon name="mail" size={13}/> support@example.com <span className="bar"/> <Icon name="phone" size={13}/> Call: (888) 123 4567</span></div></div>}
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${showTop?'header-two':''}`}>
      <div className="container nav-wrap">
        <Logo onClick={go}/>
        <nav className={`main-nav ${mobileOpen?'mobile-expanded':''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({title,choices})=><div key={title} className={`nav-home ${expanded===title?'open':''}`} onMouseEnter={()=>setExpanded(title)} onMouseLeave={()=>setExpanded(v=>v===title?null:v)}>
            <button type="button" className={`nav-item nav-trigger ${choices.some(([,path])=>route===path)?'nav-active':''}`} aria-expanded={expanded===title} aria-haspopup="true" onClick={()=>setExpanded(expanded===title?null:title)}>{title}<Icon name="chevron" size={13}/></button>
            <div className="dropdown-menu" role="group" aria-label={`${title} pages`}>
              {choices.map(([label,path])=><a key={path} href={path} aria-current={route===path?'page':undefined} className={route===path?'current':''} onClick={e=>{e.preventDefault();go(path)}}>{label}<Icon name="arrowUp" size={14}/></a>)}
            </div>
          </div>)}
          <div className="mobile-auth"><button onClick={()=>{setAuthOpen('login');setMobileOpen(false)}}>Login</button><button onClick={()=>{setAuthOpen('register');setMobileOpen(false)}}>Register</button></div>
        </nav>
        <div className="nav-actions"><button className="cart-button" aria-label={`Cart with ${cartCount} courses`} onClick={()=>setCartOpen(true)}><Icon name="bag" size={19}/><span>{cartCount}</span></button><button className="nav-login" onClick={()=>setAuthOpen('login')}>Login</button><button className="register-btn" onClick={()=>setAuthOpen('register')}>Register <Icon name="arrowUp" size={14}/></button></div>
        <button className="mobile-toggle" onClick={()=>setMobileOpen(v=>!v)} aria-expanded={mobileOpen} aria-label={mobileOpen?'Close menu':'Open menu'}><Icon name={mobileOpen?'close':'menu'} size={27}/></button>
      </div>
    </header>
  </>;
}

function SectionHeading({ eyebrow, title, text, center = false, right, invert=false }) {
  return <div className={`section-heading ${center?'text-center':''} ${invert?'inverse':''}`}>
    <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>
    {right && <div className="heading-right">{right}</div>}
  </div>;
}

function CategoryGrid({ onCategory, variant = 'one' }) {
  return <div className={`category-grid ${variant==='two'?'category-grid-two':''}`}>{categories.map(item=><button key={item.name} className="category-card" onClick={()=>onCategory(item.name)}>
    <span className="category-icon"><Icon name={item.icon} size={29} strokeWidth={1.4}/></span>
    <strong>{item.name}</strong><span className="small-muted">{item.count}</span>
    <span className="cat-hover-arrow"><Icon name="arrowUp" size={15}/></span>
  </button>)}</div>;
}

function Logos() {
  return <div className="logos-section"><div className="container"><p>Learn from 350+ leading universities and companies with us</p><div className="partner-logos">{assets.companyLogos.map((url,index)=><ExternalImage key={url} alt={`University and company partner ${index+1}`} src={url}/>)}</div></div></div>;
}

function CourseCard({ course, onDetails, addToCart, variant = 'one', index=0 }) {
  const image = variant==='two' ? portraitCourses[index % portraitCourses.length] : course.image;
  return <article className={`course-card ${variant==='two'?'course-card-portrait':''}`}>
    <button className="course-image" aria-label={`View ${course.name}`} onClick={()=>onDetails(course)}><ExternalImage alt={course.name} src={image}/><span className="course-image-arrow"><Icon name="arrowUp" size={18}/></span></button>
    <div className="course-body">
      <div className="course-meta-top"><span className="course-tag">{course.category}</span><span className="course-price">{course.price}</span></div>
      <h3><button onClick={()=>onDetails(course)}>{course.name}</button></h3>
      <div className="rating"><span className="rating-star"><Icon name="star" size={14}/></span><b>{course.rating}</b><span>({course.reviews})</span></div>
      {variant==='one' && <div className="course-facts"><span><Icon name="book" size={17}/>{course.lessons} Lessons</span><span><Icon name="users" size={17}/>{course.enrolled} Enrolled</span></div>}
      <div className="course-footer"><button className="details-link" onClick={()=>onDetails(course)}>Course Details <Icon name="arrowUp" size={14}/></button>{course.price!=='Free'&&<button className="round-plus" onClick={()=>addToCart(course)} title="Add to demo cart" aria-label={`Add ${course.name} to cart`}><Icon name="plus" size={18}/></button>}</div>
    </div>
  </article>;
}

function CoursesSection({ variant = 'one', initialFilter, onDetails, addToCart }) {
  const [filter, setFilter] = useState('All courses');
  useEffect(()=>{ if (initialFilter) setFilter(initialFilter); },[initialFilter]);
  const tabs=['All courses','Design','Development','Management','Finance'];
  const defaultCourses = variant==='two' ? [courses[8],courses[3],courses[2],courses[4],courses[6],courses[5]] : courses;
  const visible = defaultCourses.filter(c=>filter==='All courses'||c.category===filter).slice(0,8);
  return <section className={`courses-section section-pad ${variant==='two'?'courses-two':''}`} id="courses"><div className="container">
    <SectionHeading eyebrow="Online learning" title="Top online courses" right={variant==='one'?<div className="course-tabs" role="tablist" aria-label="Course categories">{tabs.map(tab=><button key={tab} role="tab" aria-selected={filter===tab} className={filter===tab?'active':''} onClick={()=>setFilter(tab)}>{tab}</button>)}</div>:null}/>
    <div className={`courses-grid ${variant==='two'?'courses-grid-portrait':''}`}>{visible.map((item,i)=><CourseCard key={item.id} course={item} onDetails={onDetails} addToCart={addToCart} variant={variant} index={i}/>)}</div>
    <div className="course-browse">We assist you in finding the ideal tutor at no cost. <a href="#courses" onClick={e=>{e.preventDefault();setFilter('All courses');document.getElementById('courses')?.scrollIntoView({behavior:'smooth'});}}>Browse all available courses <Icon name="arrow" size={16}/></a></div>
  </div></section>;
}

function StudentHero({ navigate }) {
  return <section className="hero hero-one">
    <div className="hero-decoration hero-circle"/><span className="hero-ring"/><span className="hero-dot hero-dot-1"/><span className="hero-dot hero-dot-2"/>
    <div className="container hero-one-grid"><div className="hero-visual">
      <div className="hero-yellow-brush"/><ExternalImage className="hero-student" loading="eager" src={assets.heroStudent} alt="Smiling student with glasses holding learning books"/>
      <ExternalImage className="hero-achievement" loading="eager" src={assets.achievement} alt="Achievement awards"/>
      <ExternalImage className="hero-trusted" loading="eager" src={assets.trusted} alt="Successful students rating"/>
      <span className="visual-ring"/>
    </div><div className="hero-copy"><span className="eyebrow hero-eyebrow">Online learning</span><h1>More then <em>25000+</em> education courses online</h1><p>Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.</p><Button outline className="hero-cta" onClick={()=>navigate('#courses')}>Get Started</Button></div></div>
  </section>;
}

function CategoriesOne({ onCategory, navigate }) {
  return <section className="categories-section section-pad"><div className="container"><SectionHeading eyebrow="Top Categories" title="Discover leading categories to elevate your journey" center/><CategoryGrid onCategory={onCategory}/><div className="quick-banner"><div><span>QUICK ACCESS TO THE POPULAR COURSES</span><h3>Discover a new way<br/>of learning today.</h3><Button onClick={()=>navigate('#courses')}>View Courses</Button></div><div className="quick-photo"><ExternalImage src={assets.womanLaptop} alt="Student working with a laptop"/></div><div className="quick-side"><span>YOUR FUTURE STARTS HERE</span><h3>Develop your skills online!</h3><button onClick={()=>navigate('/home-two')}>Apply now <Icon name="arrowUp" size={16}/></button></div></div></div></section>;
}

function AboutOne({ navigate }) {
  const points=['Skill-based instruction','Analytics and insights','Global certification','Customizable courses'];
  return <section className="about-section section-pad" id="about"><div className="container about-grid"><div className="about-photos"><div className="about-shape"/><ExternalImage className="about-man" src={assets.manGraph} alt="Learner presenting a graph"/><ExternalImage className="about-woman" src={assets.womanTablet} alt="Student using a tablet"/><div className="about-stat"><strong>25k+</strong><span>Online students</span></div></div><div className="about-copy"><span className="eyebrow">what we Offer</span><h2>Personalized learning for your ambitions</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><div className="check-grid">{points.map(p=><div key={p}><span className="checkmark"><Icon name="check" size={14}/></span>{p}</div>)}</div><div className="question-box"><span className="question-icon"><Icon name="phone" size={22}/></span><div><strong>Still have questions?</strong><p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div></div><Button onClick={()=>navigate('/home-two')}>Get Started</Button></div></div></section>;
}

const testimonials=[
  {quote:'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.',name:'Linda Grady',job:'Co-assistant manager',image:assets.testimonial1},
  {quote:'Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.',name:'Jim Adams',job:'Designer',image:assets.testimonial2},
];
function Testimonials({ variant='one' }) {
  const [index, setIndex]=useState(0);
  const t=testimonials[index];
  return <section className={`testimonials-section section-pad ${variant==='two'?'testimonials-two':''}`} id="testimonials"><div className="container"><SectionHeading eyebrow="Our testimonials" title="Trusted by our successful students" center={variant==='one'}/><div className="testimonials-layout"><div className="testimonial-stats"><div><strong>15M<span>+</span></strong><span>Successful students</span></div><div><strong>125<span>K</span></strong><span>Global job placements</span></div></div><div className="testimonial-card"><span className="quote-mark"><Icon name="quote" size={38}/></span><div className="testimonial-stars">★★★★★</div><blockquote>“{t.quote}”</blockquote><div className="testimonial-bottom"><div className="person"><ExternalImage src={t.image} alt={t.name}/><div><strong>{t.name}</strong><span>{t.job}</span></div></div><div className="slider-controls"><button onClick={()=>setIndex((index+testimonials.length-1)%testimonials.length)} aria-label="Previous testimonial"><Icon name="left" size={19}/></button><button onClick={()=>setIndex((index+1)%testimonials.length)} aria-label="Next testimonial"><Icon name="right" size={19}/></button></div></div></div></div></div></section>;
}

function Trending({ onDetails, addToCart }) {
  const featured=[courses[8],courses[3],courses[4],courses[5]];
  return <section className="trending-section section-pad"><div className="container"><SectionHeading eyebrow="Trending courses" title="Explore our top programs"/><div className="trending-grid">{featured.map(c=><article key={c.id} className="trending-item"><div className="trending-img"><ExternalImage src={c.image} alt={c.name}/></div><div className="trending-content"><span className="course-tag">{c.category}</span><button className="trending-name" onClick={()=>onDetails(c)}>{c.name}</button><div className="rating"><span className="rating-star"><Icon name="star" size={14}/></span><b>{c.rating}</b><span>({c.reviews})</span></div><div className="trending-bottom"><strong>{c.price}</strong><button onClick={()=>c.price==='Free'?onDetails(c):addToCart(c)}><Icon name="arrowUp" size={19}/></button></div></div></article>)}</div></div></section>;
}

function WhyChoose() {
  const benefits=[['globe','Learn anything'],['chart','Save money'],['clock','Flexible courses'],['certificate','Unlimited certificate']];
  return <section className="why-section section-pad" id="benefits"><div className="container"><SectionHeading eyebrow="Why we are" title="Elevate your professional journey" center text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."/><div className="benefits-grid">{benefits.map(([icon,label])=><div className="benefit-card" key={label}><div className="benefit-icon"><Icon name={icon} size={32}/></div><h3>{label}</h3><p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></div>)}</div></div></section>;
}

function CoachHero() {
  return <section className="hero hero-two"><div className="hero-coach-glow"/><div className="container coach-hero-inner"><div className="coach-big-word"><span>PERSONAL</span><strong>COACH</strong></div><ExternalImage className="coach-person" src={assets.heroCoach} alt="Personal learning coach" loading="eager"/><div className="coach-hero-copy"><span className="eyebrow">Online learning</span><h1>Transform <em>learning</em> with flexible online education</h1><p>Learn something new every day with expert-led courses built around your goals.</p><a href="#categories" className="coach-arrow-button" aria-label="Explore categories"><Icon name="arrow" size={19}/></a></div></div></section>;
}
function CoachFeatureStrip() {
  const items=[['book','150+ online courses'],['user','Personalized learning'],['award','Lifetime update']];
  return <section className="coach-feature-wrapper"><div className="container"><div className="coach-feature-strip">{items.map(([icon,title])=><div className="coach-feature" key={title}><span><Icon name={icon} size={27}/></span><div><strong>{title}</strong><p>Lorem ipsum dolor sit amet</p></div></div>)}</div></div></section>;
}
function CategoriesTwo({ onCategory }) {
  return <section className="section-pad categories-two" id="categories"><div className="container"><div className="categories-two-layout"><div><span className="eyebrow">Top Categories</span><h2>Discover leading categories</h2><p>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec.</p><a className="btn" href="#courses">Get Started <Icon name="arrowUp" size={15}/></a></div><CategoryGrid variant="two" onCategory={onCategory}/></div></div></section>;
}
function Potential() {
  const points=[['01','Flexibility and convenience'],['02','Course accessibility'],['03','Cost-effectiveness'],['04','Personalized learning']];
  return <section className="potential-section section-pad" id="about"><div className="container"><SectionHeading eyebrow="Unlocking Potential" title="Discover the boundless advantages and transformative power of eLearning for professional growth"/><div className="potential-layout"><div className="potential-images"><ExternalImage className="potential-img p1" src={assets.potential1} alt="Learning online"/><ExternalImage className="potential-img p2" src={assets.potential2} alt="Studying with laptop"/><ExternalImage className="potential-img p3" src={assets.potential3} alt="Student portrait"/><div className="potential-sticker">Your success<br/><b>starts here!</b> <Icon name="arrowUp" size={24}/></div></div><div className="potential-list">{points.map(([num,title])=><div className="potential-row" key={num}><span>{num}</span><div><h3>{title}</h3><p>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.</p></div><Icon name="arrowUp" size={21}/></div>)}</div></div></div></section>;
}
function WorldClass({ navigate }) {
  return <section className="world-section section-pad"><div className="container world-grid"><div className="world-photo"><ExternalImage src={assets.womanSecond} alt="Woman learning online"/><div className="world-badge">100%<small>Flexible classes</small></div></div><div className="world-copy"><span className="eyebrow">Why we are</span><h2>World-class learning from anywhere</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><div className="world-stats"><div><strong>12K<span>+</span></strong><small>Finish seasons</small></div><div><strong>157K</strong><small>Enrolled</small></div><div><strong>95%</strong><small>Job placement</small></div></div><div className="question-box"><span className="question-icon"><Icon name="phone" size={21}/></span><div><strong>Still have questions?</strong><p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div></div><Button onClick={()=>navigate('#courses')}>Get Started</Button></div></div></section>;
}
function LearnMoreBanner({ navigate }) {
  return <section className="learn-more-banner"><div className="container learn-more-inner"><div><span className="eyebrow">what we Offer</span><h2>Personalized learning for your ambitions</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><Button light onClick={()=>navigate('#courses')}>Get Course</Button></div><div className="learn-illustration"><ExternalImage src={assets.manGraph} alt="Online learning instructor"/></div></div></section>;
}
const blogs=[
  {cat:'Career',title:'Improve knowledge retention with visual learning',date:'October 4, 2024',photo:assets.blog1},
  {cat:'Development',title:'Master online learning with proven strategies',date:'October 4, 2024',photo:assets.blog2},
  {cat:'Teaching',title:'How to enhance your learning experience today',date:'October 3, 2024',photo:assets.blog3}
];
function Blogs() {
  return <section className="blogs-section section-pad" id="blog"><div className="container"><SectionHeading eyebrow="Education Blog" title="Our news and ideas" text="Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis."/><div className="blog-grid">{blogs.map(blog=><article className="blog-card" key={blog.title}><ExternalImage alt={blog.title} src={blog.photo}/><div><span className="blog-category">{blog.cat}</span><h3>{blog.title}</h3><span className="blog-date">{blog.date}</span></div></article>)}</div></div></section>;
}
function EndCTA({ navigate }) {
  return <section className="end-cta"><div className="container end-cta-inner"><div><h2>Are you ready to start your journey?</h2><p>Take the next step toward a brighter future with the right skills.</p></div><div className="end-buttons"><Button light onClick={()=>navigate('#courses')}>Browse courses</Button><Button outline onClick={()=>navigate('/home-two')}>Became a teacher</Button></div></div></section>;
}
function Footer({navigate}) {
 function link(e,path){e.preventDefault();navigate(path)}
 return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-left"><Logo onClick={navigate}/><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p><div className="footer-social"><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div></div><div className="footer-col"><h4>Quick links</h4><a href="/home-one" onClick={e=>link(e,'/home-one')}>Home One</a><a href="/home-two" onClick={e=>link(e,'/home-two')}>Home Two</a><a href="/course-one" onClick={e=>link(e,'/course-one')}>Course One</a><a href="/course-two" onClick={e=>link(e,'/course-two')}>Course Two</a></div><div className="footer-col"><h4>Popular pages</h4><a href="/about-one" onClick={e=>link(e,'/about-one')}>About One</a><a href="/about-two" onClick={e=>link(e,'/about-two')}>About Two</a><a href="/blog-one" onClick={e=>link(e,'/blog-one')}>Blog One</a><a href="/blog-two" onClick={e=>link(e,'/blog-two')}>Blog Two</a></div><div className="footer-col"><h4>Support</h4><a href="/contact-one" onClick={e=>link(e,'/contact-one')}>Contact One</a><a href="/contact-two" onClick={e=>link(e,'/contact-two')}>Contact Two</a><a href="mailto:info@example.com">info@example.com</a><a href="tel:+18881234567">(888) 123 4567</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Elearna React Demo. Independently recreated from the public Elearna design.</span><span>Home / Courses / Pages / Blog / Contact — Two versions each</span></div></div></footer>;
}

function AuthModal({ kind, onClose }) {
  const [sent,setSent]=useState(false);
  useEffect(()=>{setSent(false)},[kind]);
  if(!kind) return null;
  return <div className="overlay" onMouseDown={onClose}><div className="modal auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="close"/></button><span className="eyebrow">Welcome to Elearna</span><h2 id="auth-title">{kind==='login'?'Login to your account':'Create an account'}</h2>{sent?<div className="demo-feedback"><Icon name="checkCircle" size={36}/><strong>Form preview submitted</strong><p>This is a frontend-only demo. No account was created or logged in.</p><Button onClick={onClose}>Close</Button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}>{kind==='register'&&<label>Full name<input required autoComplete="name" placeholder="Your full name"/></label>}<label>Email address<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Password<input type="password" required minLength={6} autoComplete={kind==='login'?'current-password':'new-password'} placeholder="••••••••"/></label><button className="btn auth-submit" type="submit">{kind==='login'?'Login':'Register'} <Icon name="arrowUp" size={16}/></button><p className="tiny-notice">Demo interface only — no backend or real authentication connected.</p></form>}</div></div>;
}
function CourseModal({ course, onClose, onAdd }) {
  if(!course) return null;
  return <div className="overlay" onMouseDown={onClose}><div className="modal course-modal" role="dialog" aria-modal="true" aria-labelledby="course-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="close"/></button><ExternalImage className="modal-course-photo" src={course.image} alt={course.name}/><div className="modal-course-copy"><span className="eyebrow">{course.category} · Online learning</span><h2 id="course-title">{course.name}</h2><div className="rating"><span className="rating-star">★</span> {course.rating} ({course.reviews} reviews)</div><p>Explore this practical course designed to develop confidence, build skills, and help you learn at your own pace.</p><div className="course-facts"><span><Icon name="book"/>{course.lessons} Lessons</span><span><Icon name="users"/>{course.enrolled} Enrolled</span></div><div className="modal-cta"><strong>{course.price}</strong><Button onClick={()=>{onAdd(course);onClose()}}>{course.price==='Free'?'Save course':'Add to cart'}</Button></div><p className="tiny-notice">Preview details only. Course enrollment is not connected to a backend.</p></div></div></div>;
}
function CartDrawer({ open, onClose, items, setItems }) {
  const sum=items.reduce((n,i)=>n+(Number(i.price.replace('$',''))||0),0);
  return open?<div className="overlay cart-overlay" onMouseDown={onClose}><aside className="cart-drawer" onMouseDown={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Course cart"><div className="cart-header"><h2>Your Cart <span>({items.length})</span></h2><button onClick={onClose} aria-label="Close cart"><Icon name="close"/></button></div>{items.length?<><div className="cart-items">{items.map(i=><div key={i.id} className="cart-line"><ExternalImage src={i.image} alt={i.name}/><div><strong>{i.name}</strong><small>{i.price}</small><button onClick={()=>setItems(v=>v.filter(x=>x.id!==i.id))}>Remove</button></div></div>)}</div><div className="cart-total">Subtotal <strong>${sum}</strong></div><p className="tiny-notice">This is a demo cart without payment processing.</p><button className="btn cart-close-action" onClick={onClose}>Continue learning <Icon name="arrow" size={16}/></button></>:<div className="cart-empty"><Icon name="bag" size={58}/><h3>Your cart is empty</h3><p>Explore courses and add your favorites here.</p><Button onClick={onClose}>Browse courses</Button></div>}</aside></div>:null;
}

function HomeOne({ navigate, onDetails, addToCart, setCategory, selectedFilter }) {
  return <><StudentHero navigate={navigate}/><Logos/><CategoriesOne onCategory={setCategory} navigate={navigate}/><CoursesSection variant="one" onDetails={onDetails} addToCart={addToCart} initialFilter={selectedFilter}/><AboutOne navigate={navigate}/><Testimonials/><Trending onDetails={onDetails} addToCart={addToCart}/><WhyChoose/></>;
}
function HomeTwo({ navigate, onDetails, addToCart, setCategory, selectedFilter }) {
  return <><CoachHero/><CoachFeatureStrip/><CategoriesTwo onCategory={setCategory}/><Potential/><CoursesSection variant="two" onDetails={onDetails} addToCart={addToCart} initialFilter={selectedFilter}/><WorldClass navigate={navigate}/><LearnMoreBanner navigate={navigate}/><Logos/><Testimonials variant="two"/><Blogs/></>;
}

export default function App() {
  const validRoutes = NAV_LINKS.flatMap(x=>x.choices.map(item=>item[1]));
  function currentPage() {
    if(window.location.protocol==='file:'){
      const hashRoute = decodeURIComponent(window.location.hash.slice(1).split('#')[0]);
      return validRoutes.includes('/'+hashRoute.replace(/^\//,''))?'/'+hashRoute.replace(/^\//,''):'/home-one';
    }
    const route = window.location.pathname.replace(/\/$/,'') || '/home-one';
    return validRoutes.includes(route)?route:'/home-one';
  }
  const [page,setPage]=useState(currentPage);
  const [authOpen,setAuthOpen]=useState(null);
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItems,setCartItems]=useState([]);
  const [selectedFilter,setSelectedFilter]=useState('All courses');
  const [selectedCourse,setSelectedCourse]=useState(null);
  const [notice,setNotice]=useState('');
  useEffect(()=>{function pop(){setPage(currentPage());window.scrollTo({top:0,behavior:'instant'})}window.addEventListener('popstate',pop);window.addEventListener('hashchange',pop);return()=>{window.removeEventListener('popstate',pop);window.removeEventListener('hashchange',pop)}},[]);
  useEffect(()=>{const label=NAV_LINKS.flatMap(x=>x.choices).find(([,url])=>url===page)?.[0]||'Home One';document.title=`Elearna — ${label}`;},[page]);
  // Scroll-enter motion, kept optional for reduced-motion devices and older browsers.
  useEffect(()=>{
    if (typeof window.IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const selector='.inner-banner-content, .inner-section .inner-title, .inner-section .about-intro-layout, .inner-section .inner-two-col, .inner-contact-details, .inner-contact-form, .section-heading, .about-grid, .benefits-grid, .testimonial-card, .potential-grid, .inner-philosophy, .inner-values';
    const nodes=Array.from(document.querySelectorAll(selector));
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}});
    },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    nodes.forEach(n=>{n.classList.add('motion-target');observer.observe(n);});
    return ()=>{observer.disconnect();nodes.forEach(n=>n.classList.remove('motion-target','is-revealed'));};
  },[page]);

  useEffect(()=>{if(!notice)return; const t=window.setTimeout(()=>setNotice(''),3200);return()=>clearTimeout(t)},[notice]);
  function navigate(dest) {
    if(dest.startsWith('#')) {const target=document.getElementById(dest.slice(1)); if(target){target.scrollIntoView({behavior:'smooth',block:'start'});return;}dest='/course-one#inner-list';}
    const [path,hash]=dest.split('#');const next=validRoutes.includes(path)?path:'/home-one';
    if(window.location.protocol==='file:'){window.location.hash=next.slice(1)}
    else if(window.location.pathname+window.location.hash!==dest)window.history.pushState({},'',dest);
    setPage(next);
    window.setTimeout(()=>{if(hash)document.getElementById(hash)?.scrollIntoView({behavior:'smooth'});else window.scrollTo({top:0,behavior:'instant'})},65);
  }
  function addToCart(course){if(cartItems.some(item=>item.id===course.id)){setNotice('This course is already in your demo cart.');return;}setCartItems(prev=>[...prev,course]);setNotice(course.price==='Free'?'Free course saved to your demo cart.':'Course added to your demo cart.')}
  function selectCategory(name){const category=name.toLowerCase().includes('finance')?'Finance':name.toLowerCase().includes('design')?'Design':'Development';setSelectedFilter(category);navigate('#courses');setNotice(`Showing ${category} courses.`)}
  function renderedPage(){
    const common={navigate,onDetails:setSelectedCourse,addToCart};
    switch(page){
      case '/home-two':return <HomeTwo {...common} setCategory={selectCategory} selectedFilter={selectedFilter}/>;
      case '/course-one':return <CoursePage {...common} number={1}/>;
      case '/course-two':return <CoursePage {...common} number={2}/>;
      case '/about-one':return <AboutPage navigate={navigate} number={1}/>;
      case '/about-two':return <AboutPage navigate={navigate} number={2}/>;
      case '/blog-one':return <BlogPage number={1}/>;
      case '/blog-two':return <BlogPage number={2}/>;
      case '/contact-one':return <ContactPage number={1}/>;
      case '/contact-two':return <ContactPage number={2}/>;
      default:return <HomeOne {...common} setCategory={selectCategory} selectedFilter={selectedFilter}/>;
    }
  }
  return <><Header variant={page==='/home-two'?'two':'one'} route={page} navigate={navigate} cartCount={cartItems.length} setAuthOpen={setAuthOpen} setCartOpen={setCartOpen}/>
    <main className={`route-view route-${page.slice(1)}`} key={page}>{renderedPage()}</main>
    <EndCTA navigate={navigate}/><Footer navigate={navigate}/>
    <AuthModal kind={authOpen} onClose={()=>setAuthOpen(null)}/><CourseModal course={selectedCourse} onClose={()=>setSelectedCourse(null)} onAdd={addToCart}/><CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} items={cartItems} setItems={setCartItems}/>
    {notice&&<div className="toast" role="status"><Icon name="checkCircle" size={18}/>{notice}</div>}
  </>;
}
