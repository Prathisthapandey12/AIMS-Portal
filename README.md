# AIMS Portal

A web-based Academic Information Management System (AIMS) portal built using React, Axios, Express.js, and MongoDB.  
This platform manages course offerings and enrollment workflows involving three primary stakeholders: Admin, Faculty, and Students.


## Features

### Admin
- Create new courses and manage courses
- Add faculty members and students
- Approve courses offered by faculty
- Approve new courses created by faculty

### Faculty
- View assigned courses
- Offer courses for student enrollment
- Approve or reject student enrollment requests

### Students
- View available courses
- Enroll in offered courses
- Track enrollment status based on faculty approval

## Tech Stack

- **Frontend:** React
- **API Communication:** Axios
- **Backend:** Express.js
- **Database:** MongoDB

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Prathisthapandey12/AIMS-Portal
cd AIMS-Portal
```

### 2. Install dependencies

#### Frontend

```bash
cd src
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3. Set up MongoDB

Create a MongoDB Atlas cluster or use a local MongoDB instance.

Create a `.env` file inside the `server` directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI.

### 4. Start the application

#### Frontend

```bash
cd src
nodemon node index.js
```

#### Backend

```bash
cd backend
nodemon node server.js
```


## Folder Structure

```
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│   └── index.js

server/
├── routes/
├── models/
├── .env
└── server.js
```


## Future Improvements

- Notification system for approvals

## Contributing

Contributions are welcome.  
Feel free to fork this repository and submit a pull request.


## Contact

Created by Your Name  
GitHub: [https://github.com/Prathisthapandey12](https://github.com/Prathisthapandey12)

