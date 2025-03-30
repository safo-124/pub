import { MENU_ITEMS, DRINK_ITEMS } from '@/lib/constants';
import { MenuCategory } from '@/components/menu/MenuCategory';

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-orange-600 mb-12 text-center">Our Menu</h1>
      
      <MenuCategory 
        title="Soups" 
        items={MENU_ITEMS.filter(item => item.category === 'soup')} 
      />
      
      <MenuCategory 
        title="Main Dishes" 
        items={MENU_ITEMS.filter(item => item.category === 'main')} 
        className="mt-12"
      />
      
      <MenuCategory 
        title="Drinks" 
        items={DRINK_ITEMS} 
        className="mt-12"
      />
    </div>
  );
}