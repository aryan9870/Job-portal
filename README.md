# 🚀 InsiderJobs – MERN Stack Job Portal

A full-stack Job Portal web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project simulates a real-world job marketplace where applicants can apply for jobs and recruiters can manage job listings and applications.

---

## 🌐 Live Demo

🔗 https://job-portal-one-plum.vercel.app

---

## 📌 Features

### 👤 Applicant Features
- User registration & login (JWT Authentication)
- Browse all available jobs
- View detailed job descriptions
- Apply for jobs
- Resume upload with server-side validation
- Track application status (Pending / Accepted / Rejected)
- View applied jobs dashboard
- Fully responsive UI

---

### 🧑‍💼 Recruiter Features
- Recruiter registration & login
- Create & Manage job listings
- View all posted jobs
- View applicants for each job
- Accept / Reject applications
- Role-based route protection

---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js
- Context API (State Management)
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- Multer (File Upload)
- Cloudinary (Resume Storage)

### 🔹 Deployment
- Frontend: Vercel
- Backend: Render

---

## 🏗 Project Architecture

### Backend Architecture
- MVC structure (Models, Controllers, Routes)
- Middleware-based authentication & authorization
- Centralized error handling
- RESTful API design
- Secure token handling

### Frontend Architecture
- Component-based structure
- Context API for global state management
- Protected routes
- Clean & scalable folder structure

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access (Applicant / Recruiter)
- Protected API endpoints using middleware
- Secure token storage with HTTP-only cookies

---

## 📂 Folder Structure

# 📁 Project Folder Structure

```
Job-Portal/
│
├── client/                             # Frontend (React + Vite)
│   │
│   ├── src/
│   │   │
│   │   ├── assets/                     # Static assets (images, icons)
│   │   │
│   │   ├── components/                 # Reusable UI Components
│   │   │   ├── Alert.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobListing.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── RecruiterLogin.jsx
│   │   │   └── UserLogin.jsx
│   │   │
│   │   ├── context/                    # Global State Management
│   │   │   ├── AlertContext.jsx
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── pages/                      # Page-level Components
│   │   │   ├── AddJob.jsx
│   │   │   ├── Applications.jsx
│   │   │   ├── ApplyJob.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ManageJobs.jsx
│   │   │   └── ViewApplications.jsx
│   │   │
│   │   ├── App.jsx                     # Main Routing File
│   │   ├── main.jsx                    # Entry Point
│   │   └── index.css                   # Global Styles
│   │
│   ├── .env                            # Frontend Environment Variables
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                             # Backend (Node + Express)
│   │
│   ├── config/                         # Configuration Files
│   │   ├── cloudinary.js
│   │   └── db.js
│   │
│   ├── controllers/                    # Business Logic Layer
│   │   ├── applicationController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   │
│   ├── middleware/                     # Custom Middleware
│   │   ├── authMiddleware.js
│   │   └── multer.js
│   │
│   ├── models/                         # Database Schemas (Mongoose)
│   │   ├── applicationModel.js
│   │   ├── jobModel.js
│   │   └── userModel.js
│   │
│   ├── routes/                         # API Routes
│   │   ├── applicationRoutes.js
│   │   ├── jobRoute.js
│   │   └── userRoute.js
│   │
│   ├── utils/                          # Utility Functions
│   │   ├── errorHandler.js
│   │   └── uploadToCloudinary.js
│   │
│   ├── server.js                       # Express Entry Point
│   ├── .env                            # Backend Environment Variables
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# 📦 Installation & Setup

Follow the steps below to run the project locally.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/aryan9870/Job-portal.git
cd Job-portal
```

---

## 🔹 Backend Setup (Server)

```bash
cd server
npm install
```

### ▶ Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### ▶ Start Backend Server

```bash
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 🔹 Frontend Setup (Client)

Open a new terminal:

```bash
cd client
npm install
```

### ▶ Create a `.env` file inside the `client` folder:

```env
VITE_BACKEND_URL=http://localhost:5000
```

### ▶ Start Frontend

```bash
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🧠 What I Learned

- Designing scalable backend architecture
- Implementing complete JWT authentication flow
- Handling file uploads using Multer & Cloudinary
- Role-based authorization system
- State management using Context API
- Writing production-style clean code
- Improving UX with loading states & empty state UI
- Environment configuration & deployment setup

---

## 🚀 Future Improvements

- Email notifications for application updates
- Dark mode support

---

## 👨‍💻 Author

**Aryan Singh**  
Full Stack Developer | MERN Stack | React Developer  

GitHub: https://github.com/aryan9870  
LinkedIn: ( https://www.linkedin.com/in/aryan-singh-949144313/ )

---

## ⭐ Support

If you like this project, give it a star ⭐ on GitHub!

Built with ❤️ by Aryan
