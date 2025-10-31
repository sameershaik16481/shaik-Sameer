# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

**That's it! Your portfolio is running! 🎉**

---

## ✏️ Essential Customization (15 minutes)

### Step 1: Update Personal Info (3 min)

**File: `components/Hero.tsx`**
```typescript
// Line 45: Your name
<span className="gradient-text">Your Full Name</span>

// Line 54: Your roles
<TypeAnimation
  sequence={[
    'Your Role 1',
    2000,
    'Your Role 2',
    2000,
  ]}
/>

// Line 67: Your tagline
Your compelling professional tagline here
```

### Step 2: Update Contact Info (2 min)

**File: `components/Contact.tsx`**
```typescript
// Line 43-63: Update email, phone, location
const contactInfo = [
  { value: 'your@email.com' },
  { value: '+your-phone' },
  { value: 'Your City, Country' },
];
```

**File: `components/Navigation.tsx`**
```typescript
// Line 72-94: Update social links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
<a href="mailto:YOUR_EMAIL">
```

### Step 3: Update About Section (5 min)

**File: `components/About.tsx`**
- Lines 64-95: Replace with your story

### Step 4: Add Your Projects (5 min)

**File: `components/Projects.tsx`**
- Lines 11-91: Replace with your projects

---

## 🎨 Quick Theme Change (1 minute)

**File: `tailwind.config.ts`**

**Change primary color to:**

Purple:
```typescript
primary: { 500: '#8b5cf6', 600: '#7c3aed' }
```

Green:
```typescript
primary: { 500: '#10b981', 600: '#059669' }
```

Orange:
```typescript
primary: { 500: '#f59e0b', 600: '#d97706' }
```

---

## 🚀 Deploy (2 minutes)

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
**Done! Your site is live! 🎉**

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Select your repo
5. Click "Deploy"
**Live in seconds! ⚡**

---

## 📚 File Structure Overview

```
portfolio/
├── app/
│   ├── layout.tsx         # Main layout, meta tags
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Top navigation bar
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Project portfolio
│   ├── Experience.tsx    # Work history
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── package.json          # Dependencies
└── tailwind.config.ts    # Tailwind configuration
```

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Check for errors

# Git
git add .
git commit -m "Update portfolio"
git push
```

---

## ❓ Quick Troubleshooting

### Port 3000 already in use?
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Or use a different port
npm run dev -- -p 3001
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Styles not updating?
```bash
# Hard refresh browser: Ctrl + Shift + R (or Cmd + Shift + R on Mac)
# Or clear .next folder
rm -rf .next
npm run dev
```

---

## 📖 Next Steps

1. **Customize Content** - See `CUSTOMIZATION.md` for detailed guide
2. **Add Projects** - Replace example projects with your own
3. **Deploy** - Follow `DEPLOYMENT.md` for deployment options
4. **Share** - Add portfolio link to LinkedIn, resume, GitHub

---

## 🆘 Need Help?

- 📧 **Email:** sameershaik16481@gmail.com
- 💼 **LinkedIn:** [Shaik Sameer Basha](https://linkedin.com/in/sameer-basha-shaik-112965255)
- 🐙 **GitHub:** [@sameershaik16481](https://github.com/sameershaik16481)
- 📚 **Full Guide:** See `README.md`

---

**Happy Building! 🚀**

*Remember: Start small, customize gradually, and deploy early!*

