// app/order/page.tsx
import { MenuCategory } from '@/components/menu/MenuCategory';
import { OrderSummary } from '@/components/order/OrderSummary';
import { MENU_ITEMS, DRINK_ITEMS } from '@/lib/constants';

export default function OrderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-2 text-center">Place Your Order</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Enjoy our delicious meals from the comfort of your home
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Menu</h2>
              
              <MenuCategory 
                title="Soups" 
                items={MENU_ITEMS.filter(item => item.category === 'soup')} 
              />
              
              <MenuCategory 
                title="Main Dishes" 
                items={MENU_ITEMS.filter(item => item.category === 'main')} 
                className="mt-8"
              />
              
              <MenuCategory 
                title="Drinks" 
                items={DRINK_ITEMS} 
                className="mt-8"
              />
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}