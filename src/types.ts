/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  year: string;
  area: string;
  client: string;
  scope: string[];
  images: string[];
  videoUrl?: string;
  threeDPreview?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  material: string;
  brand: string;
  collection: string;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewsCount: number;
  dimensions: string;
  specifications: string[];
  downloads: string[];
  available: boolean;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
}

export interface MaterialItem {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  color: string;
  origin: string;
  finishes: string[];
  suitability: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  pricing: string;
  process: string[];
}
