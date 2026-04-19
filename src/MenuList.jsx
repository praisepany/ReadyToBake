import { Link } from 'react-router-dom';

const MenuList = ( {menus, title}) => {
    return ( 
        <div className="menu-list">
            <div className = "menu-content justify-items-center">
                <h3 className="menu-title w-full md:w-[90%] text-left px-5">{ title }</h3>
                <div className="menu-elem grid grid-cols-3 sm:w-full md:w-[90%] ">
                    {menus.map(menu => (
                        <div className="menu-preview font-['Verdana'] px-5 pb-12 group" key={menu.id}>
                            <Link to={`/menus/${menu.id}`}>
                                <img className="menu-pic rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-105 " src={ menu.srcpic } alt="" />
                                <h4 className="group-hover:font-bold pt-5">{ menu.name }</h4>
                            </Link>
                            <p>฿ { menu.price }</p>
                        </div> 
                    ))}
                </div>
            </div>
        </div>  
     );
}
 
export default MenuList;