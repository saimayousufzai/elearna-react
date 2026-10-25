/* Generated Elearna CDN preview. React and ReactDOM must be loaded by preview/index.html. */
(function(){
'use strict';
const registry = Object.create(null), cache = Object.create(null);
function load(id){if(id==='react')return window.React; if(id==='react-dom/client')return {createRoot:window.ReactDOM.createRoot};if(id.endsWith('.css'))return {};if(cache[id])return cache[id].exports;const f=registry[id];if(!f)throw new Error('Unknown module: '+id);const module={exports:{}};cache[id]=module;f(module,module.exports,load);return module.exports;}
registry["./data.js"]=function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = exports.portraitCourses = exports.courses = exports.assets = void 0;
// All photography is loaded from external HTTPS image URLs, as requested.
// Most URLs below reference the publicly accessible Elearna demo CDN.
const brandCDN = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/';
const coursesCDN = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/';
exports.assets = {
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
exports.courses = [
    { id: 1, category: 'Management', name: 'Crisis management and problem-solving strategies', price: 'Free', rating: '4.88', reviews: '210', lessons: 6, enrolled: '8k', image: coursesCDN + '66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp' },
    { id: 2, category: 'Design', name: 'Advanced photoshop techniques for designers', price: 'Free', rating: '5.00', reviews: '1.2K', lessons: 8, enrolled: '25k', image: coursesCDN + '66fe66442929de6e874b3284_Course%20Image.webp' },
    { id: 3, category: 'Finance', name: 'Operations management and process improvement', price: 'Free', rating: '5.00', reviews: '812', lessons: 12, enrolled: '23k', image: coursesCDN + '66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp' },
    { id: 4, category: 'Development', name: 'Database integration with MongoDB', price: '$59', rating: '4.49', reviews: '756', lessons: 10, enrolled: '7k', image: coursesCDN + '66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp' },
    { id: 5, category: 'Management', name: 'Risk management and business continuity', price: '$49', rating: '4.88', reviews: '210', lessons: 3, enrolled: '8k', image: coursesCDN + '66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp' },
    { id: 6, category: 'Development', name: 'Full-stack development with the MERN stack', price: '$72', rating: '5.00', reviews: '985', lessons: 12, enrolled: '22k', image: coursesCDN + '66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp' },
    { id: 7, category: 'Design', name: 'Design systems and pattern libraries', price: '$99', rating: '5.00', reviews: '1.2K', lessons: 8, enrolled: '25k', image: coursesCDN + '66fe66cdef763efcc757aefb_Course%20Image-2.webp' },
    { id: 8, category: 'Design', name: 'Learn interactive Web Design by building real projects', price: '$79', rating: '4.49', reviews: '756', lessons: 12, enrolled: '23k', image: coursesCDN + '66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp' },
    { id: 9, category: 'Development', name: 'Building single page applications with angular', price: 'Free', rating: '5.00', reviews: '328', lessons: 6, enrolled: '12k', image: coursesCDN + '66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp' },
    { id: 10, category: 'Management', name: 'Grow your brand and reach your audience', price: '$49', rating: '4.88', reviews: '210', lessons: 10, enrolled: '8k', image: coursesCDN + '66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp' },
    { id: 11, category: 'Finance', name: 'The complete guide to personal and business finance', price: '$99', rating: '4.88', reviews: '210', lessons: 10, enrolled: '8k', image: coursesCDN + '66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp' },
];
exports.portraitCourses = [
    coursesCDN + '66ebabcd61399462d208146a_Course%20Portrait%20Image.webp',
    coursesCDN + '66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp',
    coursesCDN + '66ebabf4c17d78e3224b9b5b_Course%20Portrait%20Image-8.webp',
    coursesCDN + '66ebac0cfd1f38c62e59431b_Course%20Portrait%20Image-7.webp',
    coursesCDN + '66fe66cdef763efcc757aefb_Course%20Image-2.webp',
    coursesCDN + '66fe66442929de6e874b3284_Course%20Image.webp',
];
exports.categories = [
    { name: 'Creative web design', count: '8 Courses', icon: 'palette' },
    { name: 'Finance accounting', count: '10 Courses', icon: 'chart' },
    { name: 'IT and software', count: '5 Courses', icon: 'monitor' },
    { name: 'Digital marketing', count: '4 Courses', icon: 'megaphone' },
    { name: 'Web development', count: '8 Courses', icon: 'code' },
    { name: 'Content writing', count: '3 Courses', icon: 'pencil' },
];

};
registry["./InnerPages.jsx"]=function(module,exports,require){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutPage = AboutPage;
exports.CoursePage = CoursePage;
exports.BlogPage = BlogPage;
exports.ContactPage = ContactPage;
const react_1 = __importStar(require("react"));
const data_1 = require("./data.js");
require("./inner-pages.css");
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
    { cat: 'Career', title: 'Improve knowledge retention with visual learning', date: 'October 4, 2024', dateSmall: '10.4.2024', author: 'Nina Leffler', img: data_1.assets.blog1 },
    { cat: 'Development', title: 'Master online learning with proven strategies', date: 'October 4, 2024', dateSmall: '4.10.2024', author: 'Samantha Dicki', img: data_1.assets.blog2 },
    { cat: 'Teaching', title: 'How to enhance your learning experience today', date: 'October 3, 2024', dateSmall: '3.10.2024', author: 'Edwin Waters', img: data_1.assets.blog3 },
    { cat: 'Career', title: 'The evolution of teaching tools in the 21st century', date: 'September 17, 2024', dateSmall: '17.9.2024', author: 'Edward Braun', img: moreImages.teacher },
    { cat: 'Development', title: 'The role of parental involvement in academic achievement', date: 'September 16, 2024', dateSmall: '16.9.2024', author: 'Jesse Johnson', img: moreImages.team },
    { cat: 'Teaching', title: 'The role of technology in modern classrooms', date: 'September 14, 2024', dateSmall: '14.9.2024', author: 'Samantha Dicki', img: moreImages.laptop },
    { cat: 'Career', title: 'How globalization is shaping curriculum development', date: 'September 13, 2024', dateSmall: '13.9.2024', author: 'Edwin Waters', img: moreImages.library },
    { cat: 'Teaching', title: 'How personalized learning is changing education', date: 'September 12, 2024', dateSmall: '12.9.2024', author: 'Gerald Nienow', img: moreImages.study },
    { cat: 'Development', title: 'Empowering teachers with continuous professional development', date: 'September 11, 2024', dateSmall: '11.9.2024', author: 'Nina Leffler', img: moreImages.creative },
];
const questions = [
    'How do I enroll in an online course?',
    'Are there any prerequisites for enrolling in online courses?',
    'What are the technical requirements for online learning?',
    'What if I encounter technical difficulties?',
    'Are there live classes, or can I learn at my own pace?',
];
function Glyph({ type = 'arrow', size = 19 }) {
    const paths = { arrow: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("path", { d: "M5 12h14m-7-7 7 7-7 7" })), up: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("path", { d: "M7 17 17 7M8 7h9v9" })), clock: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
            react_1.default.createElement("path", { d: "M12 6v6l4 2" })), check: react_1.default.createElement("path", { d: "m4 12 5 5L20 6" }), chev: react_1.default.createElement("path", { d: "m6 9 6 6 6-6" }), star: react_1.default.createElement("path", { d: "m12 2 3.2 6.5L22 9.5l-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 6.8-1z" }), pin: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" }),
            react_1.default.createElement("circle", { cx: "12", cy: "10", r: "2.5" })), mail: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "1" }),
            react_1.default.createElement("path", { d: "m4 7 8 6 8-6" })), phone: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("path", { d: "M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 3 5c0-1 1-2 2-2" })), search: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "7" }),
            react_1.default.createElement("path", { d: "m15 15 6 6" })), plus: react_1.default.createElement("path", { d: "M12 4v16M4 12h16" }) };
    return react_1.default.createElement("svg", { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "1.8", viewBox: "0 0 24 24", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, paths[type]);
}
function Picture({ src, alt = '', className = '' }) {
    const [error, setError] = (0, react_1.useState)(false);
    return error ? react_1.default.createElement("span", { role: "img", "aria-label": alt, className: 'inner-image-fallback ' + className }, "ELEARNA") : react_1.default.createElement("img", { className: className, src: src, alt: alt, loading: "lazy", onError: () => setError(true) });
}
function LinkBtn({ children, onClick, variant = '' }) { return react_1.default.createElement("button", { className: 'inner-button ' + variant, onClick: onClick },
    children,
    react_1.default.createElement(Glyph, { type: "up", size: 16 })); }
function Banner({ eyebrow, title, desc, compact = false, variant = 'default' }) {
    const isContact = variant.startsWith('contact');
    const isAbout = variant.startsWith('about');
    const isBlog = variant.startsWith('blog');
    const isCourse = variant.startsWith('course');
    const image = isContact ? data_1.assets.contactBackground : isAbout ? (variant === 'about-two' ? data_1.assets.aboutTwoPhoto : data_1.assets.aboutOnePhoto) : isBlog ? data_1.assets.blog1 : data_1.assets.womanLaptop;
    return react_1.default.createElement("section", { className: 'inner-banner inner-banner-' + variant + ' ' + (compact ? 'inner-banner-short' : '') },
        react_1.default.createElement("div", { className: "inner-banner-backdrop", style: { backgroundImage: `url('${image}')` }, "aria-hidden": "true" }),
        react_1.default.createElement("div", { className: "inner-banner-grain", "aria-hidden": "true" }),
        react_1.default.createElement("div", { className: "container inner-banner-content" },
            react_1.default.createElement("div", { className: "inner-hero-text" },
                react_1.default.createElement("span", { className: "inner-eyebrow" }, eyebrow),
                react_1.default.createElement("h1", null, title),
                desc && react_1.default.createElement("p", null, desc),
                react_1.default.createElement("div", { className: "inner-hero-rule" },
                    react_1.default.createElement("span", null),
                    react_1.default.createElement("span", null))),
            isAbout && react_1.default.createElement("div", { className: "inner-hero-art about-art" },
                react_1.default.createElement(Picture, { src: variant === 'about-two' ? data_1.assets.aboutEmployee : data_1.assets.aboutOnePhoto, alt: "Elearna students and professional learning" }),
                react_1.default.createElement("span", { className: "inner-art-stamp" }, "LEARN \u2022 GROW \u2022 SUCCEED")),
            isCourse && react_1.default.createElement("div", { className: "inner-hero-art course-art" },
                react_1.default.createElement(Picture, { src: data_1.assets.womanLaptop, alt: "Online courses and student learning" }),
                react_1.default.createElement("span", { className: "inner-art-float" },
                    react_1.default.createElement("b", null, "150+"),
                    react_1.default.createElement("small", null, "Online courses"))),
            isBlog && react_1.default.createElement("div", { className: "inner-hero-art blog-art" },
                react_1.default.createElement(Picture, { src: variant === 'blog-two' ? data_1.assets.blog2 : data_1.assets.blog1, alt: "Ideas and learning journal" }),
                react_1.default.createElement("span", { className: "inner-art-stamp" }, "OUR NEWS & IDEAS")),
            isContact && react_1.default.createElement("div", { className: "inner-hero-art contact-art" },
                react_1.default.createElement("div", { className: "contact-art-ring" }),
                react_1.default.createElement(Picture, { src: data_1.assets.contactBackground, alt: "Elearna contact illustration" }),
                react_1.default.createElement("span", { className: "inner-art-stamp" }, "WE'D LOVE TO HEAR FROM YOU"))),
        react_1.default.createElement("span", { className: "inner-banner-circle circle-a" }),
        react_1.default.createElement("span", { className: "inner-banner-circle circle-b" }));
}
function Title({ eyebrow, title, text = '', center = false }) { return react_1.default.createElement("div", { className: 'inner-title ' + (center ? 'center' : '') },
    react_1.default.createElement("span", { className: "inner-eyebrow" }, eyebrow),
    react_1.default.createElement("h2", null, title),
    text && react_1.default.createElement("p", null, text)); }
