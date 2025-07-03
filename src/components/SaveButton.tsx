import { useState } from 'react';
import { useSelectedProducts } from '../hooks/useSelectedProducts'
import toast, { Toaster } from 'react-hot-toast'

const SaveButton = () => {
    const {selectedProducts, deleteProduct} = useSelectedProducts();
    const [isActive, setIsActive] = useState<null | boolean>(null);

    const saveOrder = () => toast.success('Order Saved!');

    const activateButton = () => {
        setIsActive(prev => !prev); 

        setTimeout(()=> {
            setIsActive(null);
        }, 250);

        setTimeout(() => {
            restartOrder();
        }, 1500);
    }

    const restartOrder = () => {
        selectedProducts.map((product) => {
            deleteProduct(product);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }

    return (
        <>
        <button 
            onClick={() => {
                saveOrder(); 
                activateButton();
            }}
            className={`items-center py-4 px-6 mt-12 rounded-2xl text-primary-800 border-1 transition-all duration-200 ease-in-out hover:text-white hover:bg-primary-800 font-semibold shadow-lg cursor-pointer ${isActive ? 'bg-primary-800 text-white' : ''}`}>
            Save Order
        </button>
        <Toaster />       
        </>

    )
}

export default SaveButton;