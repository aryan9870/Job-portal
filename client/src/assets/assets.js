import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from "./cross_icon.svg";
import location_icon from "./location_icon.svg";
import money_icon from "./money_icon.svg";
import suitcase_icon from "./suitcase_icon.svg";
import person_icon from "./person_icon.svg";
import upload_area from "./upload_area.svg";
import resume_selected from "./resume_selected.svg";
import resume_not_selected from "./resume_not_selected.svg";
import play_store from "./play_store.svg";
import app_store from "./app_store.svg";
import back_arrow_icon from "./back_arrow_icon.svg";
import left_arrow_icon from "./left_arrow_icon.svg";
import right_arrow_icon from "./right_arrow_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import profile_upload_icon from "./profile_upload_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import resume_download_icon from "./resume_download_icon.svg";
import delete_icon from "./delete_icon.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import samsung_logo from "./samsung_logo.png";
import adobe_logo from "./adobe_logo.png";
import amazon_logo from "./amazon_logo.png";

export const assets = {
  logo,
  search_icon,
  cross_icon,
  upload_area,
  company_icon,
  resume_not_selected,
  resume_selected,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  app_main_img,
  play_store,
  app_store,
  back_arrow_icon,
  left_arrow_icon,
  right_arrow_icon,
  location_icon,
  money_icon,
  suitcase_icon,
  person_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  home_icon,
  add_icon,
  person_tick_icon,
  resume_download_icon,
  profile_img,
  delete_icon,
  profile_upload_icon,
  email_icon,
  lock_icon,
  samsung_logo,
  adobe_logo,
  amazon_logo,
};

