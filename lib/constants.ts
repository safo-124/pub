import { MenuItem, TeamMember } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Groundnut Soup',
    description: 'Rich peanut soup with tender meat',
    price: 25.0,
    category: 'soup',
  },
  {
    id: '2',
    name: 'Palm Nut Soup',
    description: 'Traditional palm nut soup with fish or meat',
    price: 28.0,
    category: 'soup',
  },
  // Add all other menu items...
];

export const DRINK_ITEMS: MenuItem[] = [
  {
    id: '101',
    name: 'Local Beer',
    description: 'Refreshing local brew',
    price: 8.0,
    category: 'drink',
  },
  // Add other drinks...
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. George Kwayixi',
    position: 'CEO',
    bio: 'Founder and visionary leader of Gloryland Good & Pub Joint',
    image: '/images/team/george.jpg',
  },
  // Add other team members...
];
