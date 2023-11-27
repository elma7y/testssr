export interface BussinessData {
  data: {
    id: number;
    name: string;
    description: string;
    email: string;
    phone_number: string;
    category: string;
    state: string;
    web_site: string;
    street: string;
    city_zip: string;
    city1: string;
    city2: string;
    tags: string[];
    images: string[];
    video: string;
    logo: string;
    likes: null;
    expire_at: string;
    websites: {
      website_name: string;
      website_value: boolean;
    }[];
    created_at: string;
    updated_at: string;
    businesses: {
      id: number;
      business_id: number;
      open: boolean;
      day: string;
      start_time: string;
      end_time: string;
      open_24h: boolean;
    }[];
  };
}
