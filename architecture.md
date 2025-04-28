# Real-Time Chat App Architecture

## Overview
The application is a simple full-stack real-time chat app using Node.js, React, and WebSocket technology via Socket.IO.

## Backend
- Node.js server using Express.js
- Socket.IO for real-time message exchange
- CORS enabled to allow frontend access
- Maintains in-memory chat history

## Frontend
- React.js SPA (Single Page Application)
- Socket.IO Client connects to backend server
- Allows username login
- Real-time message sending and receiving
- Displays all past chat messages on joining

## WebSocket Flow
- Frontend emits `send_message`
- Backend receives and broadcasts `receive_message`
- Frontend listens and updates UI

## Scalability
- The backend is stateless aside from in-memory history (can be expanded with Redis/database easily).
- Designed for multiple users simultaneously.
