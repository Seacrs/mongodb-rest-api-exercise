# Items CRUD API

A RESTful API built with Node.js, Express, and MongoDB for managing items.

## Tech Stack

- **Node.js** - runtime environment
- **Express.js** - web framework
- **MongoDB Atlas** - cloud database
- **Mongoose** - MongoDB object modeling
- **Helmet** - security headers
- **dotenv** - Environment variable management

## Project Structure

```
├── controllers/
│   └── itemController.js   # handles HTTP requests and responses
├── services/
│   └── itemServices.js      # handles database logic
├── models/
│   └── item.js             # Mongoose schema and model
├── routes/
│   └── itemRoutes.js       # route definitions
├── .env                    # environment variables (not committed)
├── .gitignore
├── app.js                  # entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local installation or MongoDB Atlas account)
- npm package manager
- Git (for cloning)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Seacrs/mongodb-rest-api-exercise
cd mongodb-rest-api-exercise
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root directory:

```
# Server Configuration
PORT=3000
MONGODB_URI =
```

5. Start the server:

```bash
npx nodemon app.js
```

## API Endpoints

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/items`     | Fetch all items           |
| GET    | `/items/:id` | Fetch a single item by ID |
| POST   | `/items`     | Create a new item         |
| PUT    | `/items/:id` | Update an item by ID      |
| DELETE | `/items/:id` | Delete an item by ID      |

## Request & Response Examples

### Get All items

`GET /items`

```json
[
  {
    "_id": "6a0c6a35c8e48959b26629d9",
    "name": "Smartwatch",
    "description": "Water-resistant smartwatch with fitness tracking features.",
    "price": 250,
    "createdAt": "2026-05-19T13:48:37.293Z",
    "updatedAt": "2026-05-19T13:52:02.152Z",
    "__v": 0
  }
]
```

### Get Item by ID

`GET /items/:id`

```json
{
  "_id": "6a0c6a35c8e48959b26629d9",
  "name": "Smartwatch",
  "description": "Water-resistant smartwatch with fitness tracking features.",
  "price": 250,
  "createdAt": "2026-05-19T13:48:37.293Z",
  "updatedAt": "2026-05-19T13:52:02.152Z",
  "__v": 0
}
```

### Create Item

```
POST /items
Content-Type: application/json
```

```json
{
  "name": "External Hard Drive",
  "description": "100",
  "price": "1TB portable hard drive with USB 3.0 connectivity."
}
```

### Update Item

```
PUT /items/:id
Content-Type: application/json
```

```json
{
  "name": "Updated Item",
  "description": "An updated description",
  "price": 59.99
}
```

### Delete Item

`DELETE /items/:id`

```json
{
  "message": "Item deleted successfully"
}
```

## Item Schema

| Field | Type | Required |
|-------|------|----------|
| `name` | String | ☑️|
| `description` | String | ☑️ |
| `price` | Number | ☑️ |
| `createdAt` | Date | Auto
|`updatedAT` | Date | Auto

## Error Responses

| Status | Meaning |
|--------|---------|
| `400` | Bad request - missing required fields or invalid ID format |
| `404` | Item not found |
| `500` | Internal server error |

## Environment Variables

| Variable | Description |
|-----------|------------|
| `PORT` | Port the server runs on |
| `MONGODB_URI` | MongoDB Atlas connection string |