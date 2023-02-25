import Header from "../header/header";
import Footer from "../footer/footer";

import { Link } from "react-router-dom";

const Page404 = () => {
    
    const img = 'coffee-shop.jpg';
    const headerUrl = {
        background: `url(../img/${img})`
    }
    const logoImg = './img/svg/Beans_logo_black.svg';
    const title = 'Not Found';
    const photoBlock = null;
    const headerTitle = <div className="header__logo_text">{title}</div> 
    const styleFooter = {marginTop: '100px'} 
    let classOffset = {marginTop: '100px'} 


    return (
        <>
             <header>
                <div className="wrapper" style={headerUrl}>
                    <Header/>
                    {headerTitle}
                </div>
            </header>
            <main>
                <div style={classOffset}>
                    {photoBlock}
                    <div className="wrapper__section">
                        <div className="title_section">
                            {title}
                        </div>
                        <div className="logo_section">
                            <img src={logoImg} alt="Logo Coffee Bean Black" className="bean__logo_pic2"/>
                        </div>
                        <div className="body_section">
                            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
                            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
                        </div>
                    </div>
                </div>
                <div className="shop_list">
                    <div className="shop_line">
                        <br/><br/><br/><img src="./img/svg/Line.svg" alt="Line" className="coffee_line"/>
                    </div>
                </div>
            </main>
            <footer>
                <div className="wrapper__footer" style={styleFooter}>
                    <Footer/>
                </div>
            </footer>
        </>
    )
}

export default Page404; 