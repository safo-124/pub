// components/order/OrderSummary.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
};

export function OrderSummary() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === 'delivery' ? 10 : 0;
  const total = subtotal + deliveryFee;

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Order</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="border-b border-gray-100 pb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  {item.specialInstructions && (
                    <p className="text-sm text-gray-500 mt-1">
                      Note: {item.specialInstructions}
                    </p>
                  )}
                </div>
                <p className="font-medium">₵{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center mt-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  +
                </button>
                <button 
                  onClick={() => updateQuantity(item.id, 0)}
                  className="ml-auto text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>₵{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Delivery Fee:</span>
          <span>₵{deliveryFee.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₵{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setDeliveryOption('delivery')}
            className={`flex-1 py-2 rounded-lg ${deliveryOption === 'delivery' ? 'bg-orange-600 text-white' : 'bg-gray-100'}`}
          >
            Delivery
          </button>
          <button
            onClick={() => setDeliveryOption('pickup')}
            className={`flex-1 py-2 rounded-lg ${deliveryOption === 'pickup' ? 'bg-orange-600 text-white' : 'bg-gray-100'}`}
          >
            Pickup
          </button>
        </div>

        {deliveryOption === 'delivery' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your address"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={3}
            placeholder="Any special requests?"
          />
        </div>

        <Button className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg">
          {deliveryOption === 'delivery' ? 'Place Delivery Order' : 'Place Pickup Order'}
        </Button>
      </div>
    </div>
  );
}