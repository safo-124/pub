// lib/types.ts

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'soup' | 'main' | 'drink';
    image?: string;
  };
  
  export type TeamMember = {
    id: string;
    name: string;
    position: string;
    bio: string;
    image: string;
  };
  
  export type BookingDetails = {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    guests: number;
    specialRequests: string;
  };
  
  export type OrderDetails = {
    id: string;
    items: {
      menuItemId: string;
      quantity: number;
      specialInstructions?: string;
    }[];
    customerInfo: {
      name: string;
      email: string;
      phone: string;
      deliveryAddress?: string;
    };
    paymentMethod: 'cash' | 'card' | 'mobile';
  };
  
  export type Event = {
    id: string;
    title: string;
    description: string;
    date: Date;
    time: string;
    image: string;
    location: string;
  };
  
  export type NavLink = {
    name: string;
    href: string;
  };