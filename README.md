# TODO API Application

A RESTful API for managing TODO items built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Create TODO items** with title, priority, and status
- **Get all TODO items** from the database
- **Get single TODO item** by ID
- **Update TODO items** with new information
- **Delete TODO items** from the database
- **MongoDB integration** for persistent data storage
- **RESTful API design** following best practices

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration management
- **Module System**: ES6 Modules

## 📁 Project Structure

```
TODO/
├── app.js                 # Main application entry point
├── model/
│   └── todoModel.js      # MongoDB schema and model
├── routes/
│   └── todo.js           # API routes and controllers
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TODO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node app.js
   ```

The server will start running on the specified port (default: 3000).

## 📚 API Endpoints

### Base URL: `http://localhost:3000/api/v1/todo`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/create` | Create a new TODO item | `{ "title": "string", "priority": "string", "status": "string" }` |
| `GET` | `/all` | Get all TODO items | - |
| `GET` | `/:id` | Get a specific TODO item by ID | - |
| `PUT` | `/:id` | Update a TODO item by ID | `{ "title": "string", "priority": "string", "status": "string" }` |
| `DELETE` | `/:id` | Delete a TODO item by ID | - |

### Example Usage

#### Create a TODO
```bash
curl -X POST http://localhost:3000/api/v1/todo/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "priority": "high",
    "status": "pending"
  }'
```

#### Get All TODOs
```bash
curl http://localhost:3000/api/v1/todo/all
```

#### Update a TODO
```bash
curl -X PUT http://localhost:3000/api/v1/todo/64f1a2b3c4d5e6f7g8h9i0j1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated task title",
    "priority": "medium",
    "status": "completed"
  }'
```

#### Delete a TODO
```bash
curl -X DELETE http://localhost:3000/api/v1/todo/64f1a2b3c4d5e6f7g8h9i0j1
```

## 📊 Data Model

The TODO item schema includes:

- **title** (String, required): The title/description of the TODO item
- **priority** (String): Priority level of the task
- **status** (String): Current status of the task

## 🔧 Development

### Running in Development Mode

For development with auto-restart on file changes, you can use nodemon:

```bash
npm install -g nodemon
nodemon app.js
```

### Adding New Features

1. **New Routes**: Add them in `routes/todo.js`
2. **Database Changes**: Modify the schema in `model/todoModel.js`
3. **Middleware**: Add in `app.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ for learning and development purposes.

---

**Note**: Make sure to replace `<your-repo-url>` with your actual GitHub repository URL when cloning.
