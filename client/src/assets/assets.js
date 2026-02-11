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
    companyId: { _id: "c1", name: "TechNova", email: "hr@technova.com", image: company_icon },
    description: `
      <p>We are looking for a Frontend Developer who understands React basics and responsive design principles. The candidate should be able to convert UI designs into working components.</p>
      <ul>
        <li>Build reusable UI components</li>
        <li>Fix styling and layout issues</li>
        <li>Connect frontend with APIs</li>
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
    companyId: { _id: "c2", name: "CodeCraft", email: "jobs@codecraft.com", image: company_icon },
    description: `
      <p>Looking for a Backend Developer with good understanding of Node.js and REST APIs. The role involves managing server-side logic and database operations.</p>
      <ul>
        <li>Create REST APIs</li>
        <li>Work with MongoDB</li>
        <li>Handle authentication logic</li>
      </ul>
    `,
    salary: 40000,
    date: Date.now(),
    category: "Programming",
  },

  {
    _id: "3",
    title: "Data Analyst",
    location: "Mumbai",
    level: "Intermediate",
    companyId: { _id: "c3", name: "DataWorks", email: "careers@dataworks.com", image: company_icon },
    description: `
      <p>We are hiring a Data Analyst to work with business data and generate meaningful insights to support company decisions.</p>
      <ul>
        <li>Analyze datasets using SQL</li>
        <li>Create reports and dashboards</li>
        <li>Identify trends and patterns</li>
      </ul>
    `,
    salary: 35000,
    date: Date.now(),
    category: "Data Science",
  },

  {
    _id: "4",
    title: "UI Designer",
    location: "Chennai",
    level: "Fresher",
    companyId: { _id: "c4", name: "PixelStudio", email: "hr@pixel.com", image: company_icon },
    description: `
      <p>We are looking for a UI Designer who can create clean and attractive layouts for websites and applications.</p>
      <ul>
        <li>Create wireframes and mockups</li>
        <li>Work with Figma</li>
        <li>Ensure user-friendly designs</li>
      </ul>
    `,
    salary: 28000,
    date: Date.now(),
    category: "Designing",
  },

  {
    _id: "5",
    title: "Network Engineer",
    location: "Bangalore",
    level: "Senior",
    companyId: { _id: "c5", name: "NetSecure", email: "jobs@netsecure.com", image: company_icon },
    description: `
      <p>Seeking a Network Engineer to manage internal systems and maintain smooth network connectivity.</p>
      <ul>
        <li>Configure routers and switches</li>
        <li>Troubleshoot network problems</li>
        <li>Maintain security standards</li>
      </ul>
    `,
    salary: 60000,
    date: Date.now(),
    category: "Networking",
  },

  {
    _id: "6",
    title: "Cyber Security Analyst",
    location: "Washington",
    level: "Intermediate",
    companyId: { _id: "c6", name: "SafeNet", email: "apply@safenet.com", image: company_icon },
    description: `
      <p>We need a Cyber Security Analyst to monitor threats and protect company systems from vulnerabilities.</p>
      <ul>
        <li>Monitor security logs</li>
        <li>Conduct vulnerability tests</li>
        <li>Respond to security incidents</li>
      </ul>
    `,
    salary: 55000,
    date: Date.now(),
    category: "Cybersecurity",
  },

  {
    _id: "7",
    title: "Marketing Executive",
    location: "Mumbai",
    level: "Fresher",
    companyId: { _id: "c7", name: "BrandBoost", email: "hr@brandboost.com", image: company_icon },
    description: `
      <p>Looking for a Marketing Executive to manage social media campaigns and assist in brand promotion activities.</p>
      <ul>
        <li>Create engaging posts</li>
        <li>Run ad campaigns</li>
        <li>Track campaign performance</li>
      </ul>
    `,
    salary: 25000,
    date: Date.now(),
    category: "Marketing",
  },

  {
    _id: "8",
    title: "Project Manager",
    location: "New York",
    level: "Senior",
    companyId: { _id: "c8", name: "BuildPro", email: "careers@buildpro.com", image: company_icon },
    description: `
      <p>We are hiring a Project Manager to lead software projects and ensure timely delivery of tasks.</p>
      <ul>
        <li>Coordinate team members</li>
        <li>Monitor deadlines</li>
        <li>Report progress to stakeholders</li>
      </ul>
    `,
    salary: 70000,
    date: Date.now(),
    category: "Management",
  },

  {
    _id: "9",
    title: "Full Stack Developer",
    location: "California",
    level: "Intermediate",
    companyId: { _id: "c9", name: "WebCore", email: "hr@webcore.com", image: company_icon },
    description: `
      <p>Looking for a MERN stack developer who can handle both frontend and backend development tasks.</p>
      <ul>
        <li>Develop full-stack features</li>
        <li>Manage databases</li>
        <li>Deploy applications</li>
      </ul>
    `,
    salary: 65000,
    date: Date.now(),
    category: "Programming",
  },

  {
    _id: "10",
    title: "ML Engineer",
    location: "Bangalore",
    level: "Senior",
    companyId: { _id: "c10", name: "AI Labs", email: "jobs@ailabs.com", image: company_icon },
    description: `
      <p>We are seeking an ML Engineer to build predictive models and improve data-driven solutions.</p>
      <ul>
        <li>Develop ML algorithms</li>
        <li>Train and test models</li>
        <li>Optimize performance</li>
      </ul>
    `,
    salary: 80000,
    date: Date.now(),
    category: "Data Science",
  },

  {
    _id: "11",
    title: "System Admin",
    location: "Hyderabad",
    level: "Intermediate",
    companyId: { _id: "c11", name: "InfraTech", email: "hr@infratech.com", image: company_icon },
    description: `
      <p>Looking for a System Administrator to manage servers and maintain system uptime.</p>
      <ul>
        <li>Maintain Linux servers</li>
        <li>Monitor system performance</li>
        <li>Resolve technical issues</li>
      </ul>
    `,
    salary: 45000,
    date: Date.now(),
    category: "Networking",
  },

  {
    _id: "12",
    title: "Graphic Designer",
    location: "Chennai",
    level: "Intermediate",
    companyId: { _id: "c12", name: "CreativeX", email: "jobs@creativex.com", image: company_icon },
    description: `
      <p>We are hiring a Graphic Designer to create visual content for marketing and branding.</p>
      <ul>
        <li>Create social media creatives</li>
        <li>Design marketing materials</li>
        <li>Maintain brand consistency</li>
      </ul>
    `,
    salary: 32000,
    date: Date.now(),
    category: "Designing",
  },

  {
    _id: "13",
    title: "Penetration Tester",
    location: "Washington",
    level: "Senior",
    companyId: { _id: "c13", name: "CyberWall", email: "careers@cyberwall.com", image: company_icon },
    description: `
      <p>Seeking a Penetration Tester to identify vulnerabilities and strengthen system security.</p>
      <ul>
        <li>Perform ethical hacking</li>
        <li>Conduct security assessments</li>
        <li>Prepare security reports</li>
      </ul>
    `,
    salary: 90000,
    date: Date.now(),
    category: "Cybersecurity",
  },

  {
    _id: "14",
    title: "SEO Specialist",
    location: "Mumbai",
    level: "Intermediate",
    companyId: { _id: "c14", name: "RankUp", email: "hr@rankup.com", image: company_icon },
    description: `
      <p>We are hiring an SEO Specialist to improve website visibility and search rankings.</p>
      <ul>
        <li>Perform keyword research</li>
        <li>Optimize website content</li>
        <li>Track ranking performance</li>
      </ul>
    `,
    salary: 35000,
    date: Date.now(),
    category: "Marketing",
  },

  {
    _id: "15",
    title: "HR Executive",
    location: "New York",
    level: "Intermediate",
    companyId: { _id: "c15", name: "PeopleFirst", email: "jobs@peoplefirst.com", image: company_icon },
    description: `
      <p>Looking for an HR Executive to manage recruitment and employee relations.</p>
      <ul>
        <li>Screen candidates</li>
        <li>Conduct interviews</li>
        <li>Maintain employee records</li>
      </ul>
    `,
    salary: 42000,
    date: Date.now(),
    category: "Management",
  },

  {
    _id: "16",
    title: "React Developer",
    location: "Bangalore",
    level: "Intermediate",
    companyId: { _id: "c16", name: "DevHub", email: "apply@devhub.com", image: company_icon },
    description: `
      <p>We are seeking a React Developer to work on new feature development and UI enhancements.</p>
      <ul>
        <li>Develop frontend features</li>
        <li>Improve UI performance</li>
        <li>Write clean code</li>
      </ul>
    `,
    salary: 50000,
    date: Date.now(),
    category: "Programming",
  },

  {
    _id: "17",
    title: "Data Scientist",
    location: "California",
    level: "Senior",
    companyId: { _id: "c17", name: "InsightPro", email: "hr@insightpro.com", image: company_icon },
    description: `
      <p>We are hiring a Data Scientist to build advanced analytics models and drive data-based decisions.</p>
      <ul>
        <li>Analyze large datasets</li>
        <li>Create predictive models</li>
        <li>Present insights to stakeholders</li>
      </ul>
    `,
    salary: 95000,
    date: Date.now(),
    category: "Data Science",
  },

  {
    _id: "18",
    title: "Cloud Engineer",
    location: "Hyderabad",
    level: "Intermediate",
    companyId: { _id: "c18", name: "CloudNet", email: "jobs@cloudnet.com", image: company_icon },
    description: `
      <p>Looking for a Cloud Engineer to manage AWS infrastructure and deployment processes.</p>
      <ul>
        <li>Manage cloud services</li>
        <li>Monitor server performance</li>
        <li>Ensure cloud security</li>
      </ul>
    `,
    salary: 70000,
    date: Date.now(),
    category: "Programming",
  },

  {
    _id: "19",
    title: "UI/UX Designer",
    location: "Mumbai",
    level: "Senior",
    companyId: { _id: "c19", name: "DesignPro", email: "careers@designpro.com", image: company_icon },
    description: `
      <p>Seeking a UI/UX Designer to improve user experience and optimize product usability.</p>
      <ul>
        <li>Conduct user research</li>
        <li>Create prototypes</li>
        <li>Improve user flows</li>
      </ul>
    `,
    salary: 60000,
    date: Date.now(),
    category: "Designing",
  },

  {
    _id: "20",
    title: "Security Engineer",
    location: "Washington",
    level: "Senior",
    companyId: { _id: "c20", name: "SecureIT", email: "hr@secureit.com", image: company_icon },
    description: `
      <p>We are hiring a Security Engineer to implement and maintain system security standards.</p>
      <ul>
        <li>Implement firewalls</li>
        <li>Monitor threats</li>
        <li>Improve system security</li>
      </ul>
    `,
    salary: 85000,
    date: Date.now(),
    category: "Cybersecurity",
  },

  {
    _id: "21",
    title: "Content Marketer",
    location: "Chennai",
    level: "Fresher",
    companyId: { _id: "c21", name: "MediaBuzz", email: "apply@mediabuzz.com", image: company_icon },
    description: `
      <p>Looking for a Content Marketer to create blogs and social media content for brand promotion.</p>
      <ul>
        <li>Write blog articles</li>
        <li>Plan content calendar</li>
        <li>Support marketing campaigns</li>
      </ul>
    `,
    salary: 26000,
    date: Date.now(),
    category: "Marketing",
  },

  {
    _id: "22",
    title: "Business Analyst",
    location: "New York",
    level: "Intermediate",
    companyId: { _id: "c22", name: "BizTech", email: "hr@biztech.com", image: company_icon },
    description: `
      <p>We are seeking a Business Analyst to evaluate processes and recommend improvements.</p>
      <ul>
        <li>Gather requirements</li>
        <li>Analyze workflows</li>
        <li>Prepare reports</li>
      </ul>
    `,
    salary: 58000,
    date: Date.now(),
    category: "Management",
  },

  {
    _id: "23",
    title: "DevOps Engineer",
    location: "Bangalore",
    level: "Senior",
    companyId: { _id: "c23", name: "DeployNow", email: "jobs@deploynow.com", image: company_icon },
    description: `
      <p>Looking for a DevOps Engineer to manage CI/CD pipelines and deployment automation.</p>
      <ul>
        <li>Manage CI/CD workflows</li>
        <li>Automate deployments</li>
        <li>Monitor infrastructure</li>
      </ul>
    `,
    salary: 90000,
    date: Date.now(),
    category: "Programming",
  },

  {
    _id: "24",
    title: "Database Administrator",
    location: "California",
    level: "Senior",
    companyId: { _id: "c24", name: "DataSecure", email: "careers@datasecure.com", image: company_icon },
    description: `
      <p>We are hiring a Database Administrator to manage company databases and ensure data integrity.</p>
      <ul>
        <li>Maintain database systems</li>
        <li>Perform backups</li>
        <li>Optimize database performance</li>
      </ul>
    `,
    salary: 88000,
    date: Date.now(),
    category: "Data Science",
  },
];

