import Header from "../header/header";
import Footer from "../footer/footer";
import FilterPanel from "../filter-panel/filterPanel";
import ShopCards from "../shopcards/shopcard";
import BodyPages from "../bodypages/bodypages"
import { picHeader } from "../pic-header/picHeader";

const About = (props) => {

    const {visibleData} = props;

    const title = 'About our beans';
    const {headerUrl, headerTitle} = picHeader('coffee-shop.jpg', title);
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
                <BodyPages title={title} mainImg='girl.jpg'/>
                <div className="shop_list">
                        <br/><br/><br/><img src="./img/svg/Line.svg" alt="Line" className="coffee_line"/>
                    <div className="shop_line">
                        <FilterPanel filter = {props.filter} 
                                     onFilterSelect={props.onFilterSelect} 
                                     onUpdateSearch={props.onUpdateSearch}/>
                    </div>
                </div>
                <div className="shop_list">
                    <div className="shop_list_row"> 
                        <ShopCards arr={visibleData} />
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

export default About;