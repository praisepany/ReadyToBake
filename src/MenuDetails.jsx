import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
import { useCartStore } from "./cartStore";
import instructionPic from './assets/Instructions.png';
import tutorialPic from './assets/TutorialVideos.png';

const MenuDetails = () => {
    const { id } = useParams();
    const { data: menu , error, isLoading} = useFetch('http://localhost:8000/menus/' + id);
    console.log(id);


    const [quantity, setQuantity] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        if (!menu) return;

        const cartItem = {
            id: menu.id,
            name: menu.name,
            price: menu.price,
            srcpic: menu.srcpic,
            quantity: parseInt(quantity)
        };
        
        addToCart(cartItem); 
        alert(`Success! Added ${quantity} of ${menu.name} to your cart.`);
    };

    return ( 
        <div className="menu-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { menu && (
                <article className="relative">
                    <img className="menu-pic w-full h-120 object-cover opacity-70" src={ menu.srcpic } alt="" />
                    <div className="relative mx-auto -mt-90 w-[90%] md:w-[70%] lg:w-[80%] bg-[#F9E5C7] pt-5 pb-10 pl-10 pr-10 text-center">
                        <h2 className="menu-name !my-5">{ menu.name }</h2>

                        {/* line */}
                        <div className="w-full h-px bg-[#f1356d] my-5"></div>                        

                        <div className="menu-rating flex gap-3">
                            <div className="flex gap-1">
                                {[...Array(menu.rating || 0)].map((_, index) => (
                                    <svg className="star mb-5" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F34C9D" d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"/></svg>
                                 ))}
                            </div>
                            <div className="menu-rating-number py-0.5 !text-[20px] !font-medium">{ menu.rating }.0</div>
                        </div>

                        <div className = "menu-description flex items-start  justify-between gap-20">
                                <div className = "w-3/4 text-start ">
                                    <div className="">{ menu.body }</div>
                                    <div className="mt-10 !text-[12px]">
                                        <div className="!text-[16px]">Calories: {menu.calories} kcal</div>
                                        <div className="!text-[16px]">Cooking Time: {menu.time} min</div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-start text-left gap-5">
                                    <div className="!text-[35px] !font-medium">฿ { menu.price }</div>

                                    <div className="flex flex-col gap-1 w-full justify-end">
                                        <label htmlFor="quantity" className="!text-[16px]">Quantity:</label>
                                        <select 
                                            id="quantity"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-[#f1356d]"
                                        >
                                            {[...Array(10)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button onClick={handleAddToCart}> Add to Cart </button>
                                </div>
                        </div>

                        {/* line */}
                        <div className="w-full h-px bg-[#f1356d] mt-5"></div>
                        
                         {/*  Ingredients List */}
                        <div>
                            <h3 className="flex !my-5"> Ingredients </h3>
                            
                            {/* line */}
                            <div className="w-full h-px bg-[#f1356d] my-5"></div>
                            
                            {menu.ingredients && menu.ingredients.length > 0 ? (
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {menu.ingredients.map((ingredient, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#f1356d]"></span>
                                            <span className="text-gray-700">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">No ingredients listed.</p>
                            )}
                        </div>

                        {/*  Utensils List */}
                        <div>
                            <div>
                                <div className="w-full h-px bg-[#f1356d] mt-5"></div>
                                <h3 className="flex !my-5"> Equipments </h3>
                                <div className="w-full h-px bg-[#f1356d] my-5"></div>
                            </div>
                            
                            {menu.utensils && menu.utensils.length > 0 ? (
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {menu.utensils.map((utensil, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#f1356d]"></span>
                                            <span className="text-gray-700">{utensil}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">No equipment listed.</p>
                            )}
                        </div>

                        {/* Instruction */}
                        <div>
                            <div>
                                <div className="w-full h-px bg-[#f1356d] mt-5"></div>
                                <h3 className="flex !my-5"> Instructions </h3>
                                <div className="w-full h-px bg-[#f1356d] my-5"></div>
                                <img src= {instructionPic} alt="" />
                            </div>
                        </div>

                        {/* Tutorial */}
                        <div>
                            <div>
                                <div className="w-full h-px bg-[#f1356d] mt-5"></div>
                                <h3 className="flex !my-5"> Instructions </h3>
                                <div className="w-full h-px bg-[#f1356d] my-5"></div>
                                <img src= {tutorialPic} alt="" />
                            </div>
                        </div>

                    </div>
 
                </article>
            )}
        </div>
     );
}

export default MenuDetails;