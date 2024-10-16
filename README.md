
# Fitness Tracker Application

## Overview
A comprehensive fitness tracking application that enables users to log workouts, set fitness goals, and monitor progress over time. Admins have additional functionalities for managing users, creating fitness programs, and analyzing user data.

## Features

### User Interface
- **Authentication**: Secure Login and Sign-Up pages with input validation.
- **Dashboard**: Displays recent workouts, weekly goals, and progress.
- **Workout Log**: Users can log workouts, detailing activity type, duration, calories burned, and date.
- **Statistics**: Graphical representations of workout trends, including types of activities and their durations.
- **Goal Setting**: Interface to set weekly or monthly goals with visual tracking.

### Admin Interface
- **User Management**: Admins can manage user accounts and create fitness programs.
- **Analytics**: Admins can view aggregate statistics to monitor user engagement and activity trends.

### Backend
- **Role-Based Authentication**: User and Admin roles managed through JWT tokens.
- **CRUD Operations**: Endpoints for workouts, goals, and user management.
- **Statistics Generation**: Provides data visualizations for calories burned, goal achievements, and activity types.

## Tech Stack
- **Frontend**: React, Material-UI or TailwindCSS, Context API for state management.
- **Backend**: Node.js, Express, MongoDB, and JWT for authentication.
- **Deployment**: Frontend on Vercel, Backend on Heroku or Render.

## API Endpoints

Stat-by-query (not working)
![stat](https://github.com/user-attachments/assets/af9b729d-8229-40c7-bf43-b91784b3771b)
delete-workout
![delet-workout](https://github.com/user-attachments/assets/64c1a5e1-0c83-47f1-a7dd-a2d79bba1a36)
update-workout
![update-workout](https://github.com/user-attachments/assets/3692c165-c330-4041-ac84-9a817b1d1b05)
get-workout
![get-workout](https://github.com/user-attachments/assets/ffba8dbe-4c5d-4d43-8c82-17e945da98bf)
create-workout
![create-workout](https://github.com/user-attachments/assets/ed4411a9-f524-40ab-91eb-bd0e7e7c754f)
user-login
![user-logout](https://github.com/user-attachments/assets/c4e952a0-dad6-4eeb-9ce5-647d8790f92d)
user-logout
![user-login](https://github.com/user-attachments/assets/48e2e1c2-c77d-4f9c-a27e-4d6c4fa83e84)
user-sigup
![user-signup](https://github.com/user-attachments/assets/a2cfc984-5617-4882-81bc-b572a96d9698)
delete-goals
![delete-goals](https://github.com/user-attachments/assets/7aa03ab7-a40c-491c-a45c-3760149d26e7)
update-goals
![update-goals](https://github.com/user-attachments/assets/28e940d6-c055-42bb-aa6b-a8158ecbb6ff)
get-goals
![get-goals](https://github.com/user-attachments/assets/e5170b9a-a765-456f-8771-2cb94d1bd2c6)
create-goals
![creat-goals](https://github.com/user-attachments/assets/f7d4ab2c-2873-4e1e-848f-aea348c79174)
get-fitness-program (Admin only)
![get-fitness-program (Admin only)](https://github.com/user-attachments/assets/db363c9f-0df2-4463-9769-a044c88376b5)
create-fitness-program (Admin only)
![create-fitness-program (Admin only)](https://github.com/user-attachments/assets/edbd1eca-e251-4f98-92ca-636effc8ca18)
get-user (Admin only)
![get-user (Admin only)](https://github.com/user-attachments/assets/c23844da-7d5c-407a-bd93-60e0896bc5ab)
 


### Prerequisites
- Node.js and npm installed
- MongoDB database instance (local or cloud)
