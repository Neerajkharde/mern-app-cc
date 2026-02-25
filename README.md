# MERN CRUD Application — User Management

A simple full-stack User CRUD app built with MongoDB Atlas, Express.js, React.js (Vite), and Node.js.

---

## 📁 Project Structure

```
MERN-app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── userController.js  # CRUD logic
│   ├── models/
│   │   └── User.js            # Mongoose User schema
│   ├── routes/
│   │   └── userRoutes.js      # REST API routes
│   ├── .env.example           # Environment variable template
│   ├── package.json
│   └── server.js              # Entry point
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── userService.js # Axios API calls
    │   ├── components/
    │   │   ├── UserForm.jsx   # Add/Edit form
    │   │   └── UserList.jsx   # Users table
    │   ├── App.jsx
    │   └── App.css
    └── package.json
```

---

## 🌐 MongoDB Atlas Setup

1. Go to [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas) and sign in / sign up.
2. Click **Build a Cluster** → choose the **Free (M0)** tier.
3. Choose a cloud provider and region, then click **Create Cluster**.
4. Once created, click **Database Access** → **Add New Database User**:
   - Set a username and password.
5. Click **Network Access** → **Add IP Address** → type `0.0.0.0/0` (allow all, for development).
6. Go to **Clusters** → click **Connect** → **Drivers**.
7. Copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `<username>` and `<password>` with your credentials.

---

## ⚙️ Backend Setup

```bash
cd backend
```

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** (copy from `.env.example`):
   ```bash
   copy .env.example .env
   ```

3. **Edit `.env`** and paste your MongoDB Atlas connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/merndb?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Start the backend:**
   ```bash
   npm start
   ```
   Or with auto-reload:
   ```bash
   npm run dev
   ```

The server runs on **http://localhost:5000**

---

## 💻 Frontend Setup

```bash
cd frontend
```

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the frontend:**
   ```bash
   npm run dev
   ```

The app opens at **http://localhost:5173**

---

## 🔌 REST API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | /api/users        | Get all users     |
| GET    | /api/users/:id    | Get single user   |
| POST   | /api/users        | Create a user     |
| PUT    | /api/users/:id    | Update a user     |
| DELETE | /api/users/:id    | Delete a user     |

---

# MERN CRUD Application — User Management

A simple full-stack User CRUD app built with MongoDB Atlas, Express.js, React.js (Vite), and Node.js.

---

## 📁 Project Structure

```
MERN-app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── userController.js  # CRUD logic
│   ├── models/
│   │   └── User.js            # Mongoose User schema
│   ├── routes/
│   │   └── userRoutes.js      # REST API routes
│   ├── .env.example           # Environment variable template
│   ├── package.json
│   └── server.js              # Entry point
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── userService.js # Axios API calls
    │   ├── components/
    │   │   ├── UserForm.jsx   # Add/Edit form
    │   │   └── UserList.jsx   # Users table
    │   ├── App.jsx
    │   └── App.css
    └── package.json
```

---

## 🌐 MongoDB Atlas Setup

1. Go to [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas) and sign in / sign up.
2. Click **Build a Cluster** → choose the **Free (M0)** tier.
3. Choose a cloud provider and region, then click **Create Cluster**.
4. Once created, click **Database Access** → **Add New Database User**:
   - Set a username and password.
5. Click **Network Access** → **Add IP Address** → type `0.0.0.0/0` (allow all, for development).
6. Go to **Clusters** → click **Connect** → **Drivers**.
7. Copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `<username>` and `<password>` with your credentials.

---

## ⚙️ Backend Setup

```bash
cd backend
```

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** (copy from `.env.example`):
   ```bash
   copy .env.example .env
   ```

3. **Edit `.env`** and paste your MongoDB Atlas connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/merndb?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Start the backend:**
   ```bash
   npm start
   ```
   Or with auto-reload:
   ```bash
   npm run dev
   ```

The server runs on **http://localhost:5000**

---

## 💻 Frontend Setup

```bash
cd frontend
```

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the frontend:**
   ```bash
   npm run dev
   ```

The app opens at **http://localhost:5173**

---

## 🔌 REST API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | /api/users        | Get all users     |
| GET    | /api/users/:id    | Get single user   |
| POST   | /api/users        | Create a user     |
| PUT    | /api/users/:id    | Update a user     |
| DELETE | /api/users/:id    | Delete a user     |

---

## ✅ Features

- Add a new user (name, email, age)
- View all users in a table
- Edit existing user details
- Delete a user with confirmation prompt
- Simple, clean UI with no external CSS libraries