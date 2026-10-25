import React, {useState} from 'react';
import {assets, courses, portraitCourses, categories} from './data';
import './inner-pages.css';

const moreImages = {
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop',
  library: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85&auto=format&fit=crop',
  laptop: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85&auto=format&fit=crop',
  study: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=85&auto=format&fit=crop',
  teacher: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85&auto=format&fit=crop',
  creative: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85&auto=format&fit=crop',
};
const paragraphs = 'Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.';
const short = 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.';
const posts = [
  {cat:'Career', title:'Improve knowledge retention with visual learning', date:'October 4, 2024', dateSmall:'10.4.2024', author:'Nina Leffler', img:assets.blog1},
  {cat:'Development', title:'Master online learning with proven strategies', date:'October 4, 2024', dateSmall:'4.10.2024', author:'Samantha Dicki', img:assets.blog2},
  {cat:'Teaching', title:'How to enhance your learning experience today', date:'October 3, 2024', dateSmall:'3.10.2024', author:'Edwin Waters', img:assets.blog3},
  {cat:'Career', title:'The evolution of teaching tools in the 21st century', date:'September 17, 2024', dateSmall:'17.9.2024', author:'Edward Braun', img:moreImages.teacher},
  {cat:'Development', title:'The role of parental involvement in academic achievement', date:'September 16, 2024', dateSmall:'16.9.2024', author:'Jesse Johnson', img:moreImages.team},
  {cat:'Teaching', title:'The role of technology in modern classrooms', date:'September 14, 2024', dateSmall:'14.9.2024', author:'Samantha Dicki', img:moreImages.laptop},
  {cat:'Career', title:'How globalization is shaping curriculum development', date:'September 13, 2024', dateSmall:'13.9.2024', author:'Edwin Waters', img:moreImages.library},
  {cat:'Teaching', title:'How personalized learning is changing education', date:'September 12, 2024', dateSmall:'12.9.2024', author:'Gerald Nienow', img:moreImages.study},
  {cat:'Development', title:'Empowering teachers with continuous professional development', date:'September 11, 2024', dateSmall:'11.9.2024', author:'Nina Leffler', img:moreImages.creative},
];
const questions = [
  'How do I enroll in an online course?',
  'Are there any prerequisites for enrolling in online courses?',
  'What are the technical requirements for online learning?',
  'What if I encounter technical difficulties?',
  'Are there live classes, or can I learn at my own pace?',
];
function Glyph({type='arrow',size=19}){
 const paths={arrow:<><path d="M5 12h14m-7-7 7 7-7 7"/></>,up:<><path d="M7 17 17 7M8 7h9v9"/></>,clock:<><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>,check:<path d="m4 12 5 5L20 6"/>,chev:<path d="m6 9 6 6 6-6"/>,star:<path d="m12 2 3.2 6.5L22 9.5l-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 6.8-1z"/>,pin:<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,mail:<><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>,phone:<><path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 3 5c0-1 1-2 2-2"/></>,search:<><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></>,plus:<path d="M12 4v16M4 12h16"/>};
 return <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}
function Picture({src,alt='',className=''}){
 const [error,setError]=useState(false);
 return error?<span role="img" aria-label={alt} className={'inner-image-fallback '+className}>ELEARNA</span>:<img className={className} src={src} alt={alt} loading="lazy" onError={()=>setError(true)}/>;
}
function LinkBtn({children,onClick,variant=''}){return <button className={'inner-button '+variant} onClick={onClick}>{children}<Glyph type="up" size={16}/></button>}
function Banner({eyebrow,title,desc,compact=false,variant='default'}) {
 const isContact=variant.startsWith('contact');
 const isAbout=variant.startsWith('about');
 const isBlog=variant.startsWith('blog');
 const isCourse=variant.startsWith('course');
 const image=isContact?assets.contactBackground:isAbout?(variant==='about-two'?assets.aboutTwoPhoto:assets.aboutOnePhoto):isBlog?assets.blog1:assets.womanLaptop;
 return <section className={'inner-banner inner-banner-'+variant+' '+(compact?'inner-banner-short':'')}>
   <div className="inner-banner-backdrop" style={{backgroundImage:`url('${image}')`}} aria-hidden="true"/>
   <div className="inner-banner-grain" aria-hidden="true"/>
   <div className="container inner-banner-content">
     <div className="inner-hero-text"><span className="inner-eyebrow">{eyebrow}</span><h1>{title}</h1>{desc&&<p>{desc}</p>}
       <div className="inner-hero-rule"><span/><span/></div>
     </div>
     {isAbout&&<div className="inner-hero-art about-art"><Picture src={variant==='about-two'?assets.aboutEmployee:assets.aboutOnePhoto} alt="Elearna students and professional learning"/><span className="inner-art-stamp">LEARN • GROW • SUCCEED</span></div>}
     {isCourse&&<div className="inner-hero-art course-art"><Picture src={assets.womanLaptop} alt="Online courses and student learning"/><span className="inner-art-float"><b>150+</b><small>Online courses</small></span></div>}
     {isBlog&&<div className="inner-hero-art blog-art"><Picture src={variant==='blog-two'?assets.blog2:assets.blog1} alt="Ideas and learning journal"/><span className="inner-art-stamp">OUR NEWS & IDEAS</span></div>}
     {isContact&&<div className="inner-hero-art contact-art"><div className="contact-art-ring"/><Picture src={assets.contactBackground} alt="Elearna contact illustration"/><span className="inner-art-stamp">WE'D LOVE TO HEAR FROM YOU</span></div>}
   </div>
   <span className="inner-banner-circle circle-a"/><span className="inner-banner-circle circle-b"/>
 </section>
}
function Title({eyebrow,title,text='',center=false}){return <div className={'inner-title '+(center?'center':'')}><span className="inner-eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
function StatBar(){return <div className="inner-stats">{[['12K+','Finish seasons'],['157K','Enrolled'],['95%','Job placement']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}
function AboutFeature(){return <div className="inner-feature-row">{[['✦','150+ online courses'],['◎','Personalized learning'],['♕','Lifetime update']].map(([icon,t])=><div key={t}><span>{icon}</span><strong>{t}</strong><small>Lorem ipsum dolor sit amet</small></div>)}</div>}
function CategoriesMini({navigate}){return <div className="inner-category-grid">{categories.map(({name,count,icon},i)=><button onClick={()=>navigate('/course-one#inner-list')} className="inner-category" key={name}><span>{['✐','▥','⌘','✳','⌨','✎'][i]}</span><strong>{name}</strong><small>{count}</small><b><Glyph type="up" size={16}/></b></button>)}</div>}
function PhotoGrid(){return <div className="inner-portrait-grid"><Picture src={assets.manGraph} alt="Learning professional"/><Picture src={assets.womanTablet} alt="Woman working with tablet"/><span>25<small>Years of experience</small></span></div>}
function Vision({navigate}){return <section className="inner-section inner-pale"><div className="container inner-two-col"><PhotoGrid/><div><Title eyebrow="Our vision" title="75K+ student joined with us to achieve their goals" text={short}/><ul className="inner-checks">{['Skill-based instruction','Analytics and insights','Global certification','Customizable courses'].map(t=><li key={t}><Glyph type="check" size={17}/>{t}</li>)}</ul><LinkBtn onClick={()=>navigate('/contact-one')}>Get Started</LinkBtn></div></div></section>}
function ReferencePartners(){return <section className="reference-partners"><div className="container"><p>Learn from 350+ leading universities and companies with us</p><div className="reference-partner-logos">{assets.companyLogos.map((src,i)=><Picture src={src} alt={'Learning partner '+(i+1)} key={src}/>)}</div></div></section>}
function InstructorInvitation({navigate}){return <section className="inner-section instructor-invitation"><div className="container instructor-invitation-grid"><div><span className="inner-eyebrow">Start teaching today</span><h2>Became an instructor</h2><p>Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.</p><LinkBtn onClick={()=>navigate('/contact-one')}>Start teaching today</LinkBtn></div><div className="instructor-invitation-photo"><Picture src={assets.aboutEmployee} alt="Elearna instructor"/><span>Share your knowledge<br/>with the world</span></div></div></section>}
function AboutQuote(){return <section className="inner-section inner-about-quote"><div className="container"><div className="quote-symbol">“</div><p>“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”</p><strong>Linda Grady</strong><small>Co-assistant manager</small></div></section>}
function Values(){return <section className="inner-section"><div className="container"><Title eyebrow="Why we are" title="We believe in our good education and development system and we know how to work together to reach greater success" center/><div className="inner-values">{['Flexibility and convenience','Course accessibility','Cost-effectiveness','Personalized learning'].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>{short}</p></div>)}</div></div></section>}
export function AboutPage({number,navigate}){
 const isTwo=number===2;
 return <div className="inner-page inner-about">
 <Banner eyebrow="About us" title="You’re sincerely determined to grow" variant={isTwo?'about-two':'about-one'}/>
 <section className="inner-section"><div className="container"><div className={'about-intro-layout '+(isTwo?'about-two-layout':'')}><div className="about-intro-images"><Picture src={isTwo?assets.aboutTwoPhoto:assets.aboutOnePhoto} alt="Our education and learning community"/><div className="about-intro-stamp"><strong>{isTwo?'25':'350+'}</strong><span>{isTwo?'Year of experience':'Trusted partners'}</span></div></div><div><Title eyebrow="Our Story" title="Limitless learning and get more possibilities" text={paragraphs}/><p className="inner-muted">{short}</p><StatBar/></div></div></div></section>
 {isTwo?<><section className="inner-section inner-pale"><div className="container"><Title eyebrow="Our philosophy" title="Get instant access courses" center/><div className="inner-philosophy">{['Web design','Web development','Management','Finance'].map((x,i)=><button key={x} onClick={()=>navigate('/course-one')}><Picture src={assets.categoryPhotos[i]} alt={x}/><strong>{x}</strong><Glyph type="up"/></button>)}</div></div></section><Values/><section className="inner-section"><div className="container inner-two-col"><div><Picture className="inner-feature-image" src={moreImages.study} alt="Students achieving goals"/></div><div><Title eyebrow="Our vision" title="75K+ student joined with us to achieve their goals" text={short}/><AboutFeature/><LinkBtn onClick={()=>navigate('/contact-two')}>Start teaching today</LinkBtn></div></div></section></>:<><div className="container"><AboutFeature/></div><Values/><Vision navigate={navigate}/></>}
 <ReferencePartners/><InstructorInvitation navigate={navigate}/>{!isTwo&&<AboutQuote/>}
 <section className="inner-section"><div className="container"><Title eyebrow="Education Blog" title="Our news and ideas" text={short}/><div className="inner-blog-grid">{posts.slice(0,3).map(post=><BlogTile key={post.title} post={post} onClick={()=>navigate('/blog-one')}/>)}</div></div></section>
 </div>;
}
function CourseTile({course,onDetails,addToCart,portrait=false,index=0}){
 const src=portrait?portraitCourses[index%portraitCourses.length]:course.image;
 return <article className={'inner-course-tile '+(portrait?'portrait':'')}><button className="inner-course-cover" onClick={()=>onDetails(course)} aria-label={'Details of '+course.name}><Picture src={src} alt={course.name}/><span><Glyph type="up" size={18}/></span></button><div className="inner-course-info"><div className="inner-course-label"><span>{course.category}</span><b>{course.price}</b></div><button className="inner-course-name" onClick={()=>onDetails(course)}>{course.name}</button><div className="inner-course-rating"><Glyph type="star" size={15}/><strong>{course.rating}</strong> ({course.reviews})</div>{!portrait&&<div className="inner-course-stat"><span>◫ {course.lessons} Lessons</span><span>♙ {course.enrolled} Enrolled</span></div>}<div className="inner-course-actions"><button onClick={()=>onDetails(course)}>Course Details <Glyph type="up" size={15}/></button>{course.price!=='Free'&&<button className="inner-add" onClick={()=>addToCart(course)} title="Add to demo cart"><Glyph type="plus" size={18}/></button>}</div></div></article>;
}
export function CoursePage({number,navigate,onDetails,addToCart}){
 const [filter,setFilter]=useState('All courses');const [currentPage,setCurrentPage]=useState(1);
 const isTwo=number===2;
 const filtered=courses.filter(x=>filter==='All courses'||x.category===filter);
 const shown=filtered.slice((currentPage-1)*8,currentPage*8);
 function changeFilter(value){setFilter(value);setCurrentPage(1)}
 return <div className="inner-page"><Banner eyebrow="START WITH" title="Professional online courses" variant={isTwo?'course-two':'course-one'} compact/>
 {isTwo?<section className="inner-section inner-pale"><div className="container"><div className="inner-with-action"><Title eyebrow="Top Categories" title="Discover leading categories"/><LinkBtn onClick={()=>navigate('#inner-list')}>Get Started</LinkBtn></div><CategoriesMini navigate={navigate}/></div></section>:<section className="inner-section inner-pale"><div className="container"><CategoriesMini navigate={navigate}/></div></section>}
 <section id="inner-list" className="inner-section"><div className="container"><Title eyebrow="Online learning" title={isTwo?'Top online courses':'Popular courses'}/><div className="inner-filter-row"><div className="inner-filters">{['All courses','Design','Development','Management','Finance'].map(c=><button key={c} className={filter===c?'selected':''} onClick={()=>changeFilter(c)}>{c}</button>)}</div><span>{filtered.length} courses</span></div><div className={'inner-courses-grid '+(isTwo?'inner-courses-portrait':'')}>{shown.map((course,i)=><CourseTile key={course.id} course={course} index={i} portrait={isTwo} onDetails={onDetails} addToCart={addToCart}/>)}</div>{filtered.length>8&&<div className="inner-pagination">{[1,2].map(v=><button className={v===currentPage?'selected':''} key={v} onClick={()=>{setCurrentPage(v);document.getElementById('inner-list')?.scrollIntoView({behavior:'smooth'})}}>{v}</button>)}</div>}</div></section>
 </div>;
}
function BlogTile({post,onClick,horizontal=false}){return <article className={'inner-blog-card '+(horizontal?'horizontal':'')}><button className="inner-blog-photo" onClick={onClick}><Picture src={post.img} alt={post.title}/></button><div className="inner-blog-card-copy"><span className="inner-blog-tag">{post.cat}</span><h3><button onClick={onClick}>{post.title}</button></h3><div className="inner-blog-date">{post.date} <span>↗</span></div></div></article>}
export function BlogPage({number}){
 const isTwo=number===2;const [opened,setOpened]=useState(null); const [search,setSearch]=useState('');const visible=posts.filter(x=>(x.title+' '+x.cat).toLowerCase().includes(search.toLowerCase()));
 return <div className="inner-page"><Banner eyebrow="News and journals" title="Planning to transition to a new career?" variant={isTwo?'blog-two':'blog-one'} compact/>
 <section className="inner-section"><div className="container"><div className="inner-blog-toolbar"><div><span className="inner-eyebrow">Education Blog</span><h2>Our news and ideas</h2></div><label className="inner-search"><Glyph type="search"/><input aria-label="Search blog articles" placeholder="Search articles" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
 {visible.length?isTwo?<div className="inner-blog-list">{visible.map((p,i)=><div key={p.title} className={'inner-blog-list-item '+(i===0?'lead':'')}><button className="inner-blog-list-image" onClick={()=>setOpened(p)}><Picture src={p.img} alt={p.title}/></button><div className="inner-blog-list-text"><span>{p.dateSmall} &nbsp; / &nbsp; {p.author}</span><h3><button onClick={()=>setOpened(p)}>{p.title}</button></h3>{i===0&&<p>{short}</p>}<button className="read-link" onClick={()=>setOpened(p)}>Read article <Glyph type="arrow" size={17}/></button></div></div>)}</div>:<div className="inner-blog-grid">{visible.slice(0,6).map(p=><BlogTile key={p.title} post={p} onClick={()=>setOpened(p)}/>)}</div>:<p>No articles match your search.</p>}</div></section>
 {opened&&<div className="overlay" onMouseDown={()=>setOpened(null)}><div role="dialog" aria-modal="true" className="inner-article-modal" onMouseDown={e=>e.stopPropagation()}><button className="inner-article-close" aria-label="Close article" onClick={()=>setOpened(null)}>×</button><Picture src={opened.img} alt={opened.title}/><div><span className="inner-eyebrow">{opened.cat} · {opened.date}</span><h2>{opened.title}</h2><p>{paragraphs}</p><p>{short}</p><p className="inner-muted">This is a frontend article preview, without a CMS connection.</p></div></div></div>}
 </div>
}
function ContactDetails(){return <div className="inner-contact-details">{[['pin','Area location', '410 Sandtown, California 94001, USA'],['phone','Contact details','888-123-4567 · info@example.com'],['clock','Opening hours','Monday–Friday, 10:30 a.m. – 7:00 p.m.']].map(([icon,title,detail])=><div key={title}><span><Glyph type={icon} size={24}/></span><div><strong>{title}</strong><p>{detail}</p></div></div>)}</div>}
function ContactForm(){const [submitted,setSubmitted]=useState(false);return <div className="inner-contact-form"><h3>Fill out for contact</h3><p>Lorem ipsum dolor sit amet consectetur libero donec.</p>{submitted?<div className="inner-form-success"><Glyph type="check" size={31}/><strong>Thank you! Your message has been recorded in this demo.</strong><span>No email was sent — connect a form service to enable submissions.</span><button onClick={()=>setSubmitted(false)}>Send another message</button></div>:<form onSubmit={e=>{e.preventDefault();setSubmitted(true)}}><div className="inner-form-row"><label><span>Your name *</span><input required placeholder="Your name" autoComplete="name"/></label><label><span>Your email *</span><input type="email" required placeholder="Your email" autoComplete="email"/></label></div><label><span>Subject</span><input placeholder="Subject" required/></label><label><span>Message *</span><textarea required rows="5" placeholder="Write your message"/></label><label className="inner-checkbox"><input type="checkbox"/> Save information for the next time comment.</label><button type="submit" className="inner-button">Send message <Glyph type="up" size={17}/></button></form>}</div>}
function FAQ(){const [expanded,setExpanded]=useState(0);return <section className="inner-section inner-faq"><div className="container inner-faq-layout"><div><span className="inner-eyebrow">Contact Us</span><h2>Frequently asked questions</h2><Picture src={assets.contactBackground} alt="Online learning support"/></div><div>{questions.map((q,i)=><div className={'inner-faq-item '+(expanded===i?'active':'')} key={q}><button onClick={()=>setExpanded(expanded===i?-1:i)} aria-expanded={expanded===i}>{q}<span>{expanded===i?'−':'+'}</span></button>{expanded===i&&<p>Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.</p>}</div>)}</div></div></section>}
export function ContactPage({number}){
 const isTwo=number===2;
 return <div className="inner-page inner-contact"><Banner eyebrow="Contact us" title="Contact us" variant={isTwo?'contact-two':'contact-one'} compact/>
 <section className="inner-section"><div className="container"><div className={'inner-contact-layout '+(isTwo?'contact-layout-two':'')}><div className="inner-contact-lead"><Title eyebrow="Contact Us" title={isTwo?"Get details information about online courses, contact us. we're happy to discuss":"Are you interested in online learning? Contact us"} text={paragraphs}/>{isTwo?<ContactDetails/>:<><div className="inner-signature"><Picture className="signature-svg" src={assets.signature} alt="Signature of director"/><span>Brayden Backham <small>Director</small></span></div></>}</div><ContactForm/></div></div></section>
 {isTwo?<section className="inner-section inner-pale"><div className="container"><div className="inner-huge-contact contact-marquee" aria-label="Get in touch with me today"><span>Get in touch with me today &nbsp; ✳ &nbsp; Get in touch with me today &nbsp; ✳ &nbsp;</span></div><div className="inner-contact-photo-strip"><Picture src={assets.aboutTwoPhoto} alt="Workspace"/><Picture src={assets.aboutOnePhoto} alt="Learners"/><Picture src={assets.aboutEmployee} alt="Our team"/></div></div></section>:<section className="inner-section inner-pale"><div className="container"><Title eyebrow="Contact details" title="Find our location"/><ContactDetails/></div></section>}
 <FAQ/></div>
}
