import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import homeDessert from './assets/HomeDessert.png';


const Home = () => {
    const {data : menus, isLoading, error} = useFetch('http://localhost:8000/menus');

    return ( 
        <div className="home">
            {error && <div>Could not fetch data for that resource</div>}
            {isLoading && <div>Loading...</div>}
            <h2 className="text-[48px] text-[#F34C9D] font-['Corben'] flex justify-center ">Make your own favorite dessert with us</h2> 
            <Link to ="/menus" className="flex justify-center pb-10">
                <button type="button">
                    Order Now
                </button>
            </Link>
            <img className="home-pic w-full" src= { homeDessert } alt="" />

            <div className="flex items-center justify-between px-10 py-10 gap-30">
                <h2 className="w-2/5 flex-shrink-0">Homemade made with ReadyToBake</h2>
                <p className="!text-[#f35295]">At ReadyToBake, we believe everyone deserves the pleasure of freshly baked goods--without the stress. Our service provides premium-quality ingredients, perfectly portioned for each recipe, along with easy-to-follow guides. No matter your skill level, we help you create bakery-quality desserts and snacks right from the comfort of your home.
                </p>

            </div>
           
        </div>
        
     );
}
 
export default Home;