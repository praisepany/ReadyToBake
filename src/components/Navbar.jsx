import { Link } from 'react-router-dom';
import logo from '../assets/cake-logo.png';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="w-full bg-[#F8BFBD] flex items-end justify-between px-8 py-4">

                <div className="flex gap-10 flex-1">
                    <Link to="/" className="!text-[#f1356d] !hover:font-semibold">Home</Link>
                    <Link to="/menus" className="!text-[#f1356d] ">Menu</Link>
                </div>


                <div className="flex flex-col items-center">
                    <Link to="/" className="cake-logo flex flex-col items-center">
                        <img src={ logo } alt="Logo" className="h-10 w-auto" />
                        <p className="!text-[#f1356d] !text-[15px] !font-['Corben']">ReadyToBake</p>
                    </Link>
                </div>

                <div className="flex flex-1 justify-end gap-10">

                    <Link to="/cart">
                        <svg className="stroke-[#ef5595] hover:stroke-[#f1356d] transition-colors duration-200 cursor-pointer" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                    
                    <Link to="/login">
                        <button type="button" className="!bg-[#ef5595] hover:!bg-[#f1356d]">
                            Log In
                        </button>
                    </Link>
                </div> 
                
                
            </div>
        </nav>
    );
}
 
export default Navbar;