export const jobsData = [

{
  _id: "1",
  title: "Frontend Developer",
  location: "Bangalore",
  level: "Fresher",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova is seeking a passionate Frontend Developer to build scalable and responsive web applications.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Develop reusable React components</li>
      <li>Translate UI/UX designs into production-ready code</li>
      <li>Ensure cross-browser compatibility</li>
      <li>Integrate REST APIs</li>
      <li>Optimize application performance</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>React.js</li>
      <li>Git</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>Bachelor’s in CS/IT</li>
      <li>0–2 years experience</li>
    </ul>
  `,
  salary: 30000,
  date: Date.now(),
  category: "Programming",
},

{
  _id: "2",
  title: "Backend Developer",
  location: "Hyderabad",
  level: "Junior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova is hiring a Backend Developer to develop scalable APIs and services.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Develop RESTful APIs</li>
      <li>Manage databases</li>
      <li>Implement authentication systems</li>
      <li>Optimize backend performance</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>Node.js & Express</li>
      <li>MongoDB</li>
      <li>JWT Authentication</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>1–3 years experience</li>
    </ul>
  `,
  salary: 40000,
  date: Date.now(),
  category: "Programming",
},

{
  _id: "3",
  title: "Full Stack Developer",
  location: "Delhi",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova is looking for a Full Stack Developer experienced in MERN stack.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Develop frontend and backend modules</li>
      <li>Maintain APIs</li>
      <li>Ensure application scalability</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>React.js</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>2+ years experience</li>
    </ul>
  `,
  salary: 50000,
  date: Date.now(),
  category: "Programming",
},

{
  _id: "4",
  title: "React Developer",
  location: "Pune",
  level: "Junior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova is hiring a React Developer to build dynamic user interfaces.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Create reusable components</li>
      <li>Manage state efficiently</li>
      <li>Integrate APIs</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>React Hooks</li>
      <li>Redux</li>
      <li>JavaScript ES6+</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>1–2 years experience</li>
    </ul>
  `,
  salary: 42000,
  date: Date.now(),
  category: "Programming",
},

{
  _id: "5",
  title: "Node.js Developer",
  location: "Noida",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova seeks a Node.js Developer to handle server-side logic.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Build scalable backend services</li>
      <li>Maintain databases</li>
      <li>Ensure data security</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>Express.js</li>
      <li>MongoDB</li>
      <li>API Integration</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>2+ years backend experience</li>
    </ul>
  `,
  salary: 45000,
  date: Date.now(),
  category: "Programming",
},

{
  _id: "6",
  title: "UI Designer",
  location: "Chennai",
  level: "Fresher",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `
    <p>TechNova seeks a creative UI Designer to design intuitive interfaces.</p>
    <h4>Key Responsibilities</h4>
    <ul>
      <li>Create wireframes and prototypes</li>
      <li>Design responsive layouts</li>
      <li>Maintain design consistency</li>
    </ul>
    <h4>Skills Required</h4>
    <ul>
      <li>Figma</li>
      <li>Adobe XD</li>
      <li>Typography</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
      <li>Design portfolio required</li>
    </ul>
  `,
  salary: 28000,
  date: Date.now(),
  category: "Designing",
},

// 7–24 shortened slightly for length but same structure follows

{
  _id: "7",
  title: "Data Analyst",
  location: "Mumbai",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Analyze datasets and generate insights.</p>`,
  salary: 35000,
  date: Date.now(),
  category: "Data Science",
},

{
  _id: "8",
  title: "Data Scientist",
  location: "Bangalore",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Build ML models and predictive systems.</p>`,
  salary: 75000,
  date: Date.now(),
  category: "Data Science",
},

{
  _id: "9",
  title: "QA Engineer",
  location: "Gurgaon",
  level: "Fresher",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Test applications and ensure quality.</p>`,
  salary: 25000,
  date: Date.now(),
  category: "Testing",
},

{
  _id: "10",
  title: "DevOps Engineer",
  location: "Pune",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Manage CI/CD pipelines and deployments.</p>`,
  salary: 68000,
  date: Date.now(),
  category: "Cloud",
},

{
  _id: "11",
  title: "Cloud Engineer",
  location: "Delhi",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Deploy and manage AWS infrastructure.</p>`,
  salary: 62000,
  date: Date.now(),
  category: "Cloud",
},

{
  _id: "12",
  title: "Cyber Security Analyst",
  location: "Bangalore",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Monitor and secure infrastructure.</p>`,
  salary: 55000,
  date: Date.now(),
  category: "Security",
},

{
  _id: "13",
  title: "Mobile App Developer",
  location: "Bangalore",
  level: "Junior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Develop cross-platform mobile apps.</p>`,
  salary: 43000,
  date: Date.now(),
  category: "Mobile Development",
},

{
  _id: "14",
  title: "Android Developer",
  location: "Chennai",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Build Android applications using Kotlin.</p>`,
  salary: 48000,
  date: Date.now(),
  category: "Mobile Development",
},

{
  _id: "15",
  title: "iOS Developer",
  location: "Mumbai",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Develop iOS apps using Swift.</p>`,
  salary: 70000,
  date: Date.now(),
  category: "Mobile Development",
},

{
  _id: "16",
  title: "Product Manager",
  location: "Gurgaon",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Lead product lifecycle and strategy.</p>`,
  salary: 80000,
  date: Date.now(),
  category: "Management",
},

{
  _id: "17",
  title: "Business Analyst",
  location: "Delhi",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Analyze business requirements and processes.</p>`,
  salary: 45000,
  date: Date.now(),
  category: "Management",
},

{
  _id: "18",
  title: "HR Executive",
  location: "Bangalore",
  level: "Fresher",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Manage recruitment and employee relations.</p>`,
  salary: 25000,
  date: Date.now(),
  category: "HR",
},

{
  _id: "19",
  title: "Technical Writer",
  location: "Pune",
  level: "Junior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Create technical documentation and guides.</p>`,
  salary: 32000,
  date: Date.now(),
  category: "Documentation",
},

{
  _id: "20",
  title: "System Administrator",
  location: "Hyderabad",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Maintain IT systems and servers.</p>`,
  salary: 50000,
  date: Date.now(),
  category: "IT Support",
},

{
  _id: "21",
  title: "AI Engineer",
  location: "Bangalore",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Build AI-based solutions using ML.</p>`,
  salary: 90000,
  date: Date.now(),
  category: "Artificial Intelligence",
},

{
  _id: "22",
  title: "Blockchain Developer",
  location: "Delhi",
  level: "Senior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Develop decentralized applications.</p>`,
  salary: 85000,
  date: Date.now(),
  category: "Blockchain",
},

{
  _id: "23",
  title: "Game Developer",
  location: "Mumbai",
  level: "Intermediate",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Develop interactive games using Unity.</p>`,
  salary: 60000,
  date: Date.now(),
  category: "Game Development",
},

{
  _id: "24",
  title: "Support Engineer",
  location: "Noida",
  level: "Junior",
  companyId: { _id: "c", name: "TechNova", email: "hr@technova.com", image: company_icon },
  description: `<p>Provide technical support and troubleshoot issues.</p>`,
  salary: 30000,
  date: Date.now(),
  category: "IT Support",
}

];




export const categories = [
  "Programming",
  "Data Science",
  "Designing",
  "Networking",
  "Management",
  "Marketing",
  "Cybersecurity"
]

export const locations = [
  "Banglore",
  "Washington",
  "Hydrabad",
  "Mumbai",
  "California",
  "Chennai",
  "New York"
]

export const jobsApplied = [
  {
    id: "1",
    company: "TechNova",
    logo: company_icon,
    title: "Frontend Developer",
    location: "Bangalore",
    date: "12 Feb 2026",
    status: "Interview"
  },
  {
    id: "2",
    company: "CodeCraft",
    logo: company_icon,
    title: "React Developer",
    location: "Hyderabad",
    date: "08 Feb 2026",
    status: "Pending"
  },
  {
    id: "3",
    company: "InnoSoft",
    logo: company_icon,
    title: "Full Stack Developer",
    location: "Mumbai",
    date: "02 Feb 2026",
    status: "Rejected"
  },
  {
    id: "4",
    company: "NextGen Labs",
    logo: company_icon,
    title: "Backend Developer",
    location: "Chennai",
    date: "28 Jan 2026",
    status: "Interview"
  },
  {
    id: "5",
    company: "DevHive",
    logo: company_icon,
    title: "UI Developer",
    location: "Delhi",
    date: "20 Jan 2026",
    status: "Pending"
  }
];



export const applicationsData = [
  {
    id: 1,
    userName: "Richard Sanford",
    avatar: profile_img,
    jobTitle: "Full Stack Developer",
    location: "Bangalore",
    resume: "resume1.pdf",
    status: "pending"
  },
  {
    id: 2,
    userName: "Enrique Murphy",
    avatar: profile_img,
    jobTitle: "Data Scientist",
    location: "San Francisco",
    resume: "resume2.pdf",
    status: "pending"
  },
  {
    id: 3,
    userName: "Alison Powell",
    avatar: profile_img,
    jobTitle: "Marketing Manager",
    location: "London",
    resume: "resume3.pdf",
    status: "pending"
  },
  {
    id: 4,
    userName: "Richard Sanford",
    avatar: profile_img,
    jobTitle: "UI/UX Designer",
    location: "Dubai",
    resume: "resume4.pdf",
    status: "pending"
  },
  {
    id: 5,
    userName: "Enrique Murphy",
    avatar: profile_img,
    jobTitle: "Full Stack Developer",
    location: "Hyderabad",
    resume: "resume5.pdf",
    status: "pending"
  },
  {
    id: 6,
    userName: "Alison Powell",
    avatar: profile_img,
    jobTitle: "Data Scientist",
    location: "New Delhi",
    resume: "resume6.pdf",
    status: "pending"
  },
  {
    id: 7,
    userName: "Richard Sanford",
    avatar: profile_img,
    jobTitle: "Marketing Manager",
    location: "Chennai",
    resume: "resume7.pdf",
    status: "pending"
  }
];

