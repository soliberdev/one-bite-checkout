import type { product } from '../types/product.ts';
import { Products } from '../data/menuItems.ts';
import { useSelectedProducts } from '../hooks/useSelectedProducts.ts';
import { useState } from 'react';

const MenuItems = () => {
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const { addProduct } = useSelectedProducts();

  return (
    <div className='flex flex-col gap-5 md:px-12 pb-14 px-6'>
      {Products.map((product: product) => (
        <div
          key={product.id}
          onClick={() => {
            addProduct(product);
            setActiveProductId(product.id);
            setTimeout(() => {
                setActiveProductId(null);
            }, 200);
            }}
          className={`flex justify-between p-4 cursor-pointer border-1 border-primary-800 rounded-2xl transition-all duration-400 ease-in-out hover:scale-101 hover:bg-secondary-100 text-primary-800 ${
            activeProductId === product.id ? 'bg-primary-100' : ''
          }`}
        >
          <span>{product.name}</span>
          <span>${product.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
