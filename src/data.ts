import cardIcon from '../src/assets/pages/service/card_icon.png';
import chatIcon from '../src/assets/pages/service/chat_icon.png';
import greenIcon from '../src/assets/pages/service/green_Icon.png';
import orangeIcon from '../src/assets/pages/service/orange_icon.png';
import pinkIcon from '../src/assets/pages/service/pink_icon.png';
import yellowIcon from '../src/assets/pages/service/yellow_icon.png';

export type Feature = { title: string; description: string };
export type Reason = Feature;
export type Faq = { question: string; answer: string };
export type ServiceTile = { title: string; badge: string; description: string; icon: string };

export const expertiseCards: Feature[] = [
  {
    title: 'Cross-platform Development',
    description:
      'Whether it is iOS, Android, or hybrid apps, our skilled developers are proficient in creating applications that deliver seamless performance across all platforms.',
  },
  {
    title: 'Custom Solutions',
    description:
      'We believe in personalized approaches. Our team works closely with you to understand your vision, ensuring that the final product aligns perfectly with your business goals.',
  },
];

export const processSteps: Feature[] = [
  {
    title: 'Analysis & Idea',
    description:
      'We begin by thoroughly understanding your requirements and objectives, then innovate ideas to align with your business objectives.',
  },
  {
    title: 'Design Process',
    description:
      'Our design team transforms ideas into intuitive, user-centered designs, prioritizing usability and aesthetics to deliver an engaging user experience.',
  },
  {
    title: 'Ready Project',
    description:
      'Once development is complete, we rigorously test the app across various devices to ensure high standards of quality before delivering the final product.',
  },
];

export const reasons: Reason[] = [
  {
    title: 'Cross-Platform Experts',
    description: 'From iOS to Android to cross-platform builds, we choose the right stack for every experience.',
  },
  {
    title: 'Customized Solutions',
    description: 'We tailor-make each solution to fit your vision and business goals.',
  },
  {
    title: 'User-Centric Design',
    description: 'We prioritize user experience with intuitive navigation and seamless interfaces.',
  },
  {
    title: 'Scalability',
    description: 'Solutions scale with you without compromising speed or quality.',
  },
  {
    title: 'Agile Methodology',
    description: 'Agile at our core—transparent, collaborative, and iterative from sprint to finish.',
  },
  {
    title: 'Post-Launch Support',
    description: 'Beyond launch—we keep you online, updated, and running smoothly.',
  },
];

export const faqList: Faq[] = [
  {
    question: 'How long does it take to develop a web application?',
    answer:
      'Timelines for developing a web application depend on the project complexity and scope. Generally, a basic web application can take 8 to 12 months, including planning, design, development, testing, and deployment phases.',
  },
  {
    question: 'What technologies do you use for Backend Development?',
    answer:
      'We choose tech stacks based on performance, integrations, and maintainability—commonly React Native or Flutter for mobile, Node.js/Express/NestJS for backend, and modern CI/CD for delivery.',
  },
  {
    question: 'Can you integrate Third Party services?',
    answer:
      'Yes. We routinely integrate payments, analytics, CRM/marketing suites, authentication, storage/CDNs, and custom APIs with secure best practices.',
  },
  {
    question: 'What kind of support do you provide post-launch?',
    answer:
      'We offer production monitoring, bug fixes, performance optimization, minor enhancements, and roadmap planning to keep your product healthy.',
  },
];

export const serviceTiles: ServiceTile[] = [
  {
    badge: 'Mobile Application',
    title: 'Mobile Application',
    description: 'Native, hybrid, or cross-platform. We make them fast, functional, and user-friendly.',
    icon: greenIcon,
  },
  {
    badge: 'Web Application',
    title: 'Web Application',
    description: 'Scalable web apps with performance-first architecture.',
    icon: orangeIcon,
  },
  {
    badge: 'Backend Services',
    title: 'Backend Services',
    description: 'Scalable web apps with performance-first architecture.',
    icon: yellowIcon,
  },
  {
    badge: 'Digital Marketing',
    title: 'Digital Marketing',
    description: 'SEO, PPC, funnels—we don’t just build apps, we help you grow.',
    icon: pinkIcon,
  },
];

export const icons = {
  cardIcon,
  chatIcon,
};
