import { ComponentType } from 'react';

export interface Project {
  title: string;
  kind: string;
  blurb: string;
  stack: string[];
  overview: string;
  components: string[];
  features: string[];
  visual: string;
  image: string;
  url?: string;
}

export interface ServiceItem {
  title: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  description: string;
  skills: string[];
}

export interface Review {
  name: string;
  role: string;
  project: string;
  quote: string;
}
