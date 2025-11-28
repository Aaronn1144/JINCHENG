
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs?: string[];
  details?: ProductDetails;
}

export interface SubCategory {
  id: string;
  title: string;
  products: Product[];
  isEmpty?: boolean;
}

export interface MainCategory {
  id: string;
  title: string;
  subCategories?: SubCategory[];
  type: 'catalog' | 'service' | 'info';
}

// New types for detailed product view
export interface SpecItem {
  label: string;
  value: string;
}

export interface ProductSection {
  title: string;
  description?: string;
  specs?: SpecItem[];
  image?: string;
}

export interface ProductDetails {
  intro: string;
  features: { title: string; value: string }[];
  sections: ProductSection[];
  video?: string;
  images?: string[];
  pdf?: string; // Add PDF field
}
