# Quick Setup Guide

## Backend Environment Variables

Create `backend/.env` file with:

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**To get Gmail App Password:**
1. Go to https://myaccount.google.com/
2. Enable 2-Factor Authentication
3. Go to https://myaccount.google.com/apppasswords
4. Generate an app password for "Mail"
5. Use that 16-character password in `EMAIL_PASS`

## Frontend Environment Variables

Create `frontend/.env` file with:

**For Development:**
```
VITE_API_URL=http://localhost:5000/api/contact
```

**For Production:**
```
VITE_API_URL=https://your-backend-url.com/api/contact
```

## Quick Start

1. **Backend:**
   ```bash
   cd backend
   npm install
   # Create .env file (see above)
   npm run dev
   ```

2. **Frontend:**
   ```bash
   cd frontend
   npm install
   # Create .env file (see above)
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

