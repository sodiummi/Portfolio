# Quick Hostinger Upload Guide

## ✅ Your static site is ready!

The `out` folder contains all the files you need to upload to Hostinger.

## Steps to Upload to Hostinger:

### Option 1: Using Hostinger File Manager (Easiest)

1. **Log into Hostinger**
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Log in to your account

2. **Open File Manager**
   - Find your hosting plan
   - Click "File Manager"

3. **Navigate to public_html**
   - Open the `public_html` folder (this is your website root)
   - Delete any existing files if this is a fresh install

4. **Upload your site**
   - Click "Upload Files" button
   - Select ALL files from the `out` folder in your project
   - Wait for upload to complete

5. **Access your site**
   - Your site will be available at your temporary domain
   - Example: `yoursite.hostingersite.com`

---

### Option 2: Using FTP (Recommended for faster uploads)

1. **Get FTP Credentials from Hostinger**
   - In hPanel, go to Files → FTP Accounts
   - Note your:
     - FTP Host (e.g., `ftp.yourdomain.com`)
     - Username
     - Password
     - Port (usually 21)

2. **Download FileZilla** (if you don't have it)
   - [Download FileZilla](https://filezilla-project.org/download.php?type=client)

3. **Connect to Hostinger**
   - Open FileZilla
   - Enter your FTP credentials
   - Click "Quickconnect"

4. **Upload Files**
   - On the left: Navigate to your `out` folder
   - On the right: Navigate to `public_html`
   - Select all files in the `out` folder
   - Drag and drop to `public_html`

5. **Done!**
   - Visit your temporary domain to see your site live

---

## Important Notes:

- ✅ Your site is now **static HTML** - it will work perfectly on Hostinger
- ✅ All pages are pre-rendered for fast loading
- ⚠️ If you make changes, you need to:
  1. Run `npm run build` again
  2. Re-upload the `out` folder

---

## Rebuilding After Changes:

Whenever you update your portfolio:

```bash
npm run build
```

Then re-upload the `out` folder to Hostinger.

---

## Your Temporary Domain:

You can find your temporary domain in:
- Hostinger hPanel → Your hosting plan → Details
- It looks like: `something.hostingersite.com`

---

## Need to Revert to Development Mode?

If you want to continue developing locally, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // Comment out these lines for development:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
};
```

Then run `npm run dev` as usual.
