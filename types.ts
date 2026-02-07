import React from 'react';

export interface NavItem {
  label: string;
  id: string;
  type?: 'link' | 'action' | 'external'; // link scrolls, action navigates, external opens href
  href?: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProductData {
  id: string;
  name: string;
  subName: string;
  description: string;
  narrative: string;
  tags: string[];
  image: string;
  accentColor: string;
  features: string[];
  // New detailed fields
  detailImage?: string; // Larger or different image for detail page
  origin?: string;
  originImage?: string; // Background image for the origin section
  variants?: string[]; // Renamed from specs to variants, now an array for multiple options
  certificates?: string[]; // URLs to certificate images
  reports?: { title: string; image: string }[];
  // Updated interfaces to support images per item
  detailedFeatures?: { title: string; text: string; image?: string }[];
  usageMethods?: { title: string; description: string; image?: string }[];
  // Newly added for "Rich Content"
  detailedSpecs?: { label: string; value: string }[];
  qna?: { question: string; answer: string }[];
  giImages?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  category: string;
  content?: string; // Full content if needed later
}

export interface TravelService {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface TravelRoute {
  id: string;
  name: string;
  description: string;
  stops: string[];
  distance: string;
  duration: string;
  image?: string;
}

export interface CulturalActivity {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  image: string;
  tags: string[];
}