import { Question } from "./types";

export const QUESTIONS: Record<string, Question> = {
  SERVICE: {
    id: "SERVICE",
    text: "👋 Hi! I’m Lexi.\nWhat are you looking to build today?",
    field: "service",
    options: [
      { label: "🌐 Website", value: "Website", next: "WEBSITE_TYPE" },
      { label: "📱 Mobile App", value: "Mobile App", next: "APP_TYPE" },
      { label: "🤖 AI / Automation", value: "AI / Automation", next: "AI_TYPE" },
      { label: "➕ Other services", value: "Other Services", next: "OTHER_SERVICES" },
    ],
  },
  OTHER_SERVICES: {
    id: "OTHER_SERVICES",
    text: "Sure 🙂 What kind of service do you need?",
    field: "service",
    options: [
      { label: "🎨 UI / UX Design", value: "UI/UX Design", next: "DESIGN_TYPE" },
      { label: "📣 Digital Marketing", value: "Digital Marketing", next: "MARKETING_TYPE" },
      { label: "☁️ DevOps & Cloud", value: "DevOps & Cloud", next: "DEVOPS_TYPE" },
      { label: "💬 Consultation", value: "Consultation", next: "CONTACT" },
    ],
  },

  WEBSITE_TYPE: {
    id: "WEBSITE_TYPE",
    text: "🌐 What type of website do you need?",
    field: "service",
    options: [
      { label: "Business Website", value: "Business Website", next: "BUDGET" },
      { label: "E-commerce Website", value: "E-commerce Website", next: "BUDGET" },
      { label: "Landing Page", value: "Landing Page", next: "BUDGET" },
      { label: "Portfolio / Personal", value: "Portfolio Website", next: "BUDGET" },
      { label: "Not sure", value: "Website (Not sure)", next: "BUDGET" },
    ],
  },
  APP_TYPE: {
    id: "APP_TYPE",
    text: "📱 Which type of app do you want?",
    field: "service",
    options: [
      { label: "Android App", value: "Android App", next: "APP_FEATURES" },
      { label: "iOS App", value: "iOS App", next: "APP_FEATURES" },
      { label: "Both (Android & iOS)", value: "Android & iOS App", next: "APP_FEATURES" },
    ],
  },

  APP_FEATURES: {
    id: "APP_FEATURES",
    text: "🧩 What kind of app is this?",
    field: "service",
    options: [
      { label: "Startup / MVP", value: "Startup MVP App", next: "BUDGET" },
      { label: "E-commerce App", value: "E-commerce App", next: "BUDGET" },
      { label: "Booking / Service App", value: "Service Booking App", next: "BUDGET" },
      { label: "Internal / Enterprise App", value: "Enterprise App", next: "BUDGET" },
    ],
  },
  DESIGN_TYPE: {
    id: "DESIGN_TYPE",
    text: "🎨 What kind of design service do you need?",
    field: "service",
    options: [
      { label: "Website UI Design", value: "Website UI Design", next: "DESIGN_SCOPE" },
      { label: "Mobile App UI Design", value: "App UI Design", next: "DESIGN_SCOPE" },
      { label: "UX Research", value: "UX Research", next: "DESIGN_SCOPE" },
      { label: "Branding & Identity", value: "Branding & Identity", next: "DESIGN_SCOPE" },
    ],
  },

  DESIGN_SCOPE: {
    id: "DESIGN_SCOPE",
    text: "📐 What’s the scope of design work?",
    field: "service",
    options: [
      { label: "New design from scratch", value: "New Design", next: "BUDGET" },
      { label: "Redesign existing product", value: "Redesign", next: "BUDGET" },
      { label: "Design system / components", value: "Design System", next: "BUDGET" },
    ],
  },
  MARKETING_TYPE: {
    id: "MARKETING_TYPE",
    text: "📣 Which digital marketing service are you interested in?",
    field: "service",
    options: [
      { label: "SEO (Google Ranking)", value: "SEO", next: "MARKETING_GOAL" },
      { label: "Social Media Marketing", value: "Social Media Marketing", next: "MARKETING_GOAL" },
      { label: "Google / Meta Ads", value: "Paid Ads", next: "MARKETING_GOAL" },
      { label: "Content Marketing", value: "Content Marketing", next: "MARKETING_GOAL" },
    ],
  },

  MARKETING_GOAL: {
    id: "MARKETING_GOAL",
    text: "🎯 What’s your main marketing goal?",
    field: "service",
    options: [
      { label: "Generate leads", value: "Lead Generation", next: "BUDGET" },
      { label: "Increase traffic", value: "Traffic Growth", next: "BUDGET" },
      { label: "Brand awareness", value: "Brand Awareness", next: "BUDGET" },
      { label: "Not sure", value: "Marketing (Not sure)", next: "BUDGET" },
    ],
  },
  DEVOPS_TYPE: {
    id: "DEVOPS_TYPE",
    text: "☁️ What kind of DevOps / Cloud help do you need?",
    field: "service",
    options: [
      { label: "Cloud Setup (AWS / GCP / Azure)", value: "Cloud Setup", next: "DEVOPS_SCOPE" },
      { label: "CI/CD Pipeline", value: "CI/CD Pipeline", next: "DEVOPS_SCOPE" },
      { label: "Server Management", value: "Server Management", next: "DEVOPS_SCOPE" },
      { label: "Monitoring & Security", value: "Monitoring & Security", next: "DEVOPS_SCOPE" },
    ],
  },

  DEVOPS_SCOPE: {
    id: "DEVOPS_SCOPE",
    text: "⚙️ What best describes your requirement?",
    field: "service",
    options: [
      { label: "New setup", value: "New Setup", next: "BUDGET" },
      { label: "Improve existing system", value: "Optimize Existing Setup", next: "BUDGET" },
      { label: "Ongoing support", value: "Ongoing DevOps Support", next: "BUDGET" },
    ],
  },
  AI_TYPE: {
    id: "AI_TYPE",
    text: "🤖 What kind of AI solution are you interested in?",
    field: "service",
    options: [
      { label: "AI Chatbot", value: "AI Chatbot", next: "AI_USE_CASE" },
      { label: "Business Automation", value: "Automation", next: "AI_USE_CASE" },
      { label: "AI Integration (API)", value: "AI Integration", next: "AI_USE_CASE" },
      { label: "Not sure", value: "AI (Not sure)", next: "AI_USE_CASE" },
    ],
  },

  AI_USE_CASE: {
    id: "AI_USE_CASE",
    text: "🧠 Where do you want to use AI?",
    field: "service",
    options: [
      { label: "Website / App", value: "AI for Website/App", next: "BUDGET" },
      { label: "Internal business process", value: "AI for Business Process", next: "BUDGET" },
      { label: "Customer support", value: "AI Customer Support", next: "BUDGET" },
    ],
  },
  BUDGET: {
    id: "BUDGET",
    text: "✨ What’s your estimated budget?",
    field: "budget",
    options: [
      { label: "₹25k – ₹50k", value: "25k-50k", next: "TIMELINE" },
      { label: "₹50k – ₹1L", value: "50k-1L", next: "TIMELINE" },
      { label: "₹1L+", value: "1L+", next: "TIMELINE" },
      { label: "Not sure", value: "Not sure", next: "TIMELINE" },
    ],
  },

  TIMELINE: {
    id: "TIMELINE",
    text: "⏳ When would you like to start?",
    field: "timeline",
    options: [
      { label: "Immediately", value: "Immediate", next: "CONTACT" },
      { label: "Within 1 month", value: "1 Month", next: "CONTACT" },
      { label: "Just exploring", value: "Exploring", next: "CONTACT" },
    ],
  },
  CONTACT: {
    id: "CONTACT",
    text: "📩 Please share your email or phone number.",
    field: "contact",
  },

  
  ASK_EMAIL: {
    id: "ASK_EMAIL",
    text: "Great! Would you like to share your email as well? (optional)",
    field: "email",
    options: [{ label: "Skip", value: "Skip", next: "FINAL" }],
  },
  
  ASK_PHONE: {
    id: "ASK_PHONE",
    text: "Great! Would you like to share your phone number as well? (optional)",
    field: "phone",
    options: [{ label: "Skip", value: "Skip", next: "FINAL" }],
  },

  FINAL: {
    id: "FINAL",
    text: "Thanks! Our team will contact you shortly 🙌",
  },


};
