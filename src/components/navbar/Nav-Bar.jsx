import './NavBar.scss';
import zidLogo from '../../assets/zid-logo.png'
import '../../App.css';
const NavBar = () => {
    return (
        <>
            <header>
                <div class="container">
                    
                        <div class="d-flex navbar">
                            <div class="links">
                                <div className="Logo"><img src={zidLogo} alt="logo"></img></div>
                                <li className="mt-2 me-2"><a href="#">الرئيسية</a></li>
                                <li className="mt-2 me-2"><a href="#">التصنيفات</a></li>
                                <li className="mt-2 me-2"><a href="#">التطبيقات</a></li>
                                <li className="mt-2 me-2"><a href="#">طور تطبيقات</a></li>
                            </div>
                        </div> 
                        
                </div>         
            </header>
        </>
    );
}
export default NavBar;