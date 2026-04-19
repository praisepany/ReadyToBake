import useFetch from './useFetch';
import MenuList from './MenuList';

const Menu = () => {
    const {data : menus, isLoading, error} = useFetch('http://localhost:8000/menus');

    return ( 
        <div className="menu">
            {error && <div>Could not fetch data for that resource</div>}
            {isLoading && <div>Loading...</div>}
            {menus && <MenuList menus={ menus } title = "All Products"/>}
        </div>
     );
}
 
export default Menu;