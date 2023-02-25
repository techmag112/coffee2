import { NavLink } from "react-router-dom";

const Header = (props) => {
    const pathImg = props = '.' ? '.' : null
    const logoImg = `${pathImg}./img/svg/coffee-beans.svg`;
    const textStyle = {color: 'white'};
     //color !== 'black' ? {color: 'white'} : {color: 'black', marginTop: '22px'}
        return (
            <>
                <div className="header__wrapper">
                    <div className="header__logo">
                            <img src={logoImg} alt="Logo Coffee house" className="header__logo_pic"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <NavLink to="/" 
                                        className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                        style={textStyle}>
                                            Coffee house
                                </NavLink>  
                            </li>
                            <li className="header__item">
                                <NavLink to="/about" 
                                        className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                        style={textStyle}>
                                            Our coffee
                                </NavLink>  
                            </li>
                            <li className="header__item">
                                <NavLink to="/pleasure" 
                                        className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                        style={textStyle}>
                                            For your pleasure
                                </NavLink>  
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
    )
    
}
    
 


export default Header;