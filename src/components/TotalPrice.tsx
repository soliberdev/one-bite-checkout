import { useSelectedProducts } from '../hooks/useSelectedProducts'

const TotalPrice = () => {
    const { tip, selectedProducts } = useSelectedProducts();

    const totalPrice = (): number => {
        const subtotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
        const tipAmount = subtotal * (tip / 100);
        return subtotal + tipAmount;
    };

    const subTotalPrice = (): number => {
        return selectedProducts.reduce((subtotal, product) => subtotal + product.price, 0);
    }

    return (
        <div className='flex flex-col mt-12 gap-4'>
            <span className='py-4 bg-primary-800 shadow-lg px-6 rounded-2xl text-white divide-x divide-orange-700 font-semibold'>Total Amount</span>
            <div className='text-start flex flex-col border-1 border-primary-800 rounded-2xl border-dashed p-6 gap-3 text-primary-700'>
                <span>Subtotal: <b>${subTotalPrice().toFixed(2)}</b></span>
                <span>Tip: <b>${(subTotalPrice() * (tip/100)).toFixed(2)}</b></span>
                <hr className='border-gray-300' />
                <span className='text-lg'>Total: <b>${totalPrice().toFixed(2)}</b></span>
            </div>
        </div>
    );
};

export default TotalPrice;