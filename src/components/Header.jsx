import logo from '../img/icon.png'
const Header = () => {

  
  return (
  <header >
      <nav className="flex justify-between items-center p-2 md:px-4 bg-gradient-to-r from-[#A5FECB] via-[#20BDFF] to-[#5433FF]/80 shadow-lg shadow-black/40">
          <img src={logo} alt="TravelIde_logo" className='w-26 h-12 md:w-26 md:h-20' />
      </nav>
    </header>)
};

export default Header;