function StatBar() { return react_1.default.createElement("div", { className: "inner-stats" }, [['12K+', 'Finish seasons'], ['157K', 'Enrolled'], ['95%', 'Job placement']].map(([value, label]) => react_1.default.createElement("div", { key: label },
    react_1.default.createElement("strong", null, value),
    react_1.default.createElement("span", null, label)))); }
function AboutFeature() { return react_1.default.createElement("div", { className: "inner-feature-row" }, [['✦', '150+ online courses'], ['◎', 'Personalized learning'], ['♕', 'Lifetime update']].map(([icon, t]) => react_1.default.createElement("div", { key: t },
    react_1.default.createElement("span", null, icon),
    react_1.default.createElement("strong", null, t),
    react_1.default.createElement("small", null, "Lorem ipsum dolor sit amet")))); }
function CategoriesMini({ navigate }) { return react_1.default.createElement("div", { className: "inner-category-grid" }, data_1.categories.map(({ name, count, icon }, i) => react_1.default.createElement("button", { onClick: () => navigate('/course-one#inner-list'), className: "inner-category", key: name },
    react_1.default.createElement("span", null, ['✐', '▥', '⌘', '✳', '⌨', '✎'][i]),
    react_1.default.createElement("strong", null, name),
    react_1.default.createElement("small", null, count),
    react_1.default.createElement("b", null,
        react_1.default.createElement(Glyph, { type: "up", size: 16 }))))); }
function PhotoGrid() { return react_1.default.createElement("div", { className: "inner-portrait-grid" },
    react_1.default.createElement(Picture, { src: data_1.assets.manGraph, alt: "Learning professional" }),
    react_1.default.createElement(Picture, { src: data_1.assets.womanTablet, alt: "Woman working with tablet" }),
    react_1.default.createElement("span", null,
        "25",
        react_1.default.createElement("small", null, "Years of experience"))); }
function Vision({ navigate }) { return react_1.default.createElement("section", { className: "inner-section inner-pale" },
    react_1.default.createElement("div", { className: "container inner-two-col" },
        react_1.default.createElement(PhotoGrid, null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Title, { eyebrow: "Our vision", title: "75K+ student joined with us to achieve their goals", text: short }),
            react_1.default.createElement("ul", { className: "inner-checks" }, ['Skill-based instruction', 'Analytics and insights', 'Global certification', 'Customizable courses'].map(t => react_1.default.createElement("li", { key: t },
                react_1.default.createElement(Glyph, { type: "check", size: 17 }),
                t))),
            react_1.default.createElement(LinkBtn, { onClick: () => navigate('/contact-one') }, "Get Started")))); }
function ReferencePartners() { return react_1.default.createElement("section", { className: "reference-partners" },
    react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("p", null, "Learn from 350+ leading universities and companies with us"),
        react_1.default.createElement("div", { className: "reference-partner-logos" }, data_1.assets.companyLogos.map((src, i) => react_1.default.createElement(Picture, { src: src, alt: 'Learning partner ' + (i + 1), key: src }))))); }
function InstructorInvitation({ navigate }) { return react_1.default.createElement("section", { className: "inner-section instructor-invitation" },
    react_1.default.createElement("div", { className: "container instructor-invitation-grid" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", { className: "inner-eyebrow" }, "Start teaching today"),
            react_1.default.createElement("h2", null, "Became an instructor"),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis."),
            react_1.default.createElement(LinkBtn, { onClick: () => navigate('/contact-one') }, "Start teaching today")),
        react_1.default.createElement("div", { className: "instructor-invitation-photo" },
            react_1.default.createElement(Picture, { src: data_1.assets.aboutEmployee, alt: "Elearna instructor" }),
            react_1.default.createElement("span", null,
                "Share your knowledge",
                react_1.default.createElement("br", null),
                "with the world")))); }
function AboutQuote() { return react_1.default.createElement("section", { className: "inner-section inner-about-quote" },
    react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "quote-symbol" }, "\u201C"),
        react_1.default.createElement("p", null, "\u201CLorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.\u201D"),
        react_1.default.createElement("strong", null, "Linda Grady"),
        react_1.default.createElement("small", null, "Co-assistant manager"))); }
function Values() { return react_1.default.createElement("section", { className: "inner-section" },
    react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(Title, { eyebrow: "Why we are", title: "We believe in our good education and development system and we know how to work together to reach greater success", center: true }),
        react_1.default.createElement("div", { className: "inner-values" }, ['Flexibility and convenience', 'Course accessibility', 'Cost-effectiveness', 'Personalized learning'].map((x, i) => react_1.default.createElement("div", { key: x },
            react_1.default.createElement("span", null,
                "0",
                i + 1),
            react_1.default.createElement("h3", null, x),
            react_1.default.createElement("p", null, short)))))); }
