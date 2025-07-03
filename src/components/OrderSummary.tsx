import { useSelectedProducts } from "../hooks/useSelectedProducts";
import ProductsOrdered from "./ProductsOrdered";
import Tip from "./Tip";
import TotalPrice from "./TotalPrice";
import SaveButton from './SaveButton'
import styles from './OrderSummary/OrderSummary.module.css'

const OrderSummary = () => {

  const {selectedProducts} = useSelectedProducts();

  return (
    <div className="bg-neutral relative rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[2rem]">
      <div className={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
          </svg>
        <span className="font-semibold text-xl">Checkout</span>
      </div>
      {selectedProducts && selectedProducts.length > 0 ? (
        <div className=" flex flex-col md:px-12 pb-14 px-6">
          <ProductsOrdered />
          <Tip />
          <TotalPrice />
          <SaveButton />
        </div>
      ) : (
        <div className="flex flex-col items-center border-1 border-gray-300 border-dashed md:px-12 mx-6 mb-12 px-3 rounded-2xl py-20 text-gray-300">
          <svg  xmlns="http://www.w3.org/2000/svg" className="size-26"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" />
          </svg>
          <h3 className="mt-2 text-2xl font-semibold">No products selected</h3>
        </div>
      )}
    </div>
  );
};


export default OrderSummary;