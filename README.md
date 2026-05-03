# 📚 Online Learning Platform (LMS)

A modern full-stack online learning platform built with **Next.js**, **MongoDB**, and **Better Auth**.  
This project provides a smooth, secure, and scalable learning experience for students and instructors.

---

## 🚀 Live Demo

👉 https://b13-a8-repo.vercel.app/

---

## ✨ Key Features

### 🔐 Authentication System
- Secure authentication using Better Auth  
- User registration & login system  
- Protected routes (dashboard, course access)  
- Session-based authentication  
- Role-ready structure (Student / Admin support ready)  

---

### 🎓 Course System
- Browse all available courses  
- Detailed course pages (title, instructor, duration, level, rating)  
- Structured curriculum (modules & lessons)  
- Beginner → Advanced level categorization  
- Reusable course components  

---

### 🗄️ Database (MongoDB)
- Fully integrated MongoDB database  
- Store users, courses, and enrollments  
- Scalable schema design  
- Fast query handling with API routes / server actions  

---

### ⚡ Performance & UX
- Built with Next.js App Router  
- Server-side rendering (SSR)  
- Optimized image loading  
- Fast page navigation  
- Fully responsive UI (mobile + desktop)  

---

## 🧑‍💻 Tech Stack

- ⚡ Next.js (App Router)  
- ⚛️ React.js  
- 🎨 Tailwind CSS  
- 🔐 Better Auth  
- 🗄️ MongoDB + Mongoose  
- ☁️ Vercel (Deployment)  
- 🧠 JavaScript (ES6+)  

---



## 🔐 Authentication Flow

- User registers or logs in  
- Better Auth creates secure session  
- Session stored & validated  
- Protected pages check authentication  
- Unauthorized users redirected  

---

## 🗄️ Database Models

### 👤 User Model
- name  
- email  
- password (hashed)  
- role  

---

### 📚 Course Model
- title  
- description  
- instructor  
- duration  
- rating  
- level  
- curriculum  

---

## ⚙️ Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
NEXT_PUBLIC_APP_URL=http://localhost:3000


🚀 Installation
git clone https://github.com/your-repo.git
cd your-repo
npm install
npm run dev

📦 Deployment
*Hosted on Vercel
*GitHub auto deployment
*Optimized production build

 #📈 Future Improvements

💳 Stripe Payment Integration
🎥 Video Streaming System
📊 Student Progress Tracking
🧑‍🏫 Instructor Dashboard
💬 Live Chat System
🏆 Certificates System

👨‍💻 Developer
Built by Din Islam 


⭐ Support

If you like this project:

*⭐ Give a star on GitHub
*🚀 Share with others
*💡 Contribute improvements


📌 Summary

A scalable LMS platform built with modern web technologies focusing on performance, security, and clean UI/UX.