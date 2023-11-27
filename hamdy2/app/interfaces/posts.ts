export interface Posts {
  id: number;
  business_id: number;
  images: string[];
  video: string;
  content: string;
  status: string;
  type: string;
  dates: null;
  italic: boolean;
  bold: boolean;
  websites: Website[];
  integrations: any[];
  title: string;
  expire_at: null;
  created_at: string;
  updated_at: string;
  business: Business;
  postTime: string;
}

export interface Website {
  website_name: string;
  website_value: boolean;
}

export interface Business {
  name: string;
  logo: string;
}
