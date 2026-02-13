# Task Manager - Full Stack MERN Application

A complete production-ready task management application built with MongoDB, Express, React, and Node.js.

## Features

### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ JWT authentication & authorization
- ✅ User registration and login
- ✅ Full CRUD operations for tasks
- ✅ Input validation with express-validator
- ✅ Password hashing with bcryptjs
- ✅ Task filtering and sorting
- ✅ Task statistics endpoint

### Frontend
- ✅ Modern React 18 with Hooks
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Axios for API calls
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Beautiful gradient UI
- ✅ Protected routes
- ✅ Real-time task statistics

### Task Features
- Create, Read, Update, Delete tasks
- Set task priority (Low, Medium, High)
- Set task status (Pending, In Progress, Completed)
- Add due dates
- Add tags to tasks
- Filter by status and priority
- Sort by different fields
- Track completion statistics

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- cors
- dotenv

**Frontend:**
- React 18
- React Router DOM
- Axios
- React Toastify
- date-fns

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation & Setup

### 1. Clone or Download the Project

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit the .env file and update:
# - MONGODB_URI with your MongoDB connection string
# - JWT_SECRET with a secure random string
# - PORT (optional, defaults to 5000)

# Start the server
npm start

# For development with auto-restart:
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

### 4. MongoDB Setup

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Use connection string: `mongodb://localhost:27017/taskmanager`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get your connection string
- Update `MONGODB_URI` in backend/.env

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)
- `GET /api/tasks/stats/summary` - Get task statistics (protected)

### Query Parameters for GET /api/tasks
- `status` - Filter by status (pending, in-progress, completed)
- `priority` - Filter by priority (low, medium, high)
- `sortBy` - Sort field (createdAt, dueDate, priority, title)
- `order` - Sort order (asc, desc)

## Project Structure

```
task-manager-app/
├── backend/
│   ├── models/
│   │   ├── User.js          # User model
│   │   └── Task.js          # Task model
│   ├── routes/
│   │   ├── auth.js          # Auth routes
│   │   └── tasks.js         # Task routes
│   ├── middleware/
│   │   └── auth.js          # Auth middleware
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── server.js            # Entry point
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── TaskCard.js
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskStats.js
│   │   │   └── PrivateRoute.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── taskService.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── Auth.css
│   │   │   ├── Dashboard.css
│   │   │   ├── Navbar.css
│   │   │   ├── TaskCard.css
│   │   │   ├── TaskForm.css
│   │   │   └── TaskStats.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Usage

1. **Register**: Create a new account on the register page
2. **Login**: Sign in with your credentials
3. **Dashboard**: View all your tasks and statistics
4. **Create Task**: Click "New Task" button
5. **Edit Task**: Click "Edit" on any task card
6. **Delete Task**: Click "Delete" on any task card
7. **Filter**: Use dropdowns to filter by status, priority, etc.
8. **Sort**: Sort tasks by date, priority, or title

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secure_secret_key_here
NODE_ENV=development
```

## Security Features

- Passwords hashed with bcryptjs
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- CORS enabled
- Secure HTTP headers

## Development

**Backend Development:**
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

**Frontend Development:**
```bash
cd frontend
npm start  # React development server with hot reload
```

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in .env
2. Use a production MongoDB database
3. Deploy to services like Heroku, AWS, DigitalOcean, etc.

### Frontend
1. Build the production bundle: `npm run build`
2. Deploy the `build` folder to Netlify, Vercel, or any static hosting

## Testing the API

You can test the API using:
- Postman
- cURL
- Thunder Client (VS Code extension)
- Your browser (for GET requests)

### Example API Calls

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Create Task:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"My Task","description":"Task description","priority":"high","status":"pending"}'
```

## Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check your connection string in .env
- Verify network access if using MongoDB Atlas

**Port Already in Use:**
- Change the PORT in backend/.env
- Kill the process using the port

**CORS Errors:**
- Verify backend is running on port 5000
- Check frontend axios baseURL matches backend

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!

## Author

Built with ❤️ using the MERN stack
