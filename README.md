# Real-Time Chat Application

A fully functional real-time chat application built with **Node.js**, **Express.js**, **Socket.IO**, **React.js** and **Tailwind CSS**. This application allows multiple users to communicate in real-time, with features like typing indicators, user status updates, and a responsive modern UI.

---

## Features

- **Real-Time Messaging**: Instant messaging using WebSocket technology.
- **User Login**: Users can set their usernames before entering the chat.
- **Typing Indicators**: Displays when another user is typing.
- **User Status**: Shows online/offline status for connected users.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop screens.
- **Clean UI**: Modern and elegant design using Tailwind CSS.
- **Message Alignment**: User messages appear on the right, others' messages on the left.

---

## Technologies Used

### Backend

- **Node.js**
- **Express.js**
- **Socket.IO**

### Frontend

- **React.js**
- **Tailwind CSS**

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**

### Steps to Run Locally

#### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/rushikesh-wani/chat-app-socket.io-.git
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   nodemon ./src/app.js
   ```
   The server will run on `http://localhost:5000`.

#### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

---

## Deployment

### Backend Deployment

Deploy the backend on a WebSocket-friendly hosting platform like:

- **Render**
- **Heroku**
- **AWS EC2**

Ensure CORS is configured to allow requests from the frontend domain.

### Frontend Deployment

Deploy the frontend on platforms like:

- **Vercel**
- **Netlify**

Update the backend URL in the frontend to match the live backend server.

---

## File Structure

### Backend

```
backend/
├── src
    ├── app.js       # Main server file
    ├── socket.js
    ├── users.js
├── package.json     # Dependencies and scripts
└── README.md        # Backend-specific documentation
```

### Frontend

```
frontend/
├── src/
│   ├── components/  # React components
│   ├── App.js       # Main application file
│   ├── index.js     # Entry point
├── public/          # Static assets
├── package.json     # Dependencies and scripts
└── README.md        # Frontend-specific documentation
```

---

## Configuration

### CORS

Ensure the backend server allows requests from the frontend domain:

```javascript
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
```

### WebSocket Transport

Force WebSocket transport to avoid session ID issues:

```javascript
const io = new Server(server, {
  transports: ["websocket"],
});
```

---

## Known Issues

1. **Session ID Unknown**:

   - Ensure the backend is deployed on a WebSocket-friendly platform.
   - Force WebSocket transport to avoid fallback to polling.

2. **CORS Errors**:
   - Verify that the backend's CORS configuration allows requests from the frontend domain.

---

## Future Enhancements

- Add user authentication for secure login.
- Implement persistent message storage using a database like MongoDB.
- Add group chat functionality.
- Deploy using HTTPS for secure communication.

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

---

## Contact

For any questions or support, feel free to contact:

- **Email**: wanirushikeshanil11@gmail.com
- **GitHub**: [rushikesh-wani](https://github.com/rushikesh-wani)
