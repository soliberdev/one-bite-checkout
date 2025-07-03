import MenuItems from './MenuItems';
import styles from './Menu/Menu.module.css'

const Menu = () => {
  return (
    <div className="bg-neutral flex flex-col relative rounded-tl-0 rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-[2rem] h-fit">
      <div className={styles.container}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" className="size-7"  strokeWidth={2.5}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
        <span className="font-semibold text-xl">Menu</span>
      </div>
      <div>
        <MenuItems />
      </div>
    </div>
  );
};

export default Menu;