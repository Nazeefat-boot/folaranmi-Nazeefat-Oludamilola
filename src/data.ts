export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
  category: 'Front-End' | 'WordPress' | 'Graphics Design';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'Technical' | 'Tools' | 'Soft Skills';
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Real Estate Platform',
    description: 'A high-performance property listing site built with React and Tailwind. Features advanced filtering and responsive masonry grid layout.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'Front-End'
  },
  {
    id: '2',
    title: 'Artisan Coffee Shop',
    description: 'Custom WordPress theme developed for a local bakery and coffee shop. Integrated with WooCommerce and custom Elementor widgets.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'WordPress'
  },
  {
    id: '3',
    title: 'Brand Identity & Visuals',
    description: 'A comprehensive branding project created with Canva, including social media kits, presentation templates, and marketing materials.',
    tags: ['Canva', 'Graphic Design', 'Branding'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'Graphics Design'
  },
  {
    id: '4',
    title: 'Educational Learning Portal',
    description: 'Learning management system dashboard with progress tracking and interactive course modules.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'A11y'],
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'Front-End'
  },
  {
    id: '5',
    title: 'Social Media Marketing Kit',
    description: 'A complete set of social media assets including Instagram posts, stories, and LinkedIn banners designed for a tech startup.',
    tags: ['Canva', 'Branding', 'Social Media'],
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'Graphics Design'
  },
  {
    id: '6',
    title: 'Corporate Financial Advisor',
    description: 'Professional WordPress website for a consultancy firm. High focus on performance, SEO, and lead generation.',
    tags: ['WordPress', 'Elementor', 'SEO', 'Marketing'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554774853-a3d593281e3c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c7377ec486b6?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'WordPress'
  },
  {
    id: '7',
    title: 'Travel Destination Explorer',
    description: 'Interactive web app for discovering travel destinations, featuring smooth transitions and high-quality image galleries.',
    tags: ['React', 'Framer Motion', 'API Integration'],
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    ],
    link: '#',
    category: 'Front-End'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Front-End Engineering',
    description: 'Building responsive, accessible, and performant web applications using modern frameworks like React and Tailwind CSS.',
    icon: 'Code'
  },
  {
    id: '2',
    title: 'WordPress Development',
    description: 'Custom themes and plugins tailored to your business needs, ensuring speed, SEO optimization, and easy management.',
    icon: 'Layout'
  },
  {
    id: '3',
    title: 'Graphics Design',
    description: 'Creating stunning visual assets, social media graphics, and brand materials using Canva and professional design principles.',
    icon: 'Palette'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'Technical' },
  { name: 'CSS3/Tailwind', category: 'Technical' },
  { name: 'JavaScript', category: 'Technical' },
  { name: 'React', category: 'Technical' },
  { name: 'TypeScript', category: 'Technical' },
  { name: 'WordPress', category: 'Technical' },
  { name: 'Elementor', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Canva', category: 'Tools' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'Responsive Design', category: 'Soft Skills' },
  { name: 'Graphics Design', category: 'Soft Skills' },
  { name: 'Problem Solving', category: 'Soft Skills' }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO, Artisan Brew',
    content: 'Nazeefat transformed our online presence. The custom WordPress site she built is not only beautiful but incredibly fast. Our sales increased by 30% within the first month!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Senior Project Manager',
    content: 'A rare talent who understands both design and code. Her attention to detail in the front-end implementation was exemplary. Highly recommended for any complex web project.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  }
];
