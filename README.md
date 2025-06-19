
### ✅ BACKEND: `README.md` for `shelfex-social-backend`

```markdown
# ShelfEx Social Feed – Backend

This is the backend of the **Infinite Scroll Social Feed** project for the ShelfEx Full-Stack Internship.

## 🌐 Live API

👉 [Live Backend on Render](https://shelfex-social-backend-4.onrender.com)

## 📦 Features

- 👤 Role-based authentication (`Celebrity`, `Public`)
- 📝 Create, like, comment on posts
- 📡 Real-time notifications via Socket.io
- 🧠 Follower-based feed filtering
- 🔒 JWT Authentication
- 🧾 MongoDB data persistence

## 🛠️ Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- Socket.io
- Cloudinary (for image uploads)
- JWT
- dotenv

## 🗃️ Folder Structure

/server
/controllers
/models
/routes
server.js
.env.example



## 🔐 Environment Variables

Create a `.env` file like below:

```ini
PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
🔧 Run Locally

git clone https://github.com/aryanch12/shelfex-social-backend.git
cd shelfex-social-backend
npm install
npx nodemon server.js
