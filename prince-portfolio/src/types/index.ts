export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  images: {
    col1a: string;
    col1b: string;
    col2: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  category: 'Client' | 'Personal';
  bgColor?: string;
}

export interface Service {
  number: string;
  name: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  detail?: string;
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}
