import { useSelectedProducts } from '../hooks/useSelectedProducts'

const tipValues = [0, 10, 20, 50];

const Tip = () => {

    const {tip, setTip} = useSelectedProducts();

    return (
        <div className="flex flex-col mt-12 gap-4">
            <span className='py-4 bg-primary-800 shadow-lg px-6 rounded-2xl text-white divide-x divide-orange-700 font-semibold'>
                Tip
            </span>
            <div className='flex flex-row gap-4 justify-center my-4'>
                {tipValues.map((amount) => (
                    <label key={amount} className={`py-2 px-5 rounded-xl cursor-pointer hover:bg-[#F4D793] text-primary-800
                    ${tip === amount ? 'bg-[#F4D793]' : 'bg-secondary-100'}`}>
                    <input type="radio" name="tip" value={amount} checked={tip === amount} onChange={() => setTip(amount)} className="hidden"/>
                        ${amount}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Tip;