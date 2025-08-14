# 🎓 Student Placement Management System

A full-stack web application built with Angular and Spring Boot to manage student placement records. This system provides a clean, modern, and user-friendly interface for Creating, Reading, Updating, and Deleting (CRUD) placement data.



##   ✨ Key Features

*   **Splash Screen:** A professional loading screen that appears for 10 seconds on application startup.
*   **Interactive Dashboard:** A beautifully designed main dashboard that lists all student placements in a clean, line-by-line format.
*   **CRUD Operations:** Full functionality to **Add**, **View**, **Edit**, and **Delete** placement records.
*   **Icon-Based UI:** Intuitive icons for all actions (View, Edit, Delete, Labels) for a clean and modern user experience.
*   **Profile View:** A dedicated and elegantly styled "View Details" page for each student.
*   **Styled Forms:** Polished and professional forms for adding and editing records, consistent with the application's theme.
*   **RESTful Backend:** A robust backend built with Spring Boot to handle all data operations.


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


## 📋 Prerequisites
Before you begin, ensure you have the following installed on your system:
*   **Java Development Kit (JDK)** - Version 17 or later.
*   **PostgreSQL** - A running instance of the PostgreSQL database.
*   **An IDE for Java/Spring Boot** - vs code.
*   **Node.js and npm** - Latest LTS version recommended.
*   **Angular CLI** - `npm install -g @angular/cli`




## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### **Backend Setup**

1.  **Create Database:**
    *   In your PostgreSQL instance, create a new database. The project is configured to use the name `empdb`.

2.  **Configure Backend:**
    *   Open the backend project (`Stud_place` folder) in your IDE.
    *   Navigate to `src/main/resources/application.properties`.
    *   Verify that the database URL, username, and password match your local setup.
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5433/empdb
     spring.datasource.username=postgres
     spring.datasource.password=1234
     ```

3.  **Run Backend:**
    *   Find and run the `StudPlaceApplication.java` file.
    *   The server will start on `http://localhost:8081`.

### **Frontend Setup**

1.  **Navigate to Directory:**
    *   Open a terminal and navigate to the project's root folder (`employee-crud`).

2.  **Install Dependencies:**
    *   Run the command:
     ```bash
     npm install
     ```

3.  **Run Frontend:**
    *   Start the Angular development server with:
     ```bash
     ng serve
     ```

4.  **Access Application:**
    *   Open your browser and go to **`http://localhost:4200/`**. The application is now running!




## ⚙️ API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint              | Description                               |
|--------|-----------------------|-------------------------------------------|
| `GET`  | `/api/placements`     | Get all student placements, sorted by LPA.|
| `GET`  | `/api/placements/{id}`| Get a single student placement by its ID. |
| `POST` | `/api/placements`     | Add a new student placement.              |
| `PUT`  | `/api/placements/{id}`| Update an existing student placement.     |
| `DELETE`| `/api/placements/{id}`| Delete a student placement by its ID.     |



## 💡 Future Improvements

This project has a solid foundation. Future enhancements could include:
*   **User Authentication:** Implement JWT-based security with login/logout functionality.
*   **Search & Filtering:** Add a search bar to the dashboard to find students by name or company.
*   **Pagination:** For dashboards with hundreds of records, implement pagination to improve performance.
*   **Advanced Sorting:** Allow users to sort the list by different columns (Name, Department, etc.).
*   **Deployment:** Containerize the application using Docker and deploy it to a cloud service like AWS or Heroku

