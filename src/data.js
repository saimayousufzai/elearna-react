// All photography is loaded from external HTTPS image URLs, as requested.
// Most URLs below reference the publicly accessible Elearna demo CDN.
const brandCDN = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/';
const coursesCDN = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/';

export const assets = {
  // Original graphics from the Elearna Webflow public CDN, referenced remotely.
  contactBackground: brandCDN + '66de9b2474f1094cb7ea1767_Contact%20Us%20One.webp',
  aboutOnePhoto: brandCDN + '66d9685910e51570ad70d12e_Employ%20Images.webp',
  aboutTwoPhoto: brandCDN + '66daee82ea8dfe862f20b4e4_Office%20Image-2.webp',
  aboutEmployee: brandCDN + '66daee819397693612f2103a_Girl%20Image-2.webp',
  aboutEmployeeTwo: brandCDN + '66da9a051cb82fa9e66bb1cf_About%20Two%20Employe%20Image.webp',
  whiteTrusted: brandCDN + '66f640175a11d2c4db6078d6_Trusted%20By%20Image%20In%20White.avif',
  signature: brandCDN + '66de9b2588280abadd4e26df_Signature.svg',
  categoryPhotos: [
    '66da9a05aa9e740b88ae7a79_Category%20Cards%20Four%20Image.webp',
    '66da9a063bb8f3786af79ac7_Category%20Cards%20Four%20Image-2.webp',
    '66da9a0513cc43ec3ac57975_Category%20Cards%20Four%20Image-3.webp',
    '66da9a0676bc7a4c6602a446_Category%20Cards%20Four%20Image-5.webp',
  ].map(name => brandCDN + name),
  heroStudent: brandCDN + '66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp',
  heroCoach: brandCDN + '66d6b65afa48c134cb3e9ab1_Home%20Three%20Hero%20Man%20Image.webp',
  achievement: brandCDN + '66c6fb8b79cb093fa869be54_Achievements.webp',
  trusted: brandCDN + '66f638f0e915508fda239b73_Trusted%20By%20Image.avif',
  womanLaptop: brandCDN + '66c86806b094d5e2529855a0_Woman%20Using%20Laptop.webp',
  manGraph: brandCDN + '66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp',
  womanTablet: brandCDN + '66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy.webp',
  womanSecond: brandCDN + '66cff274cdd4c2243b9ba324_Woman%20Image.webp',
  potential1: brandCDN + '66cff2777e50749c4b90b5dd_Potential%20Image-2.webp',
  potential2: brandCDN + '66cff277582c8617efcf31ab_Potential%20Image-3.webp',
  potential3: brandCDN + '66cff277ceae6c7605edbd6e_Potential%20Image-4.webp',
  testimonial1: brandCDN + '66cd560b74d8d4d4ed334d02_Testimonial%20Author%20Image.avif',
  testimonial2: brandCDN + '66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2.avif',
  blog1: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=850&q=82&auto=format&fit=crop',
  blog2: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=850&q=82&auto=format&fit=crop',
  blog3: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=850&q=82&auto=format&fit=crop',
  companyLogos: [
    '66c6fb8bca715a603abbc84f_Clients%20Logo.svg',
    '66c6fb8b87b34b4188395ff2_Clients%20Logo-4.svg',
    '66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg',
    '66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg',
    '66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg',
    '66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg'
  ].map(name => brandCDN + name),
};

export const courses = [
  {id:1, category:'Management', name:'Crisis management and problem-solving strategies', price:'Free', rating:'4.88', reviews:'210', lessons:6, enrolled:'8k', image: coursesCDN+'66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp'},
  {id:2, category:'Design', name:'Advanced photoshop techniques for designers', price:'Free', rating:'5.00', reviews:'1.2K', lessons:8, enrolled:'25k', image: coursesCDN+'66fe66442929de6e874b3284_Course%20Image.webp'},
  {id:3, category:'Finance', name:'Operations management and process improvement', price:'Free', rating:'5.00', reviews:'812', lessons:12, enrolled:'23k', image: coursesCDN+'66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp'},
  {id:4, category:'Development', name:'Database integration with MongoDB', price:'$59', rating:'4.49', reviews:'756', lessons:10, enrolled:'7k', image: coursesCDN+'66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp'},
  {id:5, category:'Management', name:'Risk management and business continuity', price:'$49', rating:'4.88', reviews:'210', lessons:3, enrolled:'8k', image: coursesCDN+'66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp'},
  {id:6, category:'Development', name:'Full-stack development with the MERN stack', price:'$72', rating:'5.00', reviews:'985', lessons:12, enrolled:'22k', image: coursesCDN+'66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp'},
  {id:7, category:'Design', name:'Design systems and pattern libraries', price:'$99', rating:'5.00', reviews:'1.2K', lessons:8, enrolled:'25k', image: coursesCDN+'66fe66cdef763efcc757aefb_Course%20Image-2.webp'},
  {id:8, category:'Design', name:'Learn interactive Web Design by building real projects', price:'$79', rating:'4.49', reviews:'756', lessons:12, enrolled:'23k', image: coursesCDN+'66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp'},
  {id:9, category:'Development', name:'Building single page applications with angular', price:'Free', rating:'5.00', reviews:'328', lessons:6, enrolled:'12k', image: coursesCDN+'66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp'},
  {id:10, category:'Management', name:'Grow your brand and reach your audience', price:'$49', rating:'4.88', reviews:'210', lessons:10, enrolled:'8k', image: coursesCDN+'66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp'},
  {id:11, category:'Finance', name:'The complete guide to personal and business finance', price:'$99', rating:'4.88', reviews:'210', lessons:10, enrolled:'8k', image: coursesCDN+'66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp'},
];

export const portraitCourses = [
  coursesCDN+'66ebabcd61399462d208146a_Course%20Portrait%20Image.webp',
  coursesCDN+'66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp',
  coursesCDN+'66ebabf4c17d78e3224b9b5b_Course%20Portrait%20Image-8.webp',
  coursesCDN+'66ebac0cfd1f38c62e59431b_Course%20Portrait%20Image-7.webp',
  coursesCDN+'66fe66cdef763efcc757aefb_Course%20Image-2.webp',
  coursesCDN+'66fe66442929de6e874b3284_Course%20Image.webp',
];

export const categories = [
  {name:'Creative web design', count:'8 Courses', icon:'palette'},
  {name:'Finance accounting', count:'10 Courses', icon:'chart'},
  {name:'IT and software', count:'5 Courses', icon:'monitor'},
  {name:'Digital marketing', count:'4 Courses', icon:'megaphone'},
  {name:'Web development', count:'8 Courses', icon:'code'},
  {name:'Content writing', count:'3 Courses', icon:'pencil'},
];
