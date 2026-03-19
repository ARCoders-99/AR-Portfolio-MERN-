# MERN Stack Portfolio Website

A clean, modern, and professional portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Modern UI**: Clean, elegant design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Functional contact form with email notifications
- **Professional Sections**: Hero, About, Skills, Tools, Projects, and Contact

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Nodemailer (for email notifications)
- CORS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for contact form emails)

### Setup Instructions

#### 1. Clone the repository

```bash
git clone <repository-url>
cd "Ar Portfolio"
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (copy from env.example.txt or create manually)
# On Windows: copy env.example.txt .env
# On Mac/Linux: cp env.example.txt .env

# Edit .env file with your credentials
# You'll need to create an App Password for your Gmail account
# See: https://support.google.com/accounts/answer/185833
```

Create `backend/.env` file with the following content:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Important**: To use Gmail with Nodemailer, you need to:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated App Password (not your regular password) in `EMAIL_PASS`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file for API URL (copy from .env.example or create manually)
# On Windows: copy .env.example .env
# On Mac/Linux: cp .env.example .env

# Edit .env file - for local development it should be:
# VITE_API_URL=http://localhost:5000/api/contact
```

For production, create `frontend/.env` with your backend URL:
```
VITE_API_URL=https://your-backend-url.com/api/contact
```

#### 4. Running the Application

**Development Mode:**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:5000`

**Production Build:**

Frontend:
```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`

Backend:
```bash
cd backend
npm start
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `frontend/src/components/Hero.jsx`
   - Change "Your Name" to your actual name

2. **About Section**: Edit `frontend/src/components/About.jsx`
   - Update the about text with your information

3. **Projects**: Edit `frontend/src/components/Projects.jsx`
   - Update the projects array with your actual projects

4. **Skills & Tools**: Edit the respective component files to match your skills

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Set build command: `cd frontend && npm install && npm run build`
4. Set output directory: `frontend/dist`
5. Add environment variable: `VITE_API_URL` with your backend URL
6. Deploy

### Backend (Render/Hostinger)

#### Render:
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables:
   - `PORT` (usually auto-set by Render)
   - `EMAIL_USER`
   - `EMAIL_PASS`
6. Deploy

#### Hostinger:
1. Upload backend files to your server
2. Install Node.js and npm on the server
3. Run `npm install` in the backend directory
4. Set up environment variables
5. Use PM2 or similar to keep the server running:
   ```bash
   npm install -g pm2
   pm2 start server.js --name portfolio-api
   ```

### Important Notes for Deployment

- Update `VITE_API_URL` in frontend `.env` with your production backend URL
- Ensure CORS is properly configured (already set up to allow all origins)
- Use environment variables for all sensitive information
- Keep your `.env` files secure and never commit them to version control

## Project Structure

```
Ar Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Tools.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue in the repository.

