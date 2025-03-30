export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    ingredients?: string[];
    category: 'food' | 'drink' | 'beer';
  }
  
  export const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Jollof Rice',
      description: 'Spicy tomato-based rice with chicken and plantains',
      price: 25.99,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
      ingredients: ['Rice', 'Tomatoes', 'Chicken', 'Spices'],
      category: 'food'
    },
    {
      id: '2',
      name: 'Grilled Tilapia',
      description: 'Fresh tilapia grilled with spices and served with banku',
      price: 32.50,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
      ingredients: ['Tilapia', 'Pepper', 'Onions', 'Banku'],
      category: 'food'
    },
    {
      id: '3',
      name: 'Palmnut Soup',
      description: 'Rich palmnut soup with goat meat and fufu',
      price: 28.75,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
      ingredients: ['Palmnut', 'Goat Meat', 'Fish', 'Fufu'],
      category: 'food'
    },
    {
      id: '4',
      name: 'Club Beer',
      description: 'Ghana\'s premium lager beer, crisp and refreshing',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e',
      category: 'beer'
    },
    {
      id: '5',
      name: 'Pina Colada',
      description: 'Tropical blend of pineapple, coconut and rum',
      price: 12.50,
      image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c',
      category: 'drink'
    },
    {
      id: '6',
      name: 'Ginger Beer',
      description: 'Spicy non-alcoholic ginger beverage',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd5bba40',
      category: 'drink'
    }
  ];