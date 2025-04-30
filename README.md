# Team Management Application

## Team Members
Sohamsingh Thakur [ RA2211056010118]
Lalith Aditya [RA2211056010076]
Sanjana Disawal [RA2211056010113]

A full-stack web application for managing team members, built with React.js, Node.js, Express, and MongoDB.

## Features

- Add new team members with profile images
- View all team members in a grid layout
- View detailed information about each team member
- Responsive design using Material-UI
- Image upload functionality
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create an `uploads` directory in the root folder:
   ```bash
   mkdir uploads
   ```

5. Start MongoDB service on your machine

## Running the Application

1. Start the backend server (from the root directory):
   ```bash
   npm run dev
   ```

2. Start the frontend development server (from the client directory):
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/members` - Get all team members
- `GET /api/members/:id` - Get a specific team member
- `POST /api/members` - Add a new team member

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Multer (for file uploads)

## Project Structure

```
team-management/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main App component
├── uploads/               # Uploaded images
├── server.js             # Backend server
└── package.json          # Backend dependencies
``` 

## Project Overview/ Outcome:
