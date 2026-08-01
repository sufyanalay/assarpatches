# Assar Patches

A modern, premium and fully responsive B2B website for **Assar Patches** — a custom patch manufacturing company specializing in high-quality PVC, embroidered, woven, sublimation and leather patches for brands, importers, wholesalers and distributors worldwide.

The platform combines a premium customer-facing website with dynamic content management, allowing patch categories and other business content to be managed efficiently while maintaining a polished brand experience.

---

## About Assar Patches

**Assar Patches** provides custom patch manufacturing solutions for international brands and B2B buyers.

The website is designed to showcase manufacturing capabilities, product categories, craftsmanship and business credibility while providing potential customers with a simple way to explore products and request quotations.

### Core Manufacturing Categories

- PVC Patches
- Embroidered Patches
- Woven Patches
- Sublimation Patches
- Leather Patches
- Custom OEM Production
- Bulk Manufacturing

---

## Key Features

### Premium Responsive Website

The frontend has been designed with a premium B2B manufacturing aesthetic and is fully responsive across desktop, tablet and mobile devices.

### Dynamic Patch Categories

Patch categories are dynamically retrieved from the database rather than being permanently hard-coded into the interface.

Each category can have its own:

- Title
- Slug
- Images
- Product information
- Tagline / description
- Gallery content

### Dynamic Navigation

The navigation automatically displays available patch categories retrieved from the database.

It includes:

- Responsive desktop navigation
- Dynamic Patches dropdown
- Mobile hamburger navigation
- Expandable mobile category menu
- Scroll-aware navbar styling
- Transparent navbar over the homepage hero
- Sticky navigation experience

### Premium Hero Experience

The homepage includes an immersive hero section featuring:

- Full-screen background media
- Premium overlays
- Strong manufacturing-focused messaging
- Primary CTA buttons
- Business statistics
- Scroll indicator
- Entrance animations

### Patch Collection Showcase

Customers can quickly explore the available patch categories through premium product-style cards.

Each card provides:

- Category imagery
- Category title
- Short description
- Premium visual treatment
- Direct category navigation
- Hover interactions and animations

### Manufacturing Expertise

A dedicated manufacturing section highlights Assar Patches' core capabilities:

- OEM Production
- Quality Control
- Bulk Manufacturing
- Global Supply
- Export Quality
- On-Time Delivery

The section uses video-backed presentation and premium visual styling to communicate manufacturing capability.

### About / Company Section

The company introduction section communicates Assar Patches' experience, manufacturing standards and international B2B positioning.

It includes:

- Dynamic rotating imagery
- Manufacturing information
- Business highlights
- Global partnership statistics
- Interactive entrance animations
- Call-to-action navigation

### Manufacturing Process

The website clearly presents the complete production workflow:

1. Share Your Design
2. Sample Approval
3. Bulk Manufacturing
4. Quality Check
5. Export & Delivery

This helps international buyers understand the complete order process before requesting a quotation.

### Why Choose Assar Patches

The website highlights major competitive advantages including:

- Premium Quality
- Customized Production
- Bulk Manufacturing
- Competitive Pricing
- Export-focused production
- Global B2B support

### FAQ Section

An interactive FAQ experience answers common customer questions regarding:

- Minimum order quantities
- Samples
- Brand color matching
- International shipping
- Production timelines
- Artwork requirements

### Quote Request System

Customers can submit quotation requests directly through the website.

The contact form collects:

- Customer name
- Email address
- Phone number
- Project requirements / message

Submission states including loading, success and error feedback are handled directly in the interface.

### Business Contact Integration

Customers can contact Assar Patches through:

- Email
- Phone
- WhatsApp
- Contact form
- Physical location

Google Maps integration is also included for the manufacturing/business location.

### Blog

The website includes a dedicated blog area for publishing industry-related and company content.

### Premium Animations

Scroll-based reveal animations are used throughout the website.

Different interface elements can enter from:

- Left
- Right
- Top
- Bottom

Additional interactions include:

- Staggered animations
- Hover transitions
- Image scaling
- Animated icons
- CTA interactions
- Navigation transitions

---

## Tech Stack

### Frontend

- Next.js
- React
- JavaScript
- Tailwind CSS
- React Icons
- Iconify

### Backend

- Next.js Server Components
- Next.js API Routes
- MongoDB
- Mongoose

### Database

MongoDB is used for storing and managing dynamic website content such as patch categories and related information.

---

## Project Structure

```text
src/
├── app/
│   ├── admin/
│   ├── api/
│   ├── blogs/
│   ├── patches/
│   ├── page.js
│   └── layout.js
│
├── components/
│   ├── Navbar.jsx
│   ├── NavbarWrapper.jsx
│   ├── NavLinks.jsx
│   ├── Hero.jsx
│   ├── HeroSlider.jsx
│   ├── About.jsx
│   ├── AccordionGallery.jsx
│   ├── Features.jsx
│   ├── WhyChooseUs.jsx
│   ├── ProcessSteps.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Reveal.jsx
│   └── RotatingImage.jsx
│
├── lib/
│   └── db.js
│
└── models/
    └── Section.js
