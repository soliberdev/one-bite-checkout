import { useSelectedProducts } from '../hooks/useSelectedProducts'
import { useMemo } from 'react';
import type { product, totalProducts } from "../types/product";

const ProductItem = () => {
    const {selectedProducts, addProduct, deleteProduct, deleteOneProduct} = useSelectedProducts();

    const groupedProducts: totalProducts[] = useMemo(() => {
    return selectedProducts.reduce((accumulator: totalProducts[], product: product) => {
      const existingProduct = accumulator.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += product.price;
      } else {
        accumulator.push({
          ...product,
          quantity: 1,
          totalPrice: product.price
        });
      }
      return accumulator;
    }, []);
  }, [selectedProducts]);

    return (
        <>
          <div className="sm:grid bg-primary-800 grid-cols-[2fr_1.5fr_1fr_0.5fr] items-center gap-4 py-4 px-6 mb-2 rounded-2xl text-white font-semibold shadow-lg">
            <span className="border-r-0 sm:border-r-1 text-start">Order Summary</span>
            <span className="border-r-1 hidden sm:inline-block text-center">Quantity</span>
            <span className="hidden sm:inline-block text-center">Price</span>
            <span>&nbsp;</span>
          </div>
        {
          groupedProducts.map((product) => (
            <div key={product.id} className="grid grid-cols-[2fr_0.5fr] sm:grid-cols-[2fr_1.5fr_1fr_0.5fr] gap-1 sm:gap-3 py-4 px-6 rounded-2xl mt-4 transition-all ease-in-out duration-350 bg-secondary-100 text-primary-800"
            >
              <div className="flex flex-col md:text-start order-1">
                <span className='font-semibold my-auto text-start'>{product.name}</span>
              </div>

              <div className="flex justify-center items-center py-2 sm:py-0 order-3 sm:order-2 col-span-2 sm:col-span-1">
                <button
                  className="cursor-pointer px-[10px] rounded-md transition-all duration-200 ease-in-out hover:bg-primary-800 hover:text-white text-2xl border-1 border-primary-800"
                  onClick={() => deleteOneProduct(product)}
                >-</button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  className="cursor-pointer px-[8px] rounded-md transition-all duration-200 ease-in-out hover:bg-primary-800 hover:text-white text-2xl border-1 border-primary-800"
                  onClick={() => addProduct(product)}
                >+</button>
              </div>

              <div className="py-2 sm:py-0 flex flex-col items-center justify-center order-4 sm:order-3 col-span-2 sm:col-span-1">
                <hr className="w-full border-t border-gray-300 mb-3 sm:hidden" />
                <span>${product.totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-end items-center py-2 sm:py-0 order-2 sm:order-4">
                <button aria-label="Delete product" className="mx-auto cursor-pointer transition-all duration-100 ease-in-out text-orange-600 hover:transform hover:rotate-12" onClick={() => deleteProduct(product) }>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button> 
              </div>
            </div>
          ))
        }

        </>
    )
}

export default ProductItem;