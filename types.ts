export type Category = 'ソフトウェア・プラットフォーム' | '計画・調査' | '施工' | '点検' | '機械・装置';

export interface Contact {
  address?: string;
  phone?: string;
  fax?: string;
  email?: string;
  inquiryUrl?: string;
  other?: string[];
}

export interface Product {
  id: string;
  category: Category;
  companyName: string;
  productName: string;
  description: string;
  features: string[];
  imageUrl?: string;
  urls: { label: string; url: string }[];
  contact: Contact;
  tags: string[];
}