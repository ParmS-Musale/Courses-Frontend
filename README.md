# Project Overview

## Overview of the 1st Task

### Problem Statement:
Build a backend service using .NET and Entity Framework to perform CRUD operations on entities within a PostgreSQL database.  
The service should manage related data with:
- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships  
Ensure relational integrity, implement search functionality, and add authentication for secure resource access.

### What I Make:
- Sign Up Page
- Login Page
- Home Page
- All Courses
- Add Courses

### Overview:
1. Use **React** for the frontend.
2. For security, use **JWT Tokens**.
3. Improve code readability.

### Diagram:
![1st Task Overview](1st_task_overview.png)

---

## Overview of the 2nd Task

<!-- ### Problem Statement: -->
<!-- Build a backend service using .NET and Entity Framework to perform CRUD operations on entities within a PostgreSQL database.  
The service should manage related data with:
- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships  
Ensure relational integrity, implement search functionality, and add authentication for secure resource access. -->

### What I Make:
- Sign Up Page
- Login Page
- Home Page
- All Courses
- Admin/User Panel
- Add Courses

<!-- ### Overview:
1. Debugging.
2. Different types of inputs for datatypes in the application.
3. Token invalidation for the backend.
4. Better visuals.
5. One-to-many and one-to-one relationships.
6. Non-deletable entities.
7. Improved code quality. -->

### Diagram:
![2nd Task Overview](2nd_task_overview.png)

# Course Management System Database Design

## Data Types

1 - String - ✅  
2 - Boolean - ✅  
3 - Date ( DOB / Courses time ) - ✅  
4 - Timestamp - ✅  
5 - Numbers ( Unique Constraints )  - Course Has a Unique Identifier Like Same Course User Can't Buy ✅  
6 - Char - Male Or Female Check constraints  
7 - Blob  
8 - Long text - Course Description  ✅  

## Constraints

1 - Not null - User Name ✅  
2 - Unique - ✅ ( Course ID )  
3 - Primary key - ✅ ( User ID )  
4 - Foreign key - ✅ ( User -> Purchased Course )  
5 - Check -  
6 - Default -  

## Relations

1 - One to one  - ✅ ( Course User - Course ID )  
2 - One to many - ✅  
3 - Many to one - ✅ ( Many students can be associated with one course. )  
4 - Many to many -✅ (A student can enroll in multiple courses > A course can have multiple students enrolled. )  


