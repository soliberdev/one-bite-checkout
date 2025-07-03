const Header = () => {
    return (
        <div className="relative mb-2 overflow-hidden h-[120px] flex justify-center -top-[24px]">
            <div className="relative w-[80%] sm:w-[60%] md:w-[45%] xl:w-[35%] h-[100px]">
                <svg viewBox="0 0 507 71" preserveAspectRatio="none" className="w-full h-[75px] sm:h-[75px] md:h-[90px] absolute -top-0.5 left-0 fill-[#fff9f1]">
                    <path d="M500.982 1.0003C503.262 0.812207 505.295 0.832239 507 1.00031L500.982 1.0003C487.438 2.1179 465.195 10.583 451.5 39.0003C447.404 47.5003 431.3 70.1 400.5 70.5H106.5C95.6667 71.1667 70.8 66 56 40C47.5 22.5 31 1 0 1L500.982 1.0003Z"/>
                </svg>
            </div>
            <h1 className="absolute w-full z-10 text-4xl md:text-5xl mb-6 font-bold text-primary-800 text-center flex flex-col">
                ONE BITE
                <span className="text-sm font-light">checkout</span>
            </h1>
        </div>
    );
};



export default Header;