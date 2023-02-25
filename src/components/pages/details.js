import Header from "../header/header";
import Footer from "../footer/footer";
import { picHeader } from "../pic-header/picHeader";

import { useParams, useNavigate} from 'react-router-dom';

const Details = (props) => {
   
    const {arr} = props;
    const {id} = useParams();
    const navigate = useNavigate();
 
    const title = 'About our beans';
    const {headerUrl, headerTitle} = picHeader('coffee-shop.jpg', title);
 
  
    const logoImg = '../img/svg/Beans_logo_black.svg';
    const mainImg = '../img/sort-aromistico.jpg';
    const photoBlock = <div className="section_photo">
                             <img src={mainImg} alt="Coffee" className="section_girl"/>
                         </div>    
   
    const styleFooter = null;
    let classStyle = "wrapper_main";
    let classOffset = null;
  //  <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to={navigate(-1)}>Back to previous page</Link>
    return (
        <>
            <header>
                <div className="wrapper" style={headerUrl}>
                    <Header pathImg='.'/>
                    {headerTitle}
                </div>
            </header>
            <main>
                <div className={classStyle} style={classOffset}>
                        {photoBlock}
                    <div className="wrapper__section">
                        <div className="title_section">
                            {title}
                        </div>
                        <div className="logo_section">
                            <img src={logoImg} alt="Logo Coffee Bean Black" className="bean__logo_pic2"/>
                        </div>
                        <div className="body_section">
                               <p className='card_details1'>Country: {arr[id].country}</p>
                                <br/>
                                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <br/>
                                <p className='card_details2'>Price: {arr[id].price}$</p>
                                <br/><br/><br/>
                                <button className='back_button'  onClick={() => navigate(-1)}>Back to previous page</button>
                        </div>
                    </div>
                </div>
                <div className="shop_list">
                    <br/><br/><br/><img src="../img/svg/Line.svg" alt="Line" className="coffee_line"/>
                </div>
            </main>
            <footer>
                <div className="wrapper__footer" style={styleFooter}>
                    <Footer pathImg='.'/>
                </div>
            </footer>
        </>
    )
}

export default Details; 