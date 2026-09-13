🚀 DevConnect

DevConnect is a full-stack developer community platform designed to connect developers, showcase projects, and provide a space for collaboration and networking.

🌐 Live Demo

Frontend: https://devconnect-navy.vercel.app/

Backend API: https://devconnect-backend-z94a.onrender.com/

📌 About The Project

DevConnect is a web application where developers can create accounts, log in securely, discover other developers, and showcase their projects.

The project was developed as a full-stack application using React, Node.js, Express, TypeScript, Prisma, and MongoDB.

✨ Features

- 🔐 User Registration & Login
- 👤 Developer Profiles
- 💻 Project Showcase
- 🔑 Secure Password Hashing
- 🗄️ MongoDB Database Integration
- ⚡ REST API using Express
- 🌐 Responsive React Frontend
- ☁️ Cloud Deployment
- 🔄 Frontend–Backend API Integration

🛠️ Tech Stack

Frontend

- React.js
- JavaScript
- Vite
- HTML
- CSS

Backend

- Node.js
- Express.js
- TypeScript

Database

- MongoDB
- Prisma ORM

Authentication & Security

- bcrypt
- REST API

Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

📂 Project Structure

Devconnect/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   └── ...
│   ├── prisma/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup

1. Clone the Repository

git clone https://github.com/pranavtakit/Devconnect.git
cd Devconnect

2. Install Frontend Dependencies

cd client
npm install

3. Install Backend Dependencies

cd ../server
npm install

4. Configure Environment Variables

Create a ".env" file inside the "server" folder.

DATABASE_URL=your_mongodb_connection_string
PORT=5000

5. Start Backend

npm run dev

6. Start Frontend

Open another terminal:

cd client
npm run dev

The application will then be available on the local Vite development URL.

🔗 API

The backend provides REST API endpoints for authentication and application functionality.

Example:

POST /api/auth/register
POST /api/auth/login

🗄️ Database

DevConnect uses MongoDB Atlas as the cloud database and Prisma as the ORM.

User information and authentication-related data are stored securely in the database, while passwords are hashed using bcrypt.

☁️ Deployment

The application is deployed using:

Component| Platform
Frontend| Vercel
Backend| Render
Database| MongoDB Atlas

🎯 Future Improvements

- 💬 Developer-to-developer messaging
- ❤️ Like & comment system
- 🔍 Developer search and filtering
- 📝 Project posts
- 👥 Follow system
- 🔔 Notifications
- 📱 Improved mobile responsiveness

👨‍💻 Developer

Pranav Takit

B.Tech Computer Science & Engineering
G H Raisoni College of Engineering

🔗 GitHub

https://github.com/pranavtakit

---

⭐ If you like this project, consider giving it a star!