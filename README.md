# 🧠 ThinkBoard

A full-stack **MERN application** that lets users **create, organize, and manage their ideas or notes**.  
ThinkBoard is designed with a **secure, scalable architecture**, featuring **RESTful APIs**, **rate limiting using Upstash Redis**, and a modern **React + DaisyUI** frontend.  
Both frontend and backend are **fully deployed on Render**.

![App Screenshot](./images/screenshot1.png)

---

## 📋 Table of Contents

- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🚀 Live Demo](#-live-demo)
- [📚 Learn More](#-learn-more)

---

## 🤖 Introduction

**ThinkBoard** is a **MERN stack idea management app** that helps users create, update, and delete notes effortlessly.  
It demonstrates strong full-stack concepts — including **Express.js REST APIs**, **MongoDB integration**, **Upstash Redis rate limiting**, and **secure environment configuration**.  
The frontend uses **React + DaisyUI** to deliver a clean, responsive, and modern user experience.

This project is a perfect example of building and deploying a **production-ready full-stack app** with cloud deployment, scalable backend, and smooth UI design.

---

## ⚙️ Tech Stack

- [**MongoDB Atlas**](https://www.mongodb.com/atlas/database) – Cloud NoSQL database used for storing notes and user data.  
- [**Express.js**](https://expressjs.com/) – Backend framework for building REST APIs with routing and middleware.  
- [**React.js**](https://react.dev/) – JavaScript library for creating a dynamic and component-based frontend UI.  
- [**Node.js**](https://nodejs.org/) – Runtime environment for executing server-side JavaScript.  
- [**DaisyUI**](https://daisyui.com/) – Tailwind CSS-based UI component library for modern, responsive interfaces.  
- [**Upstash Redis**](https://upstash.com/) – Used for distributed rate limiting to prevent API abuse and enhance security.  
- [**Render**](https://render.com/) – Platform used to deploy both the frontend and backend.

---

## 🔋 Features

👉 **Create, Update, Delete Notes** — Full CRUD functionality using RESTful APIs.  
👉 **Rate Limiting (Upstash Redis)** — Protects APIs from excessive requests and ensures stability.  
👉 **Responsive UI** — Built with DaisyUI components for a clean and consistent look.  
👉 **Error Handling & Status Codes** — Implemented proper HTTP status codes for each API response.  
👉 **Full Deployment** — Both frontend and backend deployed on Render with environment variable management.  
👉 **Scalable Architecture** — Modular structure for easy maintenance and future expansion.

and more — including backend validation, secure configurations, and reusable React components.

---

## 🤸 Quick Start

Follow these steps to set up ThinkBoard locally on your machine.

**Prerequisites**

Make sure you have the following installed:
- [**Git**](https://git-scm.com/)
- [**Node.js**](https://nodejs.org/)
- [**npm**](https://www.npmjs.com/)

---

### 🛠 Installation

Clone the repository:
```bash
git clone https://github.com/yashSarode31/thinkboard.git
cd thinkboard
```
```
cd backend
npm install
```
```
cd ../frontend
npm install
```
---

### ⚙️ Environment Setup

Create a new file named `.env` inside the `backend` folder and add the following variables:
```

PORT=5000
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```


---

### ▶️ Run the Project

Start the backend server:

```
cd backend
npm run start
```

In a new terminal, start the frontend:
```
cd frontend
npm run dev
```


Then open your browser at:

👉 [http://localhost:5173](http://localhost:5173)

---

## 🚀 Live Demo

🔗 **Live Project:** [https://thinkboard-yxym.onrender.com/](https://thinkboard-yxym.onrender.com/)

---

## 📚 Learn More

This project demonstrates:

- How to build a complete **MERN stack application** with modular backend and React frontend  
- Implementing **rate limiting** for production-grade API security using **Upstash Redis**  
- Deploying a **full MERN app on Render** (single unified deployment)  
- Using **DaisyUI + Tailwind CSS** for modern, responsive UI design  

ThinkBoard focuses on practical full-stack concepts that are highly valuable for professional developer roles.

---

⭐ **If you found this project helpful, please consider giving it a star!**



