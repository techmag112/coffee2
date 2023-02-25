import { NavLink } from "react-router-dom";

const Footer =  (props) => {
    const pathImg = props = '.' ? '.' : null
    const logoImg = `${pathImg}./img/svg/coffee-beans_black.svg`;
    const logoImg2 = `${pathImg}./img/svg/Beans_logo_bottom.svg`
    const textStyle =  {color: 'black', marginTop: '40px'};
    return (
        <>
  
            <div className="footer_main">
                <div className="footer_bottom"> 
                    <nav className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__logo">
                                <img src={logoImg} alt="Logo Coffee house" className="footer__logo_pic"/>    
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" 
                                    className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                    style={textStyle}>
                                        Coffee house
                                </NavLink>  
                            </li>
                            <li className="footer__item">
                                <NavLink to="/about" 
                                    className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                    style={textStyle}>
                                            Our coffee
                                </NavLink>  
                            </li>
                            <li className="footer__item">
                                <NavLink to="/pleasure" 
                                        className={({ isActive }) =>(isActive ? 'menu__link active' : 'menu__link')}
                                        style={textStyle}>
                                                For your pleasure
                                </NavLink>  
                            </li>
                        </ul>
                    </nav>
                        <div className="footer_logo_bottom">
                            <img src={logoImg2} alt="Logo Coffee house Bottom" className="footer__logo_pic2"/>
                        </div>
                </div>
            </div>
        </>
    )
}


export default Footer;