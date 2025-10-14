# Yashoda Edge Consulting Website

A modern, responsive website for Yashoda Edge Consulting - delivering innovative workforce solutions through permanent hiring, contract staffing, and specialized recruitment services.

## 🚀 Features

### ✅ Implemented (Phase 1)
- **Responsive Navigation** - Sticky navbar with mobile hamburger menu
- **Hero Section** - Compelling headline with gradient background and CTAs
- **Services Section** - 4 service cards with hover effects and icons
- **Industries Section** - 12+ industry sectors with modern iconography
- **WhatsApp Integration** - Floating button with direct messaging
- **Mobile Responsive** - Optimized for all device sizes
- **Modern Design** - Clean aesthetics with smooth animations

### 🔨 Coming Next (Phase 2-4)
- Contact form with validation
- Statistics counter section
- Client testimonials carousel
- Why Choose Us section
- Footer with company details
- Advanced animations and micro-interactions
- Performance optimizations

## 🛠️ Tech Stack

- **React 18+** - Modern React with hooks
- **CSS3** - Custom properties and modern layouts
- **Lucide React** - Beautiful, consistent icons
- **Google Fonts** - Inter & Manrope typography
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px  
- Desktop: > 991px
- Large Desktop: > 1440px

## 🎨 Design System

### Colors
- Primary Dark: `#061c01`
- Primary Green: `#4CAF50`
- Accent Gold: `#FFB700`
- Text Light: `beige`
- White: `#ffffff`

### Typography
- Headings: Manrope (600-800 weight)
- Body: Inter (400-600 weight)

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── LandingPage.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Industries.jsx
│   └── WhatsAppButton.jsx
├── style.css
├── App.jsx
└── index.js
```

## 🎯 MVP Goals

- [x] Responsive navigation with mobile menu
- [x] Hero section with compelling CTAs
- [x] Services showcase with hover effects
- [x] Industries grid with modern icons
- [x] WhatsApp integration
- [x] Mobile-responsive design
- [ ] Contact form implementation
- [ ] Footer with company details
- [ ] Performance optimization (target: >90 Lighthouse score)

## 📞 Contact Integration

Update the WhatsApp number in `src/components/WhatsAppButton.jsx`:
```javascript
const phoneNumber = "919876543210"; // Replace with actual number
```

## 🔧 Customization

### Adding New Services
Edit the `services` array in `src/components/Services.jsx`

### Adding New Industries  
Edit the `industries` array in `src/components/Industries.jsx`

### Updating Colors
Modify CSS variables in `src/style.css`:
```css
:root {
  --primary-dark: rgb(6, 28, 1);
  --primary-green: #4CAF50;
  --accent-gold: #FFB700;
}
```

## 📈 Performance Features

- Optimized CSS with custom properties
- Smooth animations with CSS transitions
- Responsive images and icons
- Minimal JavaScript bundle
- Fast loading times

## 🌟 Key Highlights

- **Modern Design** - Clean, professional aesthetic
- **User Experience** - Intuitive navigation and clear CTAs
- **Mobile First** - Optimized for all devices
- **Fast Loading** - Lightweight and optimized
- **Accessible** - Semantic HTML and proper contrast
- **SEO Ready** - Proper meta tags and structure

---

Built with ❤️ for Yashoda Edge Consulting