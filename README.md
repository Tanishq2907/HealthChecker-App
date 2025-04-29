![SWOT Analysis](ScreenShots/Swot%20Analysis.avif)

# HealthChecker App

**HealthChecker** is a full-stack real-time web application that allows patients to check symptoms, book doctor appointments, chat with an AI-powered chatbot, and even get treated via online video consultations.
Built with modern technologies to ensure high performance, security, and scalability.

---
![App](https://user-images.githubusercontent.com/79870979/235880881-0dad4801-499d-43c1-b2ea-396628b934f1.PNG)
## ?? Features

- User Authentication: Secure login and registration using JWT.
- Symptom Checker: AI-based initial diagnosis recommendations.
- Voice-to-Text Input: Patients can speak their symptoms for easier input.
- Home Remedies Suggestions: Provides home remedies for minor illnesses.
- User Health Record Management: Maintain personal health history securely.
- Doctor Management: Doctors can set availability slots and manage profiles.
- Appointment Booking: Patients can book appointments online with doctors.
- Online Video Consultations: Patients can get treated online via video calls.
- Live Chatbot: AI chatbot integrated for symptom discussions.
- Real-Time Notifications: Using WebSocket for instant appointment updates.

---

## ?? Technology Stack

### Backend (Java + Spring Boot)
| Part        | Technology                               |
|:------------|:-----------------------------------------|
| Core Framework | Java 21, Spring Boot 3 |
| Web Framework | Spring Web |
| Security | Spring Security, JWT (JSON Web Tokens) |
| Database ORM | Spring Data JPA (Hibernate) |
| Database | PostgreSQL (Production) / H2 (Testing) |
| Real-Time Communication | WebSocket (Spring WebSocket) |
| AI Integration | Together AI API (Free alternative to OpenAI) |
| External Libraries/APIs | Spring Boot Starter Libraries, Together AI REST API, WebSocket (SockJS, StompJS) |

### Frontend (React.js)
| Part | Technology |
|:-----|:-----------|
| Core Technologies | React.js (UI Framework) |
| Styling | Material-UI (MUI) |
| Routing | React Router |
| API Requests | Axios |
| Real-Time Updates | WebSocket (SockJS + StompJS) |
| Forms and Validation | Formik + Yup |
| Date Handling | date-fns |
| Scheduling | react-big-calendar |
| Charts and Visualization | Chart.js |
| State Management | React Context API |
| Development Tools | npm, ES6+ JavaScript |

---

?? Installation and Setup Instructions

### 1. Clone the Repo

```
git clone https://github.com/your-username/HealthChecker.git
cd HealthChecker
```

---

### 2. Backend Setup

```
cd backend
```
Configure your database settings inside src/main/resources/application.properties.

Add your Together AI API Key in the properties.

Build and run the Spring Boot application:

- Install dependencies:

```
mvn clean install
```

- Run the backend server:

```
mvn spring-boot:run
```

> Make sure PostgreSQL is running.

---

### 3. Frontend Setup

```
cd frontend
-Install frontend dependencies:
npm install
-Start the React app:
npm run dev
```

- Frontend will run at: `http://localhost:5173`
- Backend at: `http://localhost:8080`

---

## ?? API Keys & Configuration

Update the following inside `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/healthcheckerdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword
ai.api.key=your_together_ai_key
```

---

## ?? Try It Out

You can try the app locally by running both frontend and backend, or deploy it to:

- **Render / Heroku** for backend
- **Vercel / Netlify** for frontend

---


## ????? Developer

- Tanishq Giri

---

## ?? License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and contribute!
