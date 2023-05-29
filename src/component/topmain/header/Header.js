import Navigation from "./Navigation";
import TopHeader from "./TopHeader";
import './header.css'

const Header = () => {
    return ( 
        <header>
            <TopHeader />
            <hr />
            <Navigation />
        </header>
     );
}
 
export default Header;