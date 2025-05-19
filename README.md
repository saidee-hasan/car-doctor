# Car Doctor - Vehicle Service Management System

Car Doctor is a web application developed for managing vehicle service appointments, maintenance records, and user communications effectively. The platform includes features for both customers and administrators to streamline vehicle servicing processes.

## 🚀 Features

* User authentication and authorization (JWT)
* Service booking and status tracking
* Vehicle maintenance history
* Admin dashboard for managing services and users
* Responsive UI using React and Tailwind CSS
* Backend with Node.js and Express.js
* MongoDB for data storage
* Payment integration (optional)

## 🛠️ Technologies Used

* React.js
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Axios

## 📦 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/saidee-hasan/car-doctor.git
   cd car-doctor
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:

   ```bash
   cd server
   npm run dev
   ```

   In another terminal:

   ```bash
   cd client
   npm start
   ```

## 📚 API Endpoints

* **POST /api/auth/register** - Register a new user
* **POST /api/auth/login** - User login
* **GET /api/services** - Fetch all services
* **POST /api/services** - Create a new service (Admin only)
* **PUT /api/services/\:id** - Update service details (Admin only)
* **DELETE /api/services/\:id** - Delete a service (Admin only)

## ✅ Testing

* Testing is implemented using Jest and Supertest.
* To run tests:

  ```bash
  cd server
  npm run test
  ```

## 📦 Deployment

* Frontend can be deployed on Vercel.
* Backend can be deployed on Render or Railway.

## 📄 License

This project is licensed under the MIT License.
