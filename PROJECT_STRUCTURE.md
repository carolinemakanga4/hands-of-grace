# Hands of Grace Health Staffing - Project Structure

## 📁 File Structure

```
hands_of_grace/
├── app/
│   ├── layout.tsx                    # Root layout with Navbar, Footer, WhatsApp
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles with teal theme
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── services/
│   │   └── page.tsx                  # Services page
│   ├── for-employers/
│   │   ├── layout.tsx                # SEO metadata for employers page
│   │   └── page.tsx                 # For Employers page (2 forms)
│   ├── for-job-seekers/
│   │   ├── layout.tsx               # SEO metadata for job seekers page
│   │   └── page.tsx                 # For Job Seekers page
│   ├── contact/
│   │   ├── layout.tsx                # SEO metadata for contact page
│   │   └── page.tsx                 # Contact page
│   └── api/
│       ├── employer-request/
│       │   └── route.ts             # Staff Request Form API
│       ├── appointment/
│       │   └── route.ts             # Appointment Booking API
│       ├── job-application/
│       │   └── route.ts             # Job Application API
│       └── contact/
│           └── route.ts              # Contact Form API
├── components/
│   ├── Navbar.tsx                   # Navigation component
│   ├── Footer.tsx                   # Footer component
│   └── WhatsAppButton.tsx           # Floating WhatsApp button
├── package.json
├── tailwind.config.ts               # (Not needed - using Tailwind v4)
└── PROJECT_STRUCTURE.md              # This file
```

## 🎨 Design System

**Colors:**
- Primary Teal: `#2BBBAD`
- Primary Dark: `#26a69a`
- Background: White and `#f5f5f5` (gray-50)
- Text Dark: `#1a1a1a` / `#2c3e50`
- Text Light: `#666666`

**Typography:**
- Font: Geist Sans (via Next.js)
- Headings: Bold, dark gray
- Body: Regular, gray-600

## 📝 Easy Content Editing Guide

### 1. Update Company Information

**Footer & Contact Info:**
- File: `components/Footer.tsx` (lines 20-40)
- File: `app/contact/page.tsx` (lines 40-60)

**WhatsApp Number:**
- File: `components/WhatsAppButton.tsx` (line 5)
- Change: `https://wa.me/1234567890` to your actual number

### 2. Home Page Content

**File:** `app/page.tsx`

- **Hero Section** (lines 10-40): Main headline and CTA buttons
- **Welcome Section** (lines 42-52): Intro text
- **Services Grid** (lines 54-90): 6 service cards with icons
- **Why Choose Us** (lines 92-120): 4 feature cards
- **CTA Section** (lines 122-135): Bottom call-to-action

### 3. About Page Content

**File:** `app/about/page.tsx`

- **Agency Intro** (lines 20-35): Who we are section
- **Mission & Values** (lines 37-70): 4 value cards
- **Our Story** (lines 72-95): Company history
- **Meet the Team** (lines 97-125): 3 team member cards

### 4. Services Page Content

**File:** `app/services/page.tsx`

- **Intro** (lines 20-30): Services introduction
- **Services Grid** (lines 32-80): 6 detailed service cards
- **Our Process** (lines 82-110): 3-step process

### 5. For Employers Page

**File:** `app/for-employers/page.tsx`

- **Features** (lines 30-55): 3 feature cards
- **Staff Request Form** (lines 57-200): First form with all fields
- **Appointment Booking Form** (lines 202-350): Second form (consultation booking)

**API Route:** `app/api/employer-request/route.ts` - Handles staff request submissions
**API Route:** `app/api/appointment/route.ts` - Handles appointment bookings

### 6. For Job Seekers Page

**File:** `app/for-job-seekers/page.tsx`

- **Requirements** (lines 30-60): 3 requirement cards
- **Benefits** (lines 62-90): 3 benefit cards
- **Job Application Form** (lines 92-250): Application form

**API Route:** `app/api/job-application/route.ts` - Handles job applications

### 7. Contact Page

**File:** `app/contact/page.tsx`

- **Contact Info** (lines 30-60): Address, phone, email, hours
- **Contact Form** (lines 62-120): General inquiry form
- **Map** (lines 122-140): Google Maps embed

**API Route:** `app/api/contact/route.ts` - Handles contact form submissions

### 8. Navigation

**File:** `components/Navbar.tsx`

- **Logo Text** (line 15): "Hands of Grace Health Staffing"
- **Navigation Links** (lines 7-13): All page links

### 9. SEO Metadata

Each page has SEO metadata:

- **Home:** `app/page.tsx` (lines 3-6)
- **About:** `app/about/page.tsx` (lines 3-6)
- **Services:** `app/services/page.tsx` (lines 3-6)
- **For Employers:** `app/for-employers/layout.tsx`
- **For Job Seekers:** `app/for-job-seekers/layout.tsx`
- **Contact:** `app/contact/layout.tsx`
- **Root:** `app/layout.tsx` (lines 15-18)

## 🔧 API Routes

All API routes:
1. Validate required fields
2. Validate email format
3. Log data to console (for development)
4. Return `{ success: true }` on success

**To integrate with email/database:**
- Edit each route file in `app/api/*/route.ts`
- Add your email service (e.g., Resend, SendGrid)
- Add database connection (e.g., Prisma, MongoDB)

## 🖼️ Image Placeholders

Currently using:
- Emoji icons (👩‍⚕️, 💉, 🏠, etc.)
- Placeholder divs with gray backgrounds

**To add real images:**
1. Add images to `public/` folder
2. Replace placeholder divs with `<Image>` components
3. Example: `<Image src="/hero-image.jpg" alt="..." width={800} height={600} />`

## 🚀 Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Hamburger menu on mobile
- Stacked layouts on mobile, side-by-side on desktop

## ✨ Key Features Implemented

✅ 6 pages (Home, About, Services, For Employers, For Job Seekers, Contact)
✅ Modern teal/white/grey design
✅ Responsive navigation with mobile menu
✅ Staff Request Form (For Employers)
✅ Appointment Booking Form (For Employers) - **EXTRA FEATURE**
✅ Job Application Form (For Job Seekers)
✅ Contact Form
✅ WhatsApp floating button
✅ SEO metadata on all pages
✅ API routes with validation
✅ Success messages on form submission

## 🎯 Next Steps (Optional Enhancements)

1. **Add Real Images:** Replace placeholders with actual photos
2. **Email Integration:** Connect forms to email service
3. **Database:** Store form submissions
4. **Analytics:** Add Google Analytics
5. **Real WhatsApp Number:** Update placeholder number
6. **Real Map Location:** Update Google Maps embed with actual address

---

**Note:** All form data is currently logged to the console. In production, integrate with your preferred email service and/or database.

