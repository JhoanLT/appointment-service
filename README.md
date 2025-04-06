# 🩺 Appointment Service – SOA REST API

This project provides a basic service for creating and listing medical appointments, using:

- Node.js + Express
- MongoDB
- Docker + Docker Compose
- RESTful services (SOA architecture)

---

## 📦 Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- (Optional) [Postman](https://www.postman.com/) or `curl` to test the endpoints

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/JhoanLT/appointment-service.git
cd appointment-service
```

### 2. Create `.env` file

In the root of your project, create a `.env` file with the following content:

```env
MONGO_URI=mongodb://mongo:27017/ophthalmology
```

### 3. Start the services with Docker Compose

```bash
docker-compose up --build
```

This will:
- Start the backend on `http://localhost:3000`
- Start MongoDB on port `27017`
- Connect the backend to MongoDB using the `MONGO_URI` variable

---

## 📡 API Endpoints

### ➕ Create Appointment

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/appointments`
- **Headers:**
    - `Content-Type: application/json`
- **Body:**

```json
{
  "patientName": "John Doe",
  "doctorName": "Dr. Smith",
  "appointmentDate": "2025-04-08T10:00:00Z",
  "reason": "Routine checkup"
}
```

---

### 📋 Get All Appointments

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/appointments`

---

## 🧪 Test with `curl`

Create a new appointment:

```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patientName": "Jane Smith",
    "doctorName": "Dr. Evans",
    "appointmentDate": "2025-04-08T14:00:00Z",
    "reason": "Eye discomfort"
  }'
```

Get all appointments:

```bash
curl http://localhost:3000/api/appointments
```

---

## 🛑 Stop the Project

```bash
docker-compose down
```

---

## 📁 Project Structure

```
src/
├── controllers/          # Appointment logic
├── models/               # Mongoose schemas
├── routes/               # API routes
├── app.js                # App entry point
.env                      # Environment variables
Dockerfile
docker-compose.yml
```