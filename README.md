# 🎓 Student Placement Management System

A full-stack web application built with Angular and Spring Boot to manage student placement records. This system provides a clean, modern, and user-friendly interface for Creating, Reading, Updating, and Deleting (CRUD) placement data.This project is a Student Placement Management System built using Spring Boot (REST API), PostgreSQL, and Angular.
It allows students to upload their details, and administrators/teachers to manage placement records efficiently.
The project demonstrates full-stack development with a backend powered by Spring Boot + PostgreSQL and a responsive frontend built using Angular.
It is designed to provide a seamless experience for both students and administrators to track and manage placement-related data.


## 💡 Idea behind this project

The inspiration for this project was to modernize the way university placement data is managed. Traditional methods using spreadsheets are often inefficient and error-prone.

The core idea was to build a solution that would:

*   **Centralize Data:** Replace scattered spreadsheets with a single, reliable database.
*   **Improve Efficiency:** Provide a fast and intuitive interface for CRUD operations, saving administrators time.
*   **Enhance Visibility:** Offer a clean dashboard to instantly view placement statistics and student success.
*   **Showcase Full-Stack Skills:** Demonstrate the ability to develop a complete, end-to-end application using Angular and Spring Boot.

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
*   **HTML & CSS**
*   **Bootstrap 5** (for the grid system)
*   **Font Awesome** (for icons)


## 📋 Prerequisites
Before you begin, ensure you have the following installed on your system:
*   **Java Development Kit (JDK)** - Version 17 or later.
*   **PostgreSQL** - A running instance of the PostgreSQL database.
*   **An IDE for Java/Spring Boot** - vs code.
*   **Node.js and npm** - Latest LTS version recommended.
*   **Angular CLI** - `npm install -g @angular/cli`


## 📂 Project Structure

    placement-management-system/
      │
      ├── backend/ (Spring Boot)
      │   ├── src/main/java/...  # Controllers, Services, Entities, Repositories
      │   ├── src/main/resources/application.properties
      │   └── pom.xml
      │
      ├── frontend/ (Angular App)
      │   ├── src/app/           # Components, Services
      │   ├── src/assets/
      │   └── angular.json
      │
      └── README.md

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



# 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

             
# 👩‍💻 Author                   
-    Name              -  javeriya jamadar
-    college           -  sesp 
- 📧 emil account     -  javeriyajamadar7@gmail.com
- 🔗 GitHub Profile   -  web7wizard 

#
**Proudly developed as part of a journey in learning and building real-world Java applications. 🎓💻**