function AboutPage({ number, navigate }) {
    const isTwo = number === 2;
    return react_1.default.createElement("div", { className: "inner-page inner-about" },
        react_1.default.createElement(Banner, { eyebrow: "About us", title: "You\u2019re sincerely determined to grow", variant: isTwo ? 'about-two' : 'about-one' }),
        react_1.default.createElement("section", { className: "inner-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: 'about-intro-layout ' + (isTwo ? 'about-two-layout' : '') },
                    react_1.default.createElement("div", { className: "about-intro-images" },
                        react_1.default.createElement(Picture, { src: isTwo ? data_1.assets.aboutTwoPhoto : data_1.assets.aboutOnePhoto, alt: "Our education and learning community" }),
                        react_1.default.createElement("div", { className: "about-intro-stamp" },
                            react_1.default.createElement("strong", null, isTwo ? '25' : '350+'),
                            react_1.default.createElement("span", null, isTwo ? 'Year of experience' : 'Trusted partners'))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Title, { eyebrow: "Our Story", title: "Limitless learning and get more possibilities", text: paragraphs }),
                        react_1.default.createElement("p", { className: "inner-muted" }, short),
                        react_1.default.createElement(StatBar, null))))),
        isTwo ? react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("section", { className: "inner-section inner-pale" },
                react_1.default.createElement("div", { className: "container" },
                    react_1.default.createElement(Title, { eyebrow: "Our philosophy", title: "Get instant access courses", center: true }),
                    react_1.default.createElement("div", { className: "inner-philosophy" }, ['Web design', 'Web development', 'Management', 'Finance'].map((x, i) => react_1.default.createElement("button", { key: x, onClick: () => navigate('/course-one') },
                        react_1.default.createElement(Picture, { src: data_1.assets.categoryPhotos[i], alt: x }),
                        react_1.default.createElement("strong", null, x),
                        react_1.default.createElement(Glyph, { type: "up" })))))),
            react_1.default.createElement(Values, null),
            react_1.default.createElement("section", { className: "inner-section" },
                react_1.default.createElement("div", { className: "container inner-two-col" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Picture, { className: "inner-feature-image", src: moreImages.study, alt: "Students achieving goals" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Title, { eyebrow: "Our vision", title: "75K+ student joined with us to achieve their goals", text: short }),
                        react_1.default.createElement(AboutFeature, null),
                        react_1.default.createElement(LinkBtn, { onClick: () => navigate('/contact-two') }, "Start teaching today"))))) : react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement(AboutFeature, null)),
            react_1.default.createElement(Values, null),
            react_1.default.createElement(Vision, { navigate: navigate })),
        react_1.default.createElement(ReferencePartners, null),
        react_1.default.createElement(InstructorInvitation, { navigate: navigate }),
        !isTwo && react_1.default.createElement(AboutQuote, null),
        react_1.default.createElement("section", { className: "inner-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement(Title, { eyebrow: "Education Blog", title: "Our news and ideas", text: short }),
                react_1.default.createElement("div", { className: "inner-blog-grid" }, posts.slice(0, 3).map(post => react_1.default.createElement(BlogTile, { key: post.title, post: post, onClick: () => navigate('/blog-one') }))))));
}
function CourseTile({ course, onDetails, addToCart, portrait = false, index = 0 }) {
    const src = portrait ? data_1.portraitCourses[index % data_1.portraitCourses.length] : course.image;
    return react_1.default.createElement("article", { className: 'inner-course-tile ' + (portrait ? 'portrait' : '') },
        react_1.default.createElement("button", { className: "inner-course-cover", onClick: () => onDetails(course), "aria-label": 'Details of ' + course.name },
            react_1.default.createElement(Picture, { src: src, alt: course.name }),
            react_1.default.createElement("span", null,
                react_1.default.createElement(Glyph, { type: "up", size: 18 }))),
        react_1.default.createElement("div", { className: "inner-course-info" },
            react_1.default.createElement("div", { className: "inner-course-label" },
                react_1.default.createElement("span", null, course.category),
                react_1.default.createElement("b", null, course.price)),
            react_1.default.createElement("button", { className: "inner-course-name", onClick: () => onDetails(course) }, course.name),
            react_1.default.createElement("div", { className: "inner-course-rating" },
                react_1.default.createElement(Glyph, { type: "star", size: 15 }),
                react_1.default.createElement("strong", null, course.rating),
                " (",
                course.reviews,
                ")"),
            !portrait && react_1.default.createElement("div", { className: "inner-course-stat" },
                react_1.default.createElement("span", null,
                    "\u25EB ",
                    course.lessons,
                    " Lessons"),
                react_1.default.createElement("span", null,
                    "\u2659 ",
                    course.enrolled,
                    " Enrolled")),
            react_1.default.createElement("div", { className: "inner-course-actions" },
                react_1.default.createElement("button", { onClick: () => onDetails(course) },
                    "Course Details ",
                    react_1.default.createElement(Glyph, { type: "up", size: 15 })),
                course.price !== 'Free' && react_1.default.createElement("button", { className: "inner-add", onClick: () => addToCart(course), title: "Add to demo cart" },
                    react_1.default.createElement(Glyph, { type: "plus", size: 18 })))));
}
function CoursePage({ number, navigate, onDetails, addToCart }) {
    const [filter, setFilter] = (0, react_1.useState)('All courses');
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const isTwo = number === 2;
    const filtered = data_1.courses.filter(x => filter === 'All courses' || x.category === filter);
    const shown = filtered.slice((currentPage - 1) * 8, currentPage * 8);
    function changeFilter(value) { setFilter(value); setCurrentPage(1); }
    return react_1.default.createElement("div", { className: "inner-page" },
        react_1.default.createElement(Banner, { eyebrow: "START WITH", title: "Professional online courses", variant: isTwo ? 'course-two' : 'course-one', compact: true }),
        isTwo ? react_1.default.createElement("section", { className: "inner-section inner-pale" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "inner-with-action" },
                    react_1.default.createElement(Title, { eyebrow: "Top Categories", title: "Discover leading categories" }),
                    react_1.default.createElement(LinkBtn, { onClick: () => navigate('#inner-list') }, "Get Started")),
                react_1.default.createElement(CategoriesMini, { navigate: navigate }))) : react_1.default.createElement("section", { className: "inner-section inner-pale" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement(CategoriesMini, { navigate: navigate }))),
        react_1.default.createElement("section", { id: "inner-list", className: "inner-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement(Title, { eyebrow: "Online learning", title: isTwo ? 'Top online courses' : 'Popular courses' }),
                react_1.default.createElement("div", { className: "inner-filter-row" },
                    react_1.default.createElement("div", { className: "inner-filters" }, ['All courses', 'Design', 'Development', 'Management', 'Finance'].map(c => react_1.default.createElement("button", { key: c, className: filter === c ? 'selected' : '', onClick: () => changeFilter(c) }, c))),
                    react_1.default.createElement("span", null,
                        filtered.length,
                        " courses")),
                react_1.default.createElement("div", { className: 'inner-courses-grid ' + (isTwo ? 'inner-courses-portrait' : '') }, shown.map((course, i) => react_1.default.createElement(CourseTile, { key: course.id, course: course, index: i, portrait: isTwo, onDetails: onDetails, addToCart: addToCart }))),
                filtered.length > 8 && react_1.default.createElement("div", { className: "inner-pagination" }, [1, 2].map(v => react_1.default.createElement("button", { className: v === currentPage ? 'selected' : '', key: v, onClick: () => { setCurrentPage(v); document.getElementById('inner-list')?.scrollIntoView({ behavior: 'smooth' }); } }, v))))));
}
function BlogTile({ post, onClick, horizontal = false }) { return react_1.default.createElement("article", { className: 'inner-blog-card ' + (horizontal ? 'horizontal' : '') },
    react_1.default.createElement("button", { className: "inner-blog-photo", onClick: onClick },
        react_1.default.createElement(Picture, { src: post.img, alt: post.title })),
    react_1.default.createElement("div", { className: "inner-blog-card-copy" },
        react_1.default.createElement("span", { className: "inner-blog-tag" }, post.cat),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("button", { onClick: onClick }, post.title)),
        react_1.default.createElement("div", { className: "inner-blog-date" },
            post.date,
            " ",
            react_1.default.createElement("span", null, "\u2197")))); }
function BlogPage({ number }) {
    const isTwo = number === 2;
    const [opened, setOpened] = (0, react_1.useState)(null);
    const [search, setSearch] = (0, react_1.useState)('');
    const visible = posts.filter(x => (x.title + ' ' + x.cat).toLowerCase().includes(search.toLowerCase()));
    return react_1.default.createElement("div", { className: "inner-page" },
        react_1.default.createElement(Banner, { eyebrow: "News and journals", title: "Planning to transition to a new career?", variant: isTwo ? 'blog-two' : 'blog-one', compact: true }),
        react_1.default.createElement("section", { className: "inner-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "inner-blog-toolbar" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "inner-eyebrow" }, "Education Blog"),
                        react_1.default.createElement("h2", null, "Our news and ideas")),
                    react_1.default.createElement("label", { className: "inner-search" },
                        react_1.default.createElement(Glyph, { type: "search" }),
                        react_1.default.createElement("input", { "aria-label": "Search blog articles", placeholder: "Search articles", value: search, onChange: e => setSearch(e.target.value) }))),
                visible.length ? isTwo ? react_1.default.createElement("div", { className: "inner-blog-list" }, visible.map((p, i) => react_1.default.createElement("div", { key: p.title, className: 'inner-blog-list-item ' + (i === 0 ? 'lead' : '') },
                    react_1.default.createElement("button", { className: "inner-blog-list-image", onClick: () => setOpened(p) },
                        react_1.default.createElement(Picture, { src: p.img, alt: p.title })),
                    react_1.default.createElement("div", { className: "inner-blog-list-text" },
                        react_1.default.createElement("span", null,
                            p.dateSmall,
                            " \u00A0 / \u00A0 ",
                            p.author),
                        react_1.default.createElement("h3", null,
                            react_1.default.createElement("button", { onClick: () => setOpened(p) }, p.title)),
                        i === 0 && react_1.default.createElement("p", null, short),
                        react_1.default.createElement("button", { className: "read-link", onClick: () => setOpened(p) },
                            "Read article ",
                            react_1.default.createElement(Glyph, { type: "arrow", size: 17 })))))) : react_1.default.createElement("div", { className: "inner-blog-grid" }, visible.slice(0, 6).map(p => react_1.default.createElement(BlogTile, { key: p.title, post: p, onClick: () => setOpened(p) }))) : react_1.default.createElement("p", null, "No articles match your search."))),
        opened && react_1.default.createElement("div", { className: "overlay", onMouseDown: () => setOpened(null) },
            react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", className: "inner-article-modal", onMouseDown: e => e.stopPropagation() },
                react_1.default.createElement("button", { className: "inner-article-close", "aria-label": "Close article", onClick: () => setOpened(null) }, "\u00D7"),
                react_1.default.createElement(Picture, { src: opened.img, alt: opened.title }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "inner-eyebrow" },
                        opened.cat,
                        " \u00B7 ",
                        opened.date),
                    react_1.default.createElement("h2", null, opened.title),
                    react_1.default.createElement("p", null, paragraphs),
                    react_1.default.createElement("p", null, short),
                    react_1.default.createElement("p", { className: "inner-muted" }, "This is a frontend article preview, without a CMS connection.")))));
}
function ContactDetails() { return react_1.default.createElement("div", { className: "inner-contact-details" }, [['pin', 'Area location', '410 Sandtown, California 94001, USA'], ['phone', 'Contact details', '888-123-4567 · info@example.com'], ['clock', 'Opening hours', 'Monday–Friday, 10:30 a.m. – 7:00 p.m.']].map(([icon, title, detail]) => react_1.default.createElement("div", { key: title },
    react_1.default.createElement("span", null,
        react_1.default.createElement(Glyph, { type: icon, size: 24 })),
    react_1.default.createElement("div", null,
        react_1.default.createElement("strong", null, title),
        react_1.default.createElement("p", null, detail))))); }
function ContactForm() { const [submitted, setSubmitted] = (0, react_1.useState)(false); return react_1.default.createElement("div", { className: "inner-contact-form" },
    react_1.default.createElement("h3", null, "Fill out for contact"),
    react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur libero donec."),
    submitted ? react_1.default.createElement("div", { className: "inner-form-success" },
        react_1.default.createElement(Glyph, { type: "check", size: 31 }),
        react_1.default.createElement("strong", null, "Thank you! Your message has been recorded in this demo."),
        react_1.default.createElement("span", null, "No email was sent \u2014 connect a form service to enable submissions."),
        react_1.default.createElement("button", { onClick: () => setSubmitted(false) }, "Send another message")) : react_1.default.createElement("form", { onSubmit: e => { e.preventDefault(); setSubmitted(true); } },
        react_1.default.createElement("div", { className: "inner-form-row" },
            react_1.default.createElement("label", null,
                react_1.default.createElement("span", null, "Your name *"),
                react_1.default.createElement("input", { required: true, placeholder: "Your name", autoComplete: "name" })),
            react_1.default.createElement("label", null,
                react_1.default.createElement("span", null, "Your email *"),
                react_1.default.createElement("input", { type: "email", required: true, placeholder: "Your email", autoComplete: "email" }))),
        react_1.default.createElement("label", null,
            react_1.default.createElement("span", null, "Subject"),
            react_1.default.createElement("input", { placeholder: "Subject", required: true })),
        react_1.default.createElement("label", null,
            react_1.default.createElement("span", null, "Message *"),
            react_1.default.createElement("textarea", { required: true, rows: "5", placeholder: "Write your message" })),
        react_1.default.createElement("label", { className: "inner-checkbox" },
            react_1.default.createElement("input", { type: "checkbox" }),
            " Save information for the next time comment."),
        react_1.default.createElement("button", { type: "submit", className: "inner-button" },
            "Send message ",
            react_1.default.createElement(Glyph, { type: "up", size: 17 })))); }
