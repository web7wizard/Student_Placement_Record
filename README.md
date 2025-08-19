# 🎓 Student Placement Management System

A full-stack web application built with Angular and Spring Boot to manage student placement records. This system provides a clean, modern, and user-friendly interface for Creating, Reading, Updating, and Deleting (CRUD) placement data.
A **Spring Boot + PostgreSQL + HTML/CSS/JS** project to manage student placement records.  This project was built as a **final project** to demonstrate full-stack development skills.

## ✨ Key Features

*   **Splash Screen:** A professional loading screen that appears for 10 seconds on application startup.
*   **Interactive Dashboard:** A beautifully designed main dashboard that lists all student placements in a clean, line-by-line format.
*   **CRUD Operations:** Full functionality to **Add**, **View**, **Edit**, and **Delete** placement records.
*   **Icon-Based UI:** Intuitive icons for all actions (View, Edit, Delete, Labels) for a clean and modern user experience.
*   **Profile View:** A dedicated and elegantly styled "View Details" page for each student.
*   **Styled Forms:** Polished and professional forms for adding and editing records, consistent with the application's theme.
*   **RESTful Backend:** A robust backend built with Spring Boot to handle all data operations.


## 🧭 System Overview 
- 📝 Student Registration (Name, Roll Number, Details)
- 📊 Placement Record Management
- 🗄️ Database Integration with PostgreSQL
- 🔗 REST API using Spring Boot
- 🌐 Frontend with HTML, CSS, and JavaScript
- 📦 Built using Maven

  
## 💡 Idea behind Project

The inspiration for this project came from observing the challenges faced by university placement cells and students in tracking placement data effectively. Often, this information is scattered across spreadsheets or outdated systems, making it difficult to get a clear, real-time overview of placement success.

This project was built to solve that problem by providing a centralized, easy-to-use platform where:
*   **Administrators** can effortlessly manage and visualize placement statistics.
*   **Data** is organized, consistent, and easily accessible.
*   The entire process is made more efficient and professional.

By building this as a full-stack application, I aimed to practice and showcase my skills in both frontend UI/UX design with Angular and backend API development with Spring Boot, creating a complete and cohesive software solution from the ground up.
## 🛠️ Tech Stack

### Backend
*   **Java 17**
*   **Spring Boot 3**
*   **Spring Data JPA (Hibernate)**
*   **PostgreSQL**
*   **Maven**

### Frontend
*   **Angular 18**
*   **TypeScript**
*   **HTML5 & CSS3**
*   **Bootstrap 5** (for the grid system)
*   **Font Awesome** (for icons)

### Tools used
- Git & GitHub
- VS Code 
- Postman (for API testing)

### 📂 Project Structure
           Student_Placement_Record/
              ├── src/
              │   ├── main/
              │   │   ├── java/         # Backend code (Spring Boot)
              │   │   ├── resources/    # Config files (application.properties)
              │   └── test/             # Unit tests
              ├── frontend/             # HTML, CSS, JS files
              ├── pom.xml               # Maven configuration
              └── README.md             # Project documentation


## 📋 Prerequisites
Before you begin, ensure you have the following installed on your system:
*   **Java Development Kit (JDK)** - Version 17 or later.
*   **PostgreSQL** - A running instance of the PostgreSQL database.
*   **An IDE for Java/Spring Boot** - Such as IntelliJ IDEA or Eclipse.
*   **Node.js and npm** - Latest LTS version recommended.
*   **Angular CLI** - `npm install -g @angular/cli`


## 🚀 Setup and Installation

Follow these steps to get your project up and running locally.

### 1. Backend Setup (Spring Boot)

a. **Create the Database:**
   *   Open your PostgreSQL admin tool (like pgAdmin).
   *   Create a new database. The project is configured to use the name `empdb`, but you can change it.

b. **Configure Database Connection:**
   *   Navigate to the backend project folder: `Stud_place`.
   *   Open the configuration file: `src/main/resources/application.properties`.
   *   Make sure the following properties match your local PostgreSQL setup:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5433/empdb
     spring.datasource.username=postgres
     spring.datasource.password=1234
     ```
   *   Update the `port`, `database name`, `username`, and `password` as needed.

c. **Run the Backend Server:**
   *   Open the backend project in your IDE (e.g., IntelliJ IDEA).
   *   Locate the main application file: `StudPlaceApplication.java`.
   *   Run this file as a Java application.
   *   The server will start on port `8081` by default.

### 2. Frontend Setup (Angular)

a. **Navigate to the Frontend Directory:**
   *   Open a new terminal and navigate to the root of the project folder (`employee-crud`).

b. **Install Dependencies:**
   *   Run the following command to install all the necessary packages for the frontend:
     ```bash
     npm install
     ```

c. **Run the Frontend Application:**
   *   Once the installation is complete, run the following command to start the Angular development server:
     ```bash
     ng serve ```
   *   The application will start and automatically open in your web browser.

d. **Access the Application:**
   *   Open your web browser and navigate to `http://localhost:4200/`.
   *   You should see the splash screen, followed by the main dashboard. The application is now ready to use!

---

## ⚙️ API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint              | Description                               |
|--------|-----------------------|-------------------------------------------|
| `GET`  | `/api/placements`     | Get all student placements, sorted by LPA.|
| `GET`  | `/api/placements/{id}`| Get a single student placement by its ID. |
| `POST` | `/api/placements`     | Add a new student placement.              |
| `PUT`  | `/api/placements/{id}`| Update an existing student placement.     |
| `DELETE`| `/api/placements/{id}`| Delete a student placement by its ID.    |



## 💡 Future Improvements

This project has a solid foundation. Future enhancements could include:
*   **User Authentication:** Implement JWT-based security with login/logout functionality.
*   **Search & Filtering:** Add a search bar to the dashboard to find students by name or company.
*   **Pagination:** For dashboards with hundreds of records, implement pagination to improve performance.
*   **Advanced Sorting:** Allow users to sort the list by different columns (Name, Department, etc.).
*   **Deployment:** Containerize the application using Docker and deploy it to a cloud service like AWS or Heroku.


