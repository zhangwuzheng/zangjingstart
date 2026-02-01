import React from 'react';

export interface NavItem {
  label: string;
  id: string;
  type?: 'link' | 'action'; // link scrolls, action navigates
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
  specs?: string;
  certificates?: string[]; // URLs to certificate images
  reports?: { title: string; image: string }[];
  detailedFeatures?: { title: string; text: string }[];
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