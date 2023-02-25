import Header from "../header/header";
import Footer from "../footer/footer";
import ShopCards from "../shopcards/shopcard";
import BodyPages from "../bodypages/bodypages";
import { picHeader } from "../pic-header/picHeader";

const Pleasure = (props) => {
    const {arr} = props;
    const title = 'For your pleasure';
    const {headerUrl, headerTitle} = picHeader('pleasure.jpg', title);

    const styleFooter = {marginTop: '100px'}; 
   
    
    return (
        <>
            <header>
                <div className="wrapper" style={headerUrl}>
                    <Header/>
                    {headerTitle}
                </div>
            </header>
            <main>
                <BodyPages title={title} mainImg='coffee-cap.jpg'/>
                <div className="shop_list">
                    <br/><br/><br/><img src="./img/svg/Line.svg" alt="Line" className="coffee_line"/>
                </div>
                <div className="shop_list">
                    <div className="shop_list_row"> 
                         <ShopCards arr={arr} />
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

export default Pleasure;