import mslogo from '../assets/msheading.png';
import hamburger from '../assets/hamburger.png';
import search from '../assets/search-interface-symbol.png';
import cart from '../assets/shopping-cart.png';
import login from '../assets/user.png';

const Header = () => {

  return (
    <header>
      <nav className="text-black xl:px-16 xl:py-4 lg:py-3 lg:px-16 px-4 py-3 flex items-center justify-between bg-white">

        <div className='flex items-center xl:hidden lg:hidden'>
          <input type="text" name="" id="" className='w-[90vw]' />
          <img src={hamburger} alt="" className='w-6 cursor-pointer' />
          <img src={search} alt="" className='w-5 cursor-pointer ml-5'/>
        </div>

        <div className="logo xl:hidden lg:hidden">
          <img src={mslogo} alt="" className='w-28 mr-7' />
        </div>

        <div className='flex items-center xl:hidden lg:hidden'>
          <a href="#links"><img src={cart} alt="" className='w-8 mr-5' /></a>
          <a href="#links"><img src={login} alt="" className='w-6' /></a>
        </div>

        <ul className="lg:flex xl:flex md:hidden hidden items-center text-sm">
          <li><img src={mslogo} alt="" className='w-28 mr-7' /></li>
          <li className="mx-2"><a href="#">Microsft 365</a></li>
          <li className="mx-2"><a href="#">Teams</a></li>
          <li className="mx-2"><a href="#">Copilot</a></li>
          <li className="mx-2"><a href="#">Windows</a></li>
          <li className="mx-2"><a href="#">Surface</a></li>
          <li className="mx-2"><a href="#">Xbox</a></li>
          <li className="mx-2"><a href="#">Support</a></li>
        </ul>

        <ul className="lg:flex xl:flex md:hidden items-center text-sm hidden">
          <li className="all mx-2"><a href="#">All Microsft</a></li>
          <li className="search mx-2"> <img src={search} alt="" className='w-4 cursor-pointer ml-5' /></li>
          <li className="cart mx-2"><a href=""><img src={cart} alt="" className='w-7 cursor-pointer' /></a></li>
        </ul>
      </nav>
    </header >
  )
}

export default Header