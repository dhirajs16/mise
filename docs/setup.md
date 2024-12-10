# **Project Setup Guide**

## **Overview**
This project uses React for the frontend and Django with DRF for the backend. Follow these steps to set up the project on your local machine.

## Prerequisites
- Node.js 14 or higher
- npm or yarn
- Python 3.8 or higher
- pip package manager

## Clone the Repository:
   ```bash

   git clone https://github.com/dhirajs16/mise.git
   cd mise

   ```
<hr>


## **Frontend Setup**

1. **Navigate to Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash

   npm install tailwindcss postcss autoprefixer
   npx -D tailwindcss init
   npm install react-icons
   npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   npm install react-router-dom
   npm install react-hook-form

   ```

3. **Start the Frontend Server**:
   ```bash

   npm run dev

   ```
<hr>

## **Backend Setup**

1. **Navigate to Frontend Directory**:
   ```bash
   cd backend
   ```

2. **Create Virtual Environment**:

   ```bash

   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

   ```

3. **Install Dependencies**:
   ```bash
   
   pip install -r requirements.txt
   python manage.py migrate
   
   ```

- Set your `SECRET_KEY` in the `./backend/settings/base.py` file.

4. **Run the Backend Server**:
   ```bash

   python manage.py runserver

   ```
