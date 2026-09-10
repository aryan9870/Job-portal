# InsiderJobs — Full-Stack Job Portal

A production-style job board web application where **Applicants** can discover and apply for jobs, and **Recruiters** can post and manage openings. Built with the modern JavaScript stack and a clean separation between client and server.

> Live Demo: https://job-portal-one-plum.vercel.app

---

## ✨ Overview

InsiderJobs is a role-based job marketplace. Users register as either an **Applicant** or a **Recruiter**, and the app tailors the experience to that role — applicants browse, apply, and track applications, while recruiters post jobs, manage visibility, and review applications.

---

## 🔐 Authentication & Authorization

- **JWT-based** authentication stored in **HTTP-only cookies**
- **Role-based access control** (Applicant vs. Recruiter)
- Protected API endpoints guarded by middleware (`isLoggedIn`, `isApplicant`, `isRecruiter`)
- Secure cookie flags (`httpOnly`, `secure`, `sameSite`) for production

---

## 👤 Applicant Features

- Register & login with profile image upload
- Browse all available jobs with search by **title** and **location**
- View detailed job descriptions (rich text)
- Upload resume (stored on Cloudinary) with size validation
- Apply for jobs (one application per job)
- Track application status — **Pending / Accepted / Rejected**
- View applied jobs dashboard

## 🧑‍💼 Recruiter Features

- Register & login as a recruiter
- Create job listings with a rich-text editor (Quill)
- Manage posted jobs (toggle visibility, view applicant count)
- View all applicants per job with their resumes
- **Accept / Reject** applications
- Role-gated dashboard routes

---

## 🛠 Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS 4
- React Router DOM 7
- Context API (global state)
- Axios (HTTP client)
- Quill (rich-text editor)
- Moment.js (date formatting)

### Backend
- Node.js
- Express 5
- PostgreSQL (via `pg`) — Supabase
- JWT (JSON Web Tokens)
- bcrypt (password hashing)
- Multer + Cloudinary (file uploads)
- cookie-parser

---

## 🏗 Architecture

- **MVC-style** backend: routes → controllers → models (raw SQL)
- Centralized error handling (`ErrorHandler`)
- Middleware-based authentication & authorization
- Component-based frontend with Context API for shared state
- Protected, role-gated client routes

---

## 📂 Project Structure

```
Job-portal/
├── client/                     # React + Vite frontend
│   └── src/
│       ├── components/         # Reusable UI (Navbar, JobCard, Hero, etc.)
│       ├── context/            # AppContext & AlertContext (global state)
│       ├── pages/              # Home, ApplyJob, Dashboard, ManageJobs, etc.
│       ├── App.jsx             # Routing
│       └── main.jsx            # Entry point
│
└── server/                     # Node + Express backend
    ├── config/                 # DB connection, Cloudinary
    ├── controllers/            # Business logic
    ├── middleware/             # Auth & Multer
    ├── models/                 # SQL query layer
    ├── routes/                 # API routes
    ├── utils/                  # Error handler, Cloudinary upload
    └── server.js               # Express entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database (e.g., Supabase)
- A Cloudinary account (for image/resume uploads)

### 1. Backend

```bash
cd server
npm install
```

Create a `.env` file (see `.env.example`):

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
DATABASE_URL=your_postgresql_connection_string
```

```bash
npm run dev
```

### 2. Frontend

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:3000
```

```bash
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint                          | Access     | Description                        |
| ------ | --------------------------------- | ---------- | ---------------------------------- |
| POST   | `/api/users/register`             | Public     | Register (multipart image upload)  |
| POST   | `/api/users/login`                | Public     | Login                              |
| GET    | `/api/users/logout`               | Logged in  | Logout & clear cookie              |
| GET    | `/api/users/is-auth`              | Logged in  | Check auth status                  |
| POST   | `/api/users/resume`               | Applicant  | Upload resume                      |
| GET    | `/api/jobs`                       | Public     | List all visible jobs              |
| POST   | `/api/jobs`                       | Recruiter  | Create a job                       |
| GET    | `/api/jobs/recruiter`             | Recruiter  | List own jobs + applicant count    |
| GET    | `/api/jobs/:jobId`                | Public     | Get a single job                   |
| PATCH  | `/api/jobs/:jobId`                | Recruiter  | Toggle job visibility              |
| GET    | `/api/applications`               | Applicant  | List own applications              |
| GET    | `/api/applications/recruiter`     | Recruiter  | List applications on own jobs      |
| POST   | `/api/applications/:jobId`        | Applicant  | Apply for a job                    |
| PATCH  | `/api/applications/:applicationId`| Recruiter  | Accept / reject an application     |

---

## 👨‍💻 Author

**Aryan Singh** — Full Stack Developer

- GitHub: https://github.com/aryan9870
- LinkedIn: https://www.linkedin.com/in/aryan-singh-949144313/

---

## 📄 License

This project is open source and available for educational use.
