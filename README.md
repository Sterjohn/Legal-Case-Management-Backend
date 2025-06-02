# Legal Case Management System

## Overview
A full-stack web application designed for legal professionals to manage clients, cases, and deadlines. This project includes secure authentication, role-based access, and complete CRUD functionality on both frontend and backend.

## Features
- User registration and login with JWT authentication
- Role-based access control (admin, attorney, paralegal)
- Create, update, and delete clients
- Assign and manage cases with deadlines
- Protected API routes and dashboard
- Fully integrated React frontend and Express backend

## Technologies Used
- Frontend: React, React Router, Axios, Tailwind CSS (optional)
- Backend: Node.js, Express.js
- Database: PostgreSQL, Sequelize ORM
- Security: JWT, bcrypt
- Other: Git, GitHub, Vite, VS Code

## Getting Started

### Backend Setup
1. Clone the repository and navigate to the backend folder
2. Run `npm install`
3. Set up a `.env` file with the following:
   ```
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Run `npm start`

### Frontend Setup
1. Clone the repository and navigate to the frontend folder
2. Run `npm install`
3. Start the development server with `npm run dev`

## Usage
- Register and log in
- Add and manage clients and cases
- View case statuses and deadlines
- Securely manage your account and data

## Contributors
- Sterling Johnson (https://github.com/sterjohn)

## License
This project is licensed under the MIT License.
