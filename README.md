# 🎉 Event Registration System  

This is a full-stack **Event Registration System** built with **Node.js, Express, MongoDB, and JWT Authentication**.  
Users can register, log in, create events, and register for events securely.  

---

## 🚀 Features
- User Authentication (Register/Login) with JWT
- Create, update, and delete events
- Register for events
- View event registrations
- Secure password hashing (bcrypt)
- MongoDB for database storage
- Protected routes using middleware

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT, bcrypt  
- **Frontend**: React.js (inside `Frontend/`)  

---

## 📂 Project Structure
Backend/
├── controllers/ # Route controllers
├── middleware/ # Authentication middleware
├── models/ # Mongoose models
├── routes/ # API routes
├── db.js # MongoDB connection
├── server.js # App entry point
└── .env # Environment variables (not pushed to GitHub)

Frontend/
└── event-registration/ # React frontend

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayesha-saaed/codealpha_eventregistrationsystem.git
2.Install dependencies for backend:

bash(in terminal)
cd Backend
npm install
3.Create a .env file inside Backend/ with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

 4.Run the backend:
npm start

 5.For frontend:
cd Frontend/event-registration
npm install
npm start


📌 API Endpoints
Auth
POST /api/auth/register → Register a new user
POST /api/auth/login → Login user

Events
POST /api/events → Create new event
GET /api/events → Get all events
PUT /api/events/:id → Update event
DELETE /api/events/:id → Delete event

Registrations
POST /api/registrations/register → Register for event
GET /api/registrations/event/:eventId → View event registrations


