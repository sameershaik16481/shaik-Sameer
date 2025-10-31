# 🚀 Deployment Guide

This comprehensive guide will walk you through deploying your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ All personal information is updated
- ✅ Projects section has your actual projects
- ✅ Contact information is correct
- ✅ Social media links are working
- ✅ Images are optimized
- ✅ Build runs successfully locally (`npm run build`)
- ✅ No console errors or warnings
- ✅ Tested on mobile devices

## 1️⃣ Vercel Deployment (Recommended)

Vercel is the easiest and best option for Next.js applications.

### Why Vercel?
- ✨ Built by Next.js creators
- ⚡ Instant deployments
- 🌍 Global CDN
- 🔄 Automatic HTTPS
- 📊 Built-in analytics
- 🆓 Free tier available

### Steps:

#### A. Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Deploy to Production**
```bash
vercel --prod
```

#### B. Using Vercel Dashboard (Easier)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to Vercel**
- Visit [vercel.com](https://vercel.com)
- Sign up/Login with GitHub
- Click "New Project"
- Import your repository
- Configure:
  - Framework Preset: Next.js (auto-detected)
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Click "Deploy"

3. **Your site is live! 🎉**
- Get your URL: `your-project.vercel.app`
- Automatic deployments on every push

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `sameerbasha.dev`)
3. Configure DNS:
   - **If using Vercel nameservers:**
     - Copy provided nameservers
     - Update at your domain registrar
   
   - **If using custom DNS:**
     - Add A record: `76.76.21.21`
     - Add CNAME: `cname.vercel-dns.com`

4. Wait for DNS propagation (up to 48 hours)

---

## 2️⃣ Netlify Deployment

Great alternative with excellent features.

### Steps:

#### A. Using Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

#### B. Using Netlify Dashboard

1. **Push to GitHub** (same as Vercel)

2. **Go to Netlify**
- Visit [netlify.com](https://netlify.com)
- Sign up/Login
- Click "Add new site" → "Import an existing project"
- Connect to GitHub
- Select your repository
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Click "Deploy site"

### Custom Domain on Netlify

1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter your domain
4. Configure DNS at your registrar:
   - Add A record: `75.2.60.5`
   - Or CNAME: `your-site.netlify.app`

---

## 3️⃣ GitHub Pages

Free hosting directly from your GitHub repository.

### Limitations:
- Static export only (some Next.js features limited)
- No server-side rendering
- Manual deployment process

### Steps:

1. **Update `next.config.mjs`**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
```

2. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

3. **Update `package.json`**
```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out"
  }
}
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
- Go to repository Settings
- Scroll to Pages section
- Source: Deploy from branch
- Branch: `gh-pages` → `/root`
- Save

6. **Access your site**
- `https://username.github.io/repository-name`

### Custom Domain on GitHub Pages

1. Add `CNAME` file in `public` folder:
```
yourdomain.com
```

2. Configure DNS:
   - Add A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or CNAME: `username.github.io`

---

## 4️⃣ Railway

Modern hosting platform with great developer experience.

### Steps:

1. **Visit [railway.app](https://railway.app)**
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway auto-detects Next.js
7. Click "Deploy"

### Environment Variables
- Add in Railway dashboard under Variables tab
- Automatic redeployment on changes

---

## 5️⃣ Render

Free tier with automatic deployments.

### Steps:

1. **Visit [render.com](https://render.com)**
2. Sign up
3. Click "New" → "Web Service"
4. Connect GitHub repository
5. Configure:
   - Name: Your project name
   - Environment: Node
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. Click "Create Web Service"

---

## 6️⃣ AWS Amplify

Enterprise-grade hosting by Amazon.

### Steps:

1. **Install AWS Amplify CLI**
```bash
npm install -g @aws-amplify/cli
```

2. **Configure Amplify**
```bash
amplify configure
```

3. **Initialize**
```bash
amplify init
```

4. **Add hosting**
```bash
amplify add hosting
```

5. **Deploy**
```bash
amplify publish
```

---

## 7️⃣ DigitalOcean App Platform

### Steps:

1. Visit [digitalocean.com](https://digitalocean.com/products/app-platform)
2. Create account
3. Click "Create App"
4. Connect GitHub
5. Select repository
6. Configure build settings
7. Deploy

---

## 🌐 Domain Configuration

### Popular Domain Registrars:
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://cloudflare.com)

### DNS Configuration Steps:

1. **Purchase domain** from registrar
2. **Access DNS settings** in registrar dashboard
3. **Add records** based on hosting provider:

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

4. **Wait for propagation** (15 mins - 48 hours)
5. **Verify** using [whatsmydns.net](https://whatsmydns.net)

---

## 🔒 SSL/HTTPS

All recommended platforms provide automatic HTTPS:
- ✅ Vercel - Automatic
- ✅ Netlify - Automatic
- ✅ GitHub Pages - Automatic
- ✅ Railway - Automatic
- ✅ Render - Automatic

No configuration needed!

---

## 📊 Post-Deployment

### 1. Add Analytics

**Google Analytics:**
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:
```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_ID`}
  strategy="afterInteractive"
/>
```

### 2. Submit to Search Engines

**Google Search Console:**
1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property
3. Verify ownership
4. Submit sitemap

**Bing Webmaster Tools:**
1. Visit [bing.com/webmasters](https://bing.com/webmasters)
2. Add site
3. Verify
4. Submit sitemap

### 3. Performance Testing

Run these tests:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

### 4. SEO Checklist

- [ ] Add `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check meta tags
- [ ] Verify Open Graph tags
- [ ] Test social media previews

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Use `unoptimized: true` in next.config.mjs
- Or use absolute URLs for external images

### Environment Variables
- Add in hosting platform dashboard
- Prefix with `NEXT_PUBLIC_` for client-side access

### Domain Not Working
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Wait up to 48 hours
- Verify DNS records are correct
- Check HTTPS enforcement

---

## 📞 Support

Need help with deployment?
- 📧 Email: sameershaik16481@gmail.com
- 💼 LinkedIn: [Shaik Sameer Basha](https://linkedin.com/in/sameer-basha-shaik-112965255)
- 🐙 GitHub: [@sameershaik16481](https://github.com/sameershaik16481)

---

**Happy Deploying! 🚀**

