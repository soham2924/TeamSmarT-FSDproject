![WhatsApp Image 2025-04-30 at 22 15 41_e763c29a](https://github.com/user-attachments/assets/e2b93391-742b-46d7-b1ce-b77999d6bfd6)
# Team Management Application
A full-stack web application for managing team members, built with React.js, Node.js, Express, and MongoDB.

## Team Members
<ul>
   <l>Sohamsingh Thakur [ RA2211056010118]</l>
   <l>Lalith Aditya [RA2211056010076]</l>
   <l>Sanjana Disawal [RA2211056010113]</l>
   <l>ChaitanyaKumar [RA2211056010091]</l>
</ul>



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
![WhatsApp Image 2025-04-30 at 22 15 41_ab45aada](https://github.com/user-attachments/assets/a828d022-8676-41a9-aede-3f78758dedfd)

![image](https://github.com/user-attachments/assets/be980c36-2527-49a4-89f8-d49c1f1f4d49)
