import Header from './components/Header'
import SelectedProductsProvider from './context/SelectedProductsProvider'
import OrderSummary from './components/OrderSummary'
import Menu from './components/Menu'
import IconLink from './components/IconLink'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <SelectedProductsProvider>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-y-6 gap-x-6">
          <Menu />
          <OrderSummary/>
          <div className="col-span-full text-white text-sm">2025 © Sofia Libertad</div>
          <div className="col-span-full bg-[#F4D793] fixed right-0 bottom-0 w-auto h-auto p-3.5 flex flex-col items-center justify-around gap-3 rounded-tl-2xl text-white">
              <IconLink href='#' hidden={true}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" className="bg-[#dfc07a] w-9 h-9 p-1 rounded-md"  fill="none" strokeWidth={2}  strokeLinecap="round" stroke="currentColor" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
              </IconLink>
              <IconLink href='https://www.linkedin.com/in/sofia-libertad-montoya-herrera-9373ba2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2} className="bg-[#dfc07a] w-9 h-9 p-1 rounded-md" strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
              </IconLink>
              <IconLink href='https://github.com/soliberdev'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" className="bg-[#dfc07a] w-9 h-9 p-1 rounded-md"  stroke="currentColor"  strokeWidth={2.5}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
              </IconLink>
          </div>
        </div>
      </SelectedProductsProvider>
    </>
  )
}

export default App