function FAQ() { const [expanded, setExpanded] = (0, react_1.useState)(0); return react_1.default.createElement("section", { className: "inner-section inner-faq" },
    react_1.default.createElement("div", { className: "container inner-faq-layout" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", { className: "inner-eyebrow" }, "Contact Us"),
            react_1.default.createElement("h2", null, "Frequently asked questions"),
            react_1.default.createElement(Picture, { src: data_1.assets.contactBackground, alt: "Online learning support" })),
        react_1.default.createElement("div", null, questions.map((q, i) => react_1.default.createElement("div", { className: 'inner-faq-item ' + (expanded === i ? 'active' : ''), key: q },
            react_1.default.createElement("button", { onClick: () => setExpanded(expanded === i ? -1 : i), "aria-expanded": expanded === i },
                q,
                react_1.default.createElement("span", null, expanded === i ? '−' : '+')),
            expanded === i && react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.")))))); }
function ContactPage({ number }) {
    const isTwo = number === 2;
    return react_1.default.createElement("div", { className: "inner-page inner-contact" },
        react_1.default.createElement(Banner, { eyebrow: "Contact us", title: "Contact us", variant: isTwo ? 'contact-two' : 'contact-one', compact: true }),
        react_1.default.createElement("section", { className: "inner-section" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: 'inner-contact-layout ' + (isTwo ? 'contact-layout-two' : '') },
                    react_1.default.createElement("div", { className: "inner-contact-lead" },
                        react_1.default.createElement(Title, { eyebrow: "Contact Us", title: isTwo ? "Get details information about online courses, contact us. we're happy to discuss" : "Are you interested in online learning? Contact us", text: paragraphs }),
                        isTwo ? react_1.default.createElement(ContactDetails, null) : react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "inner-signature" },
                                react_1.default.createElement(Picture, { className: "signature-svg", src: data_1.assets.signature, alt: "Signature of director" }),
                                react_1.default.createElement("span", null,
                                    "Brayden Backham ",
                                    react_1.default.createElement("small", null, "Director"))))),
                    react_1.default.createElement(ContactForm, null)))),
        isTwo ? react_1.default.createElement("section", { className: "inner-section inner-pale" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "inner-huge-contact contact-marquee", "aria-label": "Get in touch with me today" },
                    react_1.default.createElement("span", null, "Get in touch with me today \u00A0 \u2733 \u00A0 Get in touch with me today \u00A0 \u2733 \u00A0")),
                react_1.default.createElement("div", { className: "inner-contact-photo-strip" },
                    react_1.default.createElement(Picture, { src: data_1.assets.aboutTwoPhoto, alt: "Workspace" }),
                    react_1.default.createElement(Picture, { src: data_1.assets.aboutOnePhoto, alt: "Learners" }),
                    react_1.default.createElement(Picture, { src: data_1.assets.aboutEmployee, alt: "Our team" })))) : react_1.default.createElement("section", { className: "inner-section inner-pale" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement(Title, { eyebrow: "Contact details", title: "Find our location" }),
                react_1.default.createElement(ContactDetails, null))),
        react_1.default.createElement(FAQ, null));
}

};
registry["./App.jsx"]=function(module,exports,require){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = __importStar(require("react"));
const data_1 = require("./data.js");
const InnerPages_jsx_1 = require("./InnerPages.jsx");
const ICONS = {
    arrow: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M5 12h14" }),
        react_1.default.createElement("path", { d: "m12 5 7 7-7 7" })),
    arrowUp: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M7 17 17 7M7 7h10v10" })),
    chevron: react_1.default.createElement("path", { d: "m6 9 6 6 6-6" }),
    left: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "m14 18-6-6 6-6" })),
    right: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "m10 18 6-6-6-6" })),
    menu: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" })),
    close: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M5 5 19 19M19 5 5 19" })),
    check: react_1.default.createElement("path", { d: "m5 12 4 4L19 6" }),
    plus: react_1.default.createElement("path", { d: "M12 5v14M5 12h14" }),
    star: react_1.default.createElement("path", { d: "m12 2 3.1 6.6 7.2 1-5.2 5.1 1.25 7.2L12 18.5l-6.35 3.4 1.25-7.2L1.7 9.6l7.2-1z" }),
    book: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21z" }),
        react_1.default.createElement("path", { d: "M4 4v16a2 2 0 0 0 2 2h14" })),
    users: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "9", cy: "8", r: "3" }),
        react_1.default.createElement("path", { d: "M3 20v-2a6 6 0 0 1 12 0v2" }),
        react_1.default.createElement("path", { d: "M17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" })),
    palette: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        react_1.default.createElement("circle", { cx: "7.5", cy: "10", r: "1" }),
        react_1.default.createElement("circle", { cx: "11", cy: "6.5", r: "1" }),
        react_1.default.createElement("circle", { cx: "16", cy: "8", r: "1" }),
        react_1.default.createElement("path", { d: "M18 16c0 2-3 2-4 1-2-2 1-4 0-6" })),
    chart: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M3 3v18h18" }),
        react_1.default.createElement("path", { d: "m6 16 5-5 4 3 6-8" })),
    monitor: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("rect", { x: "3", y: "4", width: "18", height: "14", rx: "2" }),
        react_1.default.createElement("path", { d: "M8 22h8m-4-4v4" })),
    megaphone: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "m3 11 15-7v16L3 13z" }),
        react_1.default.createElement("path", { d: "M7 14 10 21h4l-3-7M19 9l3-1m-3 6 3 1" })),
    code: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "m9 7-5 5 5 5m6-10 5 5-5 5M13 4l-2 16" })),
    pencil: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "m4 20 4-.7L20 7.3 16.7 4 4.7 16z" }),
        react_1.default.createElement("path", { d: "m14.5 6.5 3 3" })),
    globe: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        react_1.default.createElement("path", { d: "M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18" })),
    award: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "9", r: "6" }),
        react_1.default.createElement("path", { d: "m8 14-1 8 5-3 5 3-1-8" })),
    bulb: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M9 18h6m-5 4h4M8 15a7 7 0 1 1 8 0l-1 2H9z" })),
    clock: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        react_1.default.createElement("path", { d: "M12 7v5l3 2" })),
    certificate: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        react_1.default.createElement("path", { d: "M8 8h8M8 12h6m-2 3 3 2.5 3-2.5" })),
    heart: react_1.default.createElement("path", { d: "M20 8c0 5-8 11-8 11S4 13 4 8a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2z" }),
    bag: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M4 8h16l-1 13H5zM9 9V6a3 3 0 0 1 6 0v3" })),
    mail: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
        react_1.default.createElement("path", { d: "m3 7 9 7 9-7" })),
    phone: react_1.default.createElement("path", { d: "M7 3H4a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3l-6-3-3 3a16 16 0 0 1-5-5l3-3z" }),
    user: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "8", r: "4" }),
        react_1.default.createElement("path", { d: "M4 21v-2a8 8 0 0 1 16 0v2" })),
    play: react_1.default.createElement("path", { d: "m8 5 11 7-11 7z" }),
    shield: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M12 2 4 5v7c0 5 4 8 8 10 4-2 8-5 8-10V5z" }),
        react_1.default.createElement("path", { d: "m8 12 3 3 5-6" })),
    quote: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("path", { d: "M11 6C6 6 4 10 4 15v3h7v-7H7m14-5c-5 0-7 4-7 9v3h7v-7h-4" })),
    search: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "10.5", cy: "10.5", r: "6.5" }),
        react_1.default.createElement("path", { d: "m16 16 5 5" })),
    checkCircle: react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        react_1.default.createElement("path", { d: "m8 12 3 3 5-6" })),
};
function Icon({ name, size = 21, strokeWidth = 1.75, className = '' }) {
    return react_1.default.createElement("svg", { className: className, width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, ICONS[name] || ICONS.arrow);
}
function ExternalImage({ src, alt = '', className = '', loading = 'lazy', ...props }) {
    const [failed, setFailed] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setFailed(false), [src]);
    return failed
        ? react_1.default.createElement("div", { className: `image-fallback ${className}`, role: "img", "aria-label": alt },
            react_1.default.createElement(Icon, { name: "book", size: 40 }))
        : react_1.default.createElement("img", { ...props, className: className, loading: loading, src: src, alt: alt, onError: () => setFailed(true) });
}
function Logo({ onClick }) {
    return react_1.default.createElement("a", { href: "/home-one", className: "brand", "aria-label": "Elearna Home One", onClick: e => { e.preventDefault(); onClick('/home-one'); } },
        react_1.default.createElement("span", { className: "brand-symbol" },
            react_1.default.createElement("span", null)),
        react_1.default.createElement("span", null,
            react_1.default.createElement("span", { className: "brand-e" }, "e"),
            "learna"));
}
function Button({ children, onClick, light = false, outline = false, className = '', icon = 'arrowUp', type = 'button' }) {
    return react_1.default.createElement("button", { type: type, className: `btn ${light ? 'btn-light' : ''} ${outline ? 'btn-outline' : ''} ${className}`, onClick: onClick },
        children,
        " ",
        react_1.default.createElement(Icon, { name: icon, size: 16 }));
}
const NAV_LINKS = [
    { title: 'Home', choices: [['Home One', '/home-one'], ['Home Two', '/home-two']] },
    { title: 'Courses', choices: [['Course One', '/course-one'], ['Course Two', '/course-two']] },
    { title: 'Pages', choices: [['About One', '/about-one'], ['About Two', '/about-two']] },
    { title: 'Blog', choices: [['Blog One', '/blog-one'], ['Blog Two', '/blog-two']] },
    { title: 'Contact', choices: [['Contact One', '/contact-one'], ['Contact Two', '/contact-two']] },
];
function Header({ variant, route, navigate, setAuthOpen, cartCount, setCartOpen }) {
    const [mobileOpen, setMobileOpen] = (0, react_1.useState)(false);
    const [expanded, setExpanded] = (0, react_1.useState)(null);
    const [scrolled, setScrolled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        function onScroll() { setScrolled(window.scrollY > 35); }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    function go(path) { setMobileOpen(false); setExpanded(null); navigate(path); }
    const showTop = ['/home-two', '/blog-one', '/blog-two'].includes(route);
    return react_1.default.createElement(react_1.default.Fragment, null,
        showTop && react_1.default.createElement("div", { className: "top-announcement" },
            react_1.default.createElement("div", { className: "container announcement-inner" },
                react_1.default.createElement("span", null,
                    "Are you interested in online coaching? ",
                    react_1.default.createElement("a", { href: "mailto:support@example.com" }, "Contact us.")),
                react_1.default.createElement("span", { className: "announcement-contact" },
                    react_1.default.createElement(Icon, { name: "mail", size: 13 }),
                    " support@example.com ",
                    react_1.default.createElement("span", { className: "bar" }),
                    " ",
                    react_1.default.createElement(Icon, { name: "phone", size: 13 }),
                    " Call: (888) 123 4567"))),
        react_1.default.createElement("header", { className: `site-header ${scrolled ? 'scrolled' : ''} ${showTop ? 'header-two' : ''}` },
            react_1.default.createElement("div", { className: "container nav-wrap" },
                react_1.default.createElement(Logo, { onClick: go }),
                react_1.default.createElement("nav", { className: `main-nav ${mobileOpen ? 'mobile-expanded' : ''}`, "aria-label": "Main navigation" },
                    NAV_LINKS.map(({ title, choices }) => react_1.default.createElement("div", { key: title, className: `nav-home ${expanded === title ? 'open' : ''}`, onMouseEnter: () => setExpanded(title), onMouseLeave: () => setExpanded(v => v === title ? null : v) },
                        react_1.default.createElement("button", { type: "button", className: `nav-item nav-trigger ${choices.some(([, path]) => route === path) ? 'nav-active' : ''}`, "aria-expanded": expanded === title, "aria-haspopup": "true", onClick: () => setExpanded(expanded === title ? null : title) },
                            title,
                            react_1.default.createElement(Icon, { name: "chevron", size: 13 })),
                        react_1.default.createElement("div", { className: "dropdown-menu", role: "group", "aria-label": `${title} pages` }, choices.map(([label, path]) => react_1.default.createElement("a", { key: path, href: path, "aria-current": route === path ? 'page' : undefined, className: route === path ? 'current' : '', onClick: e => { e.preventDefault(); go(path); } },
                            label,
                            react_1.default.createElement(Icon, { name: "arrowUp", size: 14 })))))),
                    react_1.default.createElement("div", { className: "mobile-auth" },
                        react_1.default.createElement("button", { onClick: () => { setAuthOpen('login'); setMobileOpen(false); } }, "Login"),
                        react_1.default.createElement("button", { onClick: () => { setAuthOpen('register'); setMobileOpen(false); } }, "Register"))),
                react_1.default.createElement("div", { className: "nav-actions" },
                    react_1.default.createElement("button", { className: "cart-button", "aria-label": `Cart with ${cartCount} courses`, onClick: () => setCartOpen(true) },
                        react_1.default.createElement(Icon, { name: "bag", size: 19 }),
                        react_1.default.createElement("span", null, cartCount)),
                    react_1.default.createElement("button", { className: "nav-login", onClick: () => setAuthOpen('login') }, "Login"),
                    react_1.default.createElement("button", { className: "register-btn", onClick: () => setAuthOpen('register') },
                        "Register ",
                        react_1.default.createElement(Icon, { name: "arrowUp", size: 14 }))),
                react_1.default.createElement("button", { className: "mobile-toggle", onClick: () => setMobileOpen(v => !v), "aria-expanded": mobileOpen, "aria-label": mobileOpen ? 'Close menu' : 'Open menu' },
                    react_1.default.createElement(Icon, { name: mobileOpen ? 'close' : 'menu', size: 27 })))));
}
function SectionHeading({ eyebrow, title, text, center = false, right, invert = false }) {
    return react_1.default.createElement("div", { className: `section-heading ${center ? 'text-center' : ''} ${invert ? 'inverse' : ''}` },
        react_1.default.createElement("div", { className: "section-title" },
            react_1.default.createElement("span", { className: "eyebrow" }, eyebrow),
            react_1.default.createElement("h2", null, title),
            text && react_1.default.createElement("p", null, text)),
        right && react_1.default.createElement("div", { className: "heading-right" }, right));
}
function CategoryGrid({ onCategory, variant = 'one' }) {
    return react_1.default.createElement("div", { className: `category-grid ${variant === 'two' ? 'category-grid-two' : ''}` }, data_1.categories.map(item => react_1.default.createElement("button", { key: item.name, className: "category-card", onClick: () => onCategory(item.name) },
        react_1.default.createElement("span", { className: "category-icon" },
            react_1.default.createElement(Icon, { name: item.icon, size: 29, strokeWidth: 1.4 })),
        react_1.default.createElement("strong", null, item.name),
        react_1.default.createElement("span", { className: "small-muted" }, item.count),
        react_1.default.createElement("span", { className: "cat-hover-arrow" },
            react_1.default.createElement(Icon, { name: "arrowUp", size: 15 })))));
}
function Logos() {
    return react_1.default.createElement("div", { className: "logos-section" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("p", null, "Learn from 350+ leading universities and companies with us"),
            react_1.default.createElement("div", { className: "partner-logos" }, data_1.assets.companyLogos.map((url, index) => react_1.default.createElement(ExternalImage, { key: url, alt: `University and company partner ${index + 1}`, src: url })))));
}
function CourseCard({ course, onDetails, addToCart, variant = 'one', index = 0 }) {
    const image = variant === 'two' ? data_1.portraitCourses[index % data_1.portraitCourses.length] : course.image;
    return react_1.default.createElement("article", { className: `course-card ${variant === 'two' ? 'course-card-portrait' : ''}` },
        react_1.default.createElement("button", { className: "course-image", "aria-label": `View ${course.name}`, onClick: () => onDetails(course) },
            react_1.default.createElement(ExternalImage, { alt: course.name, src: image }),
            react_1.default.createElement("span", { className: "course-image-arrow" },
                react_1.default.createElement(Icon, { name: "arrowUp", size: 18 }))),
        react_1.default.createElement("div", { className: "course-body" },
            react_1.default.createElement("div", { className: "course-meta-top" },
                react_1.default.createElement("span", { className: "course-tag" }, course.category),
                react_1.default.createElement("span", { className: "course-price" }, course.price)),
            react_1.default.createElement("h3", null,
                react_1.default.createElement("button", { onClick: () => onDetails(course) }, course.name)),
            react_1.default.createElement("div", { className: "rating" },
                react_1.default.createElement("span", { className: "rating-star" },
                    react_1.default.createElement(Icon, { name: "star", size: 14 })),
                react_1.default.createElement("b", null, course.rating),
                react_1.default.createElement("span", null,
                    "(",
                    course.reviews,
                    ")")),
            variant === 'one' && react_1.default.createElement("div", { className: "course-facts" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(Icon, { name: "book", size: 17 }),
                    course.lessons,
                    " Lessons"),
                react_1.default.createElement("span", null,
                    react_1.default.createElement(Icon, { name: "users", size: 17 }),
                    course.enrolled,
                    " Enrolled")),
            react_1.default.createElement("div", { className: "course-footer" },
                react_1.default.createElement("button", { className: "details-link", onClick: () => onDetails(course) },
                    "Course Details ",
                    react_1.default.createElement(Icon, { name: "arrowUp", size: 14 })),
                course.price !== 'Free' && react_1.default.createElement("button", { className: "round-plus", onClick: () => addToCart(course), title: "Add to demo cart", "aria-label": `Add ${course.name} to cart` },
                    react_1.default.createElement(Icon, { name: "plus", size: 18 })))));
}
function CoursesSection({ variant = 'one', initialFilter, onDetails, addToCart }) {
    const [filter, setFilter] = (0, react_1.useState)('All courses');
    (0, react_1.useEffect)(() => { if (initialFilter)
        setFilter(initialFilter); }, [initialFilter]);
    const tabs = ['All courses', 'Design', 'Development', 'Management', 'Finance'];
    const defaultCourses = variant === 'two' ? [data_1.courses[8], data_1.courses[3], data_1.courses[2], data_1.courses[4], data_1.courses[6], data_1.courses[5]] : data_1.courses;
    const visible = defaultCourses.filter(c => filter === 'All courses' || c.category === filter).slice(0, 8);
    return react_1.default.createElement("section", { className: `courses-section section-pad ${variant === 'two' ? 'courses-two' : ''}`, id: "courses" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Online learning", title: "Top online courses", right: variant === 'one' ? react_1.default.createElement("div", { className: "course-tabs", role: "tablist", "aria-label": "Course categories" }, tabs.map(tab => react_1.default.createElement("button", { key: tab, role: "tab", "aria-selected": filter === tab, className: filter === tab ? 'active' : '', onClick: () => setFilter(tab) }, tab))) : null }),
            react_1.default.createElement("div", { className: `courses-grid ${variant === 'two' ? 'courses-grid-portrait' : ''}` }, visible.map((item, i) => react_1.default.createElement(CourseCard, { key: item.id, course: item, onDetails: onDetails, addToCart: addToCart, variant: variant, index: i }))),
            react_1.default.createElement("div", { className: "course-browse" },
                "We assist you in finding the ideal tutor at no cost. ",
                react_1.default.createElement("a", { href: "#courses", onClick: e => { e.preventDefault(); setFilter('All courses'); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); } },
                    "Browse all available courses ",
                    react_1.default.createElement(Icon, { name: "arrow", size: 16 })))));
}
function StudentHero({ navigate }) {
    return react_1.default.createElement("section", { className: "hero hero-one" },
        react_1.default.createElement("div", { className: "hero-decoration hero-circle" }),
        react_1.default.createElement("span", { className: "hero-ring" }),
        react_1.default.createElement("span", { className: "hero-dot hero-dot-1" }),
        react_1.default.createElement("span", { className: "hero-dot hero-dot-2" }),
        react_1.default.createElement("div", { className: "container hero-one-grid" },
            react_1.default.createElement("div", { className: "hero-visual" },
                react_1.default.createElement("div", { className: "hero-yellow-brush" }),
                react_1.default.createElement(ExternalImage, { className: "hero-student", loading: "eager", src: data_1.assets.heroStudent, alt: "Smiling student with glasses holding learning books" }),
                react_1.default.createElement(ExternalImage, { className: "hero-achievement", loading: "eager", src: data_1.assets.achievement, alt: "Achievement awards" }),
                react_1.default.createElement(ExternalImage, { className: "hero-trusted", loading: "eager", src: data_1.assets.trusted, alt: "Successful students rating" }),
                react_1.default.createElement("span", { className: "visual-ring" })),
            react_1.default.createElement("div", { className: "hero-copy" },
                react_1.default.createElement("span", { className: "eyebrow hero-eyebrow" }, "Online learning"),
                react_1.default.createElement("h1", null,
                    "More then ",
                    react_1.default.createElement("em", null, "25000+"),
                    " education courses online"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare."),
                react_1.default.createElement(Button, { outline: true, className: "hero-cta", onClick: () => navigate('#courses') }, "Get Started"))));
}
function CategoriesOne({ onCategory, navigate }) {
    return react_1.default.createElement("section", { className: "categories-section section-pad" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Top Categories", title: "Discover leading categories to elevate your journey", center: true }),
            react_1.default.createElement(CategoryGrid, { onCategory: onCategory }),
            react_1.default.createElement("div", { className: "quick-banner" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", null, "QUICK ACCESS TO THE POPULAR COURSES"),
                    react_1.default.createElement("h3", null,
                        "Discover a new way",
                        react_1.default.createElement("br", null),
                        "of learning today."),
                    react_1.default.createElement(Button, { onClick: () => navigate('#courses') }, "View Courses")),
                react_1.default.createElement("div", { className: "quick-photo" },
                    react_1.default.createElement(ExternalImage, { src: data_1.assets.womanLaptop, alt: "Student working with a laptop" })),
                react_1.default.createElement("div", { className: "quick-side" },
                    react_1.default.createElement("span", null, "YOUR FUTURE STARTS HERE"),
                    react_1.default.createElement("h3", null, "Develop your skills online!"),
                    react_1.default.createElement("button", { onClick: () => navigate('/home-two') },
                        "Apply now ",
                        react_1.default.createElement(Icon, { name: "arrowUp", size: 16 }))))));
}
function AboutOne({ navigate }) {
    const points = ['Skill-based instruction', 'Analytics and insights', 'Global certification', 'Customizable courses'];
    return react_1.default.createElement("section", { className: "about-section section-pad", id: "about" },
        react_1.default.createElement("div", { className: "container about-grid" },
            react_1.default.createElement("div", { className: "about-photos" },
                react_1.default.createElement("div", { className: "about-shape" }),
                react_1.default.createElement(ExternalImage, { className: "about-man", src: data_1.assets.manGraph, alt: "Learner presenting a graph" }),
                react_1.default.createElement(ExternalImage, { className: "about-woman", src: data_1.assets.womanTablet, alt: "Student using a tablet" }),
                react_1.default.createElement("div", { className: "about-stat" },
                    react_1.default.createElement("strong", null, "25k+"),
                    react_1.default.createElement("span", null, "Online students"))),
            react_1.default.createElement("div", { className: "about-copy" },
                react_1.default.createElement("span", { className: "eyebrow" }, "what we Offer"),
                react_1.default.createElement("h2", null, "Personalized learning for your ambitions"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."),
                react_1.default.createElement("div", { className: "check-grid" }, points.map(p => react_1.default.createElement("div", { key: p },
                    react_1.default.createElement("span", { className: "checkmark" },
                        react_1.default.createElement(Icon, { name: "check", size: 14 })),
                    p))),
                react_1.default.createElement("div", { className: "question-box" },
                    react_1.default.createElement("span", { className: "question-icon" },
                        react_1.default.createElement(Icon, { name: "phone", size: 22 })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null, "Still have questions?"),
                        react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam."))),
                react_1.default.createElement(Button, { onClick: () => navigate('/home-two') }, "Get Started"))));
}
const testimonials = [
    { quote: 'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.', name: 'Linda Grady', job: 'Co-assistant manager', image: data_1.assets.testimonial1 },
    { quote: 'Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.', name: 'Jim Adams', job: 'Designer', image: data_1.assets.testimonial2 },
];
function Testimonials({ variant = 'one' }) {
    const [index, setIndex] = (0, react_1.useState)(0);
    const t = testimonials[index];
    return react_1.default.createElement("section", { className: `testimonials-section section-pad ${variant === 'two' ? 'testimonials-two' : ''}`, id: "testimonials" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Our testimonials", title: "Trusted by our successful students", center: variant === 'one' }),
            react_1.default.createElement("div", { className: "testimonials-layout" },
                react_1.default.createElement("div", { className: "testimonial-stats" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null,
                            "15M",
                            react_1.default.createElement("span", null, "+")),
                        react_1.default.createElement("span", null, "Successful students")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null,
                            "125",
                            react_1.default.createElement("span", null, "K")),
                        react_1.default.createElement("span", null, "Global job placements"))),
                react_1.default.createElement("div", { className: "testimonial-card" },
                    react_1.default.createElement("span", { className: "quote-mark" },
                        react_1.default.createElement(Icon, { name: "quote", size: 38 })),
                    react_1.default.createElement("div", { className: "testimonial-stars" }, "\u2605\u2605\u2605\u2605\u2605"),
                    react_1.default.createElement("blockquote", null,
                        "\u201C",
                        t.quote,
                        "\u201D"),
                    react_1.default.createElement("div", { className: "testimonial-bottom" },
                        react_1.default.createElement("div", { className: "person" },
                            react_1.default.createElement(ExternalImage, { src: t.image, alt: t.name }),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("strong", null, t.name),
                                react_1.default.createElement("span", null, t.job))),
                        react_1.default.createElement("div", { className: "slider-controls" },
                            react_1.default.createElement("button", { onClick: () => setIndex((index + testimonials.length - 1) % testimonials.length), "aria-label": "Previous testimonial" },
                                react_1.default.createElement(Icon, { name: "left", size: 19 })),
                            react_1.default.createElement("button", { onClick: () => setIndex((index + 1) % testimonials.length), "aria-label": "Next testimonial" },
                                react_1.default.createElement(Icon, { name: "right", size: 19 }))))))));
}
function Trending({ onDetails, addToCart }) {
    const featured = [data_1.courses[8], data_1.courses[3], data_1.courses[4], data_1.courses[5]];
    return react_1.default.createElement("section", { className: "trending-section section-pad" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Trending courses", title: "Explore our top programs" }),
            react_1.default.createElement("div", { className: "trending-grid" }, featured.map(c => react_1.default.createElement("article", { key: c.id, className: "trending-item" },
                react_1.default.createElement("div", { className: "trending-img" },
                    react_1.default.createElement(ExternalImage, { src: c.image, alt: c.name })),
                react_1.default.createElement("div", { className: "trending-content" },
                    react_1.default.createElement("span", { className: "course-tag" }, c.category),
                    react_1.default.createElement("button", { className: "trending-name", onClick: () => onDetails(c) }, c.name),
                    react_1.default.createElement("div", { className: "rating" },
                        react_1.default.createElement("span", { className: "rating-star" },
                            react_1.default.createElement(Icon, { name: "star", size: 14 })),
                        react_1.default.createElement("b", null, c.rating),
                        react_1.default.createElement("span", null,
                            "(",
                            c.reviews,
                            ")")),
                    react_1.default.createElement("div", { className: "trending-bottom" },
                        react_1.default.createElement("strong", null, c.price),
                        react_1.default.createElement("button", { onClick: () => c.price === 'Free' ? onDetails(c) : addToCart(c) },
                            react_1.default.createElement(Icon, { name: "arrowUp", size: 19 })))))))));
}
function WhyChoose() {
    const benefits = [['globe', 'Learn anything'], ['chart', 'Save money'], ['clock', 'Flexible courses'], ['certificate', 'Unlimited certificate']];
    return react_1.default.createElement("section", { className: "why-section section-pad", id: "benefits" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Why we are", title: "Elevate your professional journey", center: true, text: "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut." }),
            react_1.default.createElement("div", { className: "benefits-grid" }, benefits.map(([icon, label]) => react_1.default.createElement("div", { className: "benefit-card", key: label },
                react_1.default.createElement("div", { className: "benefit-icon" },
                    react_1.default.createElement(Icon, { name: icon, size: 32 })),
                react_1.default.createElement("h3", null, label),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet conse non quis id viverra id proin."))))));
}
function CoachHero() {
    return react_1.default.createElement("section", { className: "hero hero-two" },
        react_1.default.createElement("div", { className: "hero-coach-glow" }),
        react_1.default.createElement("div", { className: "container coach-hero-inner" },
            react_1.default.createElement("div", { className: "coach-big-word" },
                react_1.default.createElement("span", null, "PERSONAL"),
                react_1.default.createElement("strong", null, "COACH")),
            react_1.default.createElement(ExternalImage, { className: "coach-person", src: data_1.assets.heroCoach, alt: "Personal learning coach", loading: "eager" }),
            react_1.default.createElement("div", { className: "coach-hero-copy" },
                react_1.default.createElement("span", { className: "eyebrow" }, "Online learning"),
                react_1.default.createElement("h1", null,
                    "Transform ",
                    react_1.default.createElement("em", null, "learning"),
                    " with flexible online education"),
                react_1.default.createElement("p", null, "Learn something new every day with expert-led courses built around your goals."),
                react_1.default.createElement("a", { href: "#categories", className: "coach-arrow-button", "aria-label": "Explore categories" },
                    react_1.default.createElement(Icon, { name: "arrow", size: 19 })))));
}
function CoachFeatureStrip() {
    const items = [['book', '150+ online courses'], ['user', 'Personalized learning'], ['award', 'Lifetime update']];
    return react_1.default.createElement("section", { className: "coach-feature-wrapper" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "coach-feature-strip" }, items.map(([icon, title]) => react_1.default.createElement("div", { className: "coach-feature", key: title },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(Icon, { name: icon, size: 27 })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("strong", null, title),
                    react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet")))))));
}
function CategoriesTwo({ onCategory }) {
    return react_1.default.createElement("section", { className: "section-pad categories-two", id: "categories" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "categories-two-layout" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "eyebrow" }, "Top Categories"),
                    react_1.default.createElement("h2", null, "Discover leading categories"),
                    react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec."),
                    react_1.default.createElement("a", { className: "btn", href: "#courses" },
                        "Get Started ",
                        react_1.default.createElement(Icon, { name: "arrowUp", size: 15 }))),
                react_1.default.createElement(CategoryGrid, { variant: "two", onCategory: onCategory }))));
}
function Potential() {
    const points = [['01', 'Flexibility and convenience'], ['02', 'Course accessibility'], ['03', 'Cost-effectiveness'], ['04', 'Personalized learning']];
    return react_1.default.createElement("section", { className: "potential-section section-pad", id: "about" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Unlocking Potential", title: "Discover the boundless advantages and transformative power of eLearning for professional growth" }),
            react_1.default.createElement("div", { className: "potential-layout" },
                react_1.default.createElement("div", { className: "potential-images" },
                    react_1.default.createElement(ExternalImage, { className: "potential-img p1", src: data_1.assets.potential1, alt: "Learning online" }),
                    react_1.default.createElement(ExternalImage, { className: "potential-img p2", src: data_1.assets.potential2, alt: "Studying with laptop" }),
                    react_1.default.createElement(ExternalImage, { className: "potential-img p3", src: data_1.assets.potential3, alt: "Student portrait" }),
                    react_1.default.createElement("div", { className: "potential-sticker" },
                        "Your success",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("b", null, "starts here!"),
                        " ",
                        react_1.default.createElement(Icon, { name: "arrowUp", size: 24 }))),
                react_1.default.createElement("div", { className: "potential-list" }, points.map(([num, title]) => react_1.default.createElement("div", { className: "potential-row", key: num },
                    react_1.default.createElement("span", null, num),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", null, title),
                        react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.")),
                    react_1.default.createElement(Icon, { name: "arrowUp", size: 21 })))))));
}
function WorldClass({ navigate }) {
    return react_1.default.createElement("section", { className: "world-section section-pad" },
        react_1.default.createElement("div", { className: "container world-grid" },
            react_1.default.createElement("div", { className: "world-photo" },
                react_1.default.createElement(ExternalImage, { src: data_1.assets.womanSecond, alt: "Woman learning online" }),
                react_1.default.createElement("div", { className: "world-badge" },
                    "100%",
                    react_1.default.createElement("small", null, "Flexible classes"))),
            react_1.default.createElement("div", { className: "world-copy" },
                react_1.default.createElement("span", { className: "eyebrow" }, "Why we are"),
                react_1.default.createElement("h2", null, "World-class learning from anywhere"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."),
                react_1.default.createElement("div", { className: "world-stats" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null,
                            "12K",
                            react_1.default.createElement("span", null, "+")),
                        react_1.default.createElement("small", null, "Finish seasons")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null, "157K"),
                        react_1.default.createElement("small", null, "Enrolled")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null, "95%"),
                        react_1.default.createElement("small", null, "Job placement"))),
                react_1.default.createElement("div", { className: "question-box" },
                    react_1.default.createElement("span", { className: "question-icon" },
                        react_1.default.createElement(Icon, { name: "phone", size: 21 })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null, "Still have questions?"),
                        react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam."))),
                react_1.default.createElement(Button, { onClick: () => navigate('#courses') }, "Get Started"))));
}
function LearnMoreBanner({ navigate }) {
    return react_1.default.createElement("section", { className: "learn-more-banner" },
        react_1.default.createElement("div", { className: "container learn-more-inner" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "eyebrow" }, "what we Offer"),
                react_1.default.createElement("h2", null, "Personalized learning for your ambitions"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."),
                react_1.default.createElement(Button, { light: true, onClick: () => navigate('#courses') }, "Get Course")),
            react_1.default.createElement("div", { className: "learn-illustration" },
                react_1.default.createElement(ExternalImage, { src: data_1.assets.manGraph, alt: "Online learning instructor" }))));
}
const blogs = [
    { cat: 'Career', title: 'Improve knowledge retention with visual learning', date: 'October 4, 2024', photo: data_1.assets.blog1 },
    { cat: 'Development', title: 'Master online learning with proven strategies', date: 'October 4, 2024', photo: data_1.assets.blog2 },
    { cat: 'Teaching', title: 'How to enhance your learning experience today', date: 'October 3, 2024', photo: data_1.assets.blog3 }
];
function Blogs() {
    return react_1.default.createElement("section", { className: "blogs-section section-pad", id: "blog" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(SectionHeading, { eyebrow: "Education Blog", title: "Our news and ideas", text: "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis." }),
            react_1.default.createElement("div", { className: "blog-grid" }, blogs.map(blog => react_1.default.createElement("article", { className: "blog-card", key: blog.title },
                react_1.default.createElement(ExternalImage, { alt: blog.title, src: blog.photo }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "blog-category" }, blog.cat),
                    react_1.default.createElement("h3", null, blog.title),
                    react_1.default.createElement("span", { className: "blog-date" }, blog.date)))))));
}
function EndCTA({ navigate }) {
    return react_1.default.createElement("section", { className: "end-cta" },
        react_1.default.createElement("div", { className: "container end-cta-inner" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "Are you ready to start your journey?"),
                react_1.default.createElement("p", null, "Take the next step toward a brighter future with the right skills.")),
            react_1.default.createElement("div", { className: "end-buttons" },
                react_1.default.createElement(Button, { light: true, onClick: () => navigate('#courses') }, "Browse courses"),
                react_1.default.createElement(Button, { outline: true, onClick: () => navigate('/home-two') }, "Became a teacher"))));
}
function Footer({ navigate }) {
    function link(e, path) { e.preventDefault(); navigate(path); }
    return react_1.default.createElement("footer", { className: "footer" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "footer-main" },
                react_1.default.createElement("div", { className: "footer-left" },
                    react_1.default.createElement(Logo, { onClick: navigate }),
                    react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."),
                    react_1.default.createElement("div", { className: "footer-social" },
                        react_1.default.createElement("a", { href: "https://facebook.com", target: "_blank", rel: "noreferrer", "aria-label": "Facebook" }, "f"),
                        react_1.default.createElement("a", { href: "https://linkedin.com", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn" }, "in"),
                        react_1.default.createElement("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", "aria-label": "Instagram" }, "\u25CE"))),
                react_1.default.createElement("div", { className: "footer-col" },
                    react_1.default.createElement("h4", null, "Quick links"),
                    react_1.default.createElement("a", { href: "/home-one", onClick: e => link(e, '/home-one') }, "Home One"),
                    react_1.default.createElement("a", { href: "/home-two", onClick: e => link(e, '/home-two') }, "Home Two"),
                    react_1.default.createElement("a", { href: "/course-one", onClick: e => link(e, '/course-one') }, "Course One"),
                    react_1.default.createElement("a", { href: "/course-two", onClick: e => link(e, '/course-two') }, "Course Two")),
                react_1.default.createElement("div", { className: "footer-col" },
                    react_1.default.createElement("h4", null, "Popular pages"),
                    react_1.default.createElement("a", { href: "/about-one", onClick: e => link(e, '/about-one') }, "About One"),
                    react_1.default.createElement("a", { href: "/about-two", onClick: e => link(e, '/about-two') }, "About Two"),
                    react_1.default.createElement("a", { href: "/blog-one", onClick: e => link(e, '/blog-one') }, "Blog One"),
                    react_1.default.createElement("a", { href: "/blog-two", onClick: e => link(e, '/blog-two') }, "Blog Two")),
                react_1.default.createElement("div", { className: "footer-col" },
                    react_1.default.createElement("h4", null, "Support"),
                    react_1.default.createElement("a", { href: "/contact-one", onClick: e => link(e, '/contact-one') }, "Contact One"),
                    react_1.default.createElement("a", { href: "/contact-two", onClick: e => link(e, '/contact-two') }, "Contact Two"),
                    react_1.default.createElement("a", { href: "mailto:info@example.com" }, "info@example.com"),
                    react_1.default.createElement("a", { href: "tel:+18881234567" }, "(888) 123 4567"))),
            react_1.default.createElement("div", { className: "footer-bottom" },
                react_1.default.createElement("span", null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " Elearna React Demo. Independently recreated from the public Elearna design."),
                react_1.default.createElement("span", null, "Home / Courses / Pages / Blog / Contact \u2014 Two versions each"))));
}
function AuthModal({ kind, onClose }) {
    const [sent, setSent] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => { setSent(false); }, [kind]);
    if (!kind)
        return null;
    return react_1.default.createElement("div", { className: "overlay", onMouseDown: onClose },
        react_1.default.createElement("div", { className: "modal auth-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "auth-title", onMouseDown: e => e.stopPropagation() },
            react_1.default.createElement("button", { className: "modal-close", onClick: onClose, "aria-label": "Close" },
                react_1.default.createElement(Icon, { name: "close" })),
            react_1.default.createElement("span", { className: "eyebrow" }, "Welcome to Elearna"),
            react_1.default.createElement("h2", { id: "auth-title" }, kind === 'login' ? 'Login to your account' : 'Create an account'),
            sent ? react_1.default.createElement("div", { className: "demo-feedback" },
                react_1.default.createElement(Icon, { name: "checkCircle", size: 36 }),
                react_1.default.createElement("strong", null, "Form preview submitted"),
                react_1.default.createElement("p", null, "This is a frontend-only demo. No account was created or logged in."),
                react_1.default.createElement(Button, { onClick: onClose }, "Close")) : react_1.default.createElement("form", { onSubmit: e => { e.preventDefault(); setSent(true); } },
                kind === 'register' && react_1.default.createElement("label", null,
                    "Full name",
                    react_1.default.createElement("input", { required: true, autoComplete: "name", placeholder: "Your full name" })),
                react_1.default.createElement("label", null,
                    "Email address",
                    react_1.default.createElement("input", { type: "email", autoComplete: "email", required: true, placeholder: "you@example.com" })),
                react_1.default.createElement("label", null,
                    "Password",
                    react_1.default.createElement("input", { type: "password", required: true, minLength: 6, autoComplete: kind === 'login' ? 'current-password' : 'new-password', placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })),
                react_1.default.createElement("button", { className: "btn auth-submit", type: "submit" },
                    kind === 'login' ? 'Login' : 'Register',
                    " ",
                    react_1.default.createElement(Icon, { name: "arrowUp", size: 16 })),
                react_1.default.createElement("p", { className: "tiny-notice" }, "Demo interface only \u2014 no backend or real authentication connected."))));
}
function CourseModal({ course, onClose, onAdd }) {
    if (!course)
        return null;
    return react_1.default.createElement("div", { className: "overlay", onMouseDown: onClose },
        react_1.default.createElement("div", { className: "modal course-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "course-title", onMouseDown: e => e.stopPropagation() },
            react_1.default.createElement("button", { className: "modal-close", onClick: onClose, "aria-label": "Close" },
                react_1.default.createElement(Icon, { name: "close" })),
            react_1.default.createElement(ExternalImage, { className: "modal-course-photo", src: course.image, alt: course.name }),
            react_1.default.createElement("div", { className: "modal-course-copy" },
                react_1.default.createElement("span", { className: "eyebrow" },
                    course.category,
                    " \u00B7 Online learning"),
                react_1.default.createElement("h2", { id: "course-title" }, course.name),
                react_1.default.createElement("div", { className: "rating" },
                    react_1.default.createElement("span", { className: "rating-star" }, "\u2605"),
                    " ",
                    course.rating,
                    " (",
                    course.reviews,
                    " reviews)"),
                react_1.default.createElement("p", null, "Explore this practical course designed to develop confidence, build skills, and help you learn at your own pace."),
                react_1.default.createElement("div", { className: "course-facts" },
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(Icon, { name: "book" }),
                        course.lessons,
                        " Lessons"),
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(Icon, { name: "users" }),
                        course.enrolled,
                        " Enrolled")),
                react_1.default.createElement("div", { className: "modal-cta" },
                    react_1.default.createElement("strong", null, course.price),
                    react_1.default.createElement(Button, { onClick: () => { onAdd(course); onClose(); } }, course.price === 'Free' ? 'Save course' : 'Add to cart')),
                react_1.default.createElement("p", { className: "tiny-notice" }, "Preview details only. Course enrollment is not connected to a backend."))));
}
function CartDrawer({ open, onClose, items, setItems }) {
    const sum = items.reduce((n, i) => n + (Number(i.price.replace('$', '')) || 0), 0);
    return open ? react_1.default.createElement("div", { className: "overlay cart-overlay", onMouseDown: onClose },
        react_1.default.createElement("aside", { className: "cart-drawer", onMouseDown: e => e.stopPropagation(), role: "dialog", "aria-modal": "true", "aria-label": "Course cart" },
            react_1.default.createElement("div", { className: "cart-header" },
                react_1.default.createElement("h2", null,
                    "Your Cart ",
                    react_1.default.createElement("span", null,
                        "(",
                        items.length,
                        ")")),
                react_1.default.createElement("button", { onClick: onClose, "aria-label": "Close cart" },
                    react_1.default.createElement(Icon, { name: "close" }))),
            items.length ? react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "cart-items" }, items.map(i => react_1.default.createElement("div", { key: i.id, className: "cart-line" },
                    react_1.default.createElement(ExternalImage, { src: i.image, alt: i.name }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", null, i.name),
                        react_1.default.createElement("small", null, i.price),
                        react_1.default.createElement("button", { onClick: () => setItems(v => v.filter(x => x.id !== i.id)) }, "Remove"))))),
                react_1.default.createElement("div", { className: "cart-total" },
                    "Subtotal ",
                    react_1.default.createElement("strong", null,
                        "$",
                        sum)),
                react_1.default.createElement("p", { className: "tiny-notice" }, "This is a demo cart without payment processing."),
                react_1.default.createElement("button", { className: "btn cart-close-action", onClick: onClose },
                    "Continue learning ",
                    react_1.default.createElement(Icon, { name: "arrow", size: 16 }))) : react_1.default.createElement("div", { className: "cart-empty" },
                react_1.default.createElement(Icon, { name: "bag", size: 58 }),
                react_1.default.createElement("h3", null, "Your cart is empty"),
                react_1.default.createElement("p", null, "Explore courses and add your favorites here."),
                react_1.default.createElement(Button, { onClick: onClose }, "Browse courses")))) : null;
}
function HomeOne({ navigate, onDetails, addToCart, setCategory, selectedFilter }) {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StudentHero, { navigate: navigate }),
        react_1.default.createElement(Logos, null),
        react_1.default.createElement(CategoriesOne, { onCategory: setCategory, navigate: navigate }),
        react_1.default.createElement(CoursesSection, { variant: "one", onDetails: onDetails, addToCart: addToCart, initialFilter: selectedFilter }),
        react_1.default.createElement(AboutOne, { navigate: navigate }),
        react_1.default.createElement(Testimonials, null),
        react_1.default.createElement(Trending, { onDetails: onDetails, addToCart: addToCart }),
        react_1.default.createElement(WhyChoose, null));
}
function HomeTwo({ navigate, onDetails, addToCart, setCategory, selectedFilter }) {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CoachHero, null),
        react_1.default.createElement(CoachFeatureStrip, null),
        react_1.default.createElement(CategoriesTwo, { onCategory: setCategory }),
        react_1.default.createElement(Potential, null),
        react_1.default.createElement(CoursesSection, { variant: "two", onDetails: onDetails, addToCart: addToCart, initialFilter: selectedFilter }),
        react_1.default.createElement(WorldClass, { navigate: navigate }),
        react_1.default.createElement(LearnMoreBanner, { navigate: navigate }),
        react_1.default.createElement(Logos, null),
        react_1.default.createElement(Testimonials, { variant: "two" }),
        react_1.default.createElement(Blogs, null));
}
function App() {
    const validRoutes = NAV_LINKS.flatMap(x => x.choices.map(item => item[1]));
    function currentPage() {
        if (window.location.protocol === 'file:') {
            const hashRoute = decodeURIComponent(window.location.hash.slice(1).split('#')[0]);
            return validRoutes.includes('/' + hashRoute.replace(/^\//, '')) ? '/' + hashRoute.replace(/^\//, '') : '/home-one';
        }
        const route = window.location.pathname.replace(/\/$/, '') || '/home-one';
        return validRoutes.includes(route) ? route : '/home-one';
    }
    const [page, setPage] = (0, react_1.useState)(currentPage);
    const [authOpen, setAuthOpen] = (0, react_1.useState)(null);
    const [cartOpen, setCartOpen] = (0, react_1.useState)(false);
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    const [selectedFilter, setSelectedFilter] = (0, react_1.useState)('All courses');
    const [selectedCourse, setSelectedCourse] = (0, react_1.useState)(null);
    const [notice, setNotice] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => { function pop() { setPage(currentPage()); window.scrollTo({ top: 0, behavior: 'instant' }); } window.addEventListener('popstate', pop); window.addEventListener('hashchange', pop); return () => { window.removeEventListener('popstate', pop); window.removeEventListener('hashchange', pop); }; }, []);
    (0, react_1.useEffect)(() => { const label = NAV_LINKS.flatMap(x => x.choices).find(([, url]) => url === page)?.[0] || 'Home One'; document.title = `Elearna — ${label}`; }, [page]);
    // Scroll-enter motion, kept optional for reduced-motion devices and older browsers.
    (0, react_1.useEffect)(() => {
        if (typeof window.IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        const selector = '.inner-banner-content, .inner-section .inner-title, .inner-section .about-intro-layout, .inner-section .inner-two-col, .inner-contact-details, .inner-contact-form, .section-heading, .about-grid, .benefits-grid, .testimonial-card, .potential-grid, .inner-philosophy, .inner-values';
        const nodes = Array.from(document.querySelectorAll(selector));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            } });
        }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
        nodes.forEach(n => { n.classList.add('motion-target'); observer.observe(n); });
        return () => { observer.disconnect(); nodes.forEach(n => n.classList.remove('motion-target', 'is-revealed')); };
    }, [page]);
    (0, react_1.useEffect)(() => { if (!notice)
        return; const t = window.setTimeout(() => setNotice(''), 3200); return () => clearTimeout(t); }, [notice]);
    function navigate(dest) {
        if (dest.startsWith('#')) {
            const target = document.getElementById(dest.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            dest = '/course-one#inner-list';
        }
        const [path, hash] = dest.split('#');
        const next = validRoutes.includes(path) ? path : '/home-one';
        if (window.location.protocol === 'file:') {
            window.location.hash = next.slice(1);
        }
        else if (window.location.pathname + window.location.hash !== dest)
            window.history.pushState({}, '', dest);
        setPage(next);
        window.setTimeout(() => { if (hash)
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        else
            window.scrollTo({ top: 0, behavior: 'instant' }); }, 65);
    }
    function addToCart(course) { if (cartItems.some(item => item.id === course.id)) {
        setNotice('This course is already in your demo cart.');
        return;
    } setCartItems(prev => [...prev, course]); setNotice(course.price === 'Free' ? 'Free course saved to your demo cart.' : 'Course added to your demo cart.'); }
    function selectCategory(name) { const category = name.toLowerCase().includes('finance') ? 'Finance' : name.toLowerCase().includes('design') ? 'Design' : 'Development'; setSelectedFilter(category); navigate('#courses'); setNotice(`Showing ${category} courses.`); }
    function renderedPage() {
        const common = { navigate, onDetails: setSelectedCourse, addToCart };
        switch (page) {
            case '/home-two': return react_1.default.createElement(HomeTwo, { ...common, setCategory: selectCategory, selectedFilter: selectedFilter });
            case '/course-one': return react_1.default.createElement(InnerPages_jsx_1.CoursePage, { ...common, number: 1 });
            case '/course-two': return react_1.default.createElement(InnerPages_jsx_1.CoursePage, { ...common, number: 2 });
            case '/about-one': return react_1.default.createElement(InnerPages_jsx_1.AboutPage, { navigate: navigate, number: 1 });
            case '/about-two': return react_1.default.createElement(InnerPages_jsx_1.AboutPage, { navigate: navigate, number: 2 });
            case '/blog-one': return react_1.default.createElement(InnerPages_jsx_1.BlogPage, { number: 1 });
            case '/blog-two': return react_1.default.createElement(InnerPages_jsx_1.BlogPage, { number: 2 });
            case '/contact-one': return react_1.default.createElement(InnerPages_jsx_1.ContactPage, { number: 1 });
            case '/contact-two': return react_1.default.createElement(InnerPages_jsx_1.ContactPage, { number: 2 });
            default: return react_1.default.createElement(HomeOne, { ...common, setCategory: selectCategory, selectedFilter: selectedFilter });
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header, { variant: page === '/home-two' ? 'two' : 'one', route: page, navigate: navigate, cartCount: cartItems.length, setAuthOpen: setAuthOpen, setCartOpen: setCartOpen }),
        react_1.default.createElement("main", { className: `route-view route-${page.slice(1)}`, key: page }, renderedPage()),
        react_1.default.createElement(EndCTA, { navigate: navigate }),
        react_1.default.createElement(Footer, { navigate: navigate }),
        react_1.default.createElement(AuthModal, { kind: authOpen, onClose: () => setAuthOpen(null) }),
        react_1.default.createElement(CourseModal, { course: selectedCourse, onClose: () => setSelectedCourse(null), onAdd: addToCart }),
        react_1.default.createElement(CartDrawer, { open: cartOpen, onClose: () => setCartOpen(false), items: cartItems, setItems: setCartItems }),
        notice && react_1.default.createElement("div", { className: "toast", role: "status" },
            react_1.default.createElement(Icon, { name: "checkCircle", size: 18 }),
            notice));
}

};
const Root=load('./App.jsx').default;window.ReactDOM.createRoot(document.getElementById('root')).render(window.React.createElement(Root));
})();