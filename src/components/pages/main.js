//import { useEffect } from 'react';
import Header from "../header/header";
import HeaderExt from "../header-ext/headerExt";
import Footer from "../footer/footer";
import BodyPages from '../bodypages/bodypages';
import { picHeader } from '../pic-header/picHeader';

const Main = (props) => {

    const {arr} = props;
    //console.log(arr, props)
    const title = 'About Us';
    const textBody = ` Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.`;
    const classOffset = {marginTop: '50px'};
    const {headerUrl, headerTitle} = picHeader('Main_bg.jpg');
    const styleFooter = null;

    const renderTopCards = (arr) => {  
        let topCards = arr.map((item,index) => {
        const imgURL = `./img/${item.img}`
        const altBestTop = `Best Coffee ${index}`
        return (
                <div className="footer_ext_best_card" key={index}>
                    <img src={imgURL} alt={altBestTop} className="best_coffee_pic"/>
                    <div className="coffee_name">{item.kind}</div>
                    <div className="coffee_price">{item.price}</div>
                </div>
        )})
        return topCards  
    }
    

    return (
        <>
            <header>
                <div className="wrapper" style={headerUrl}>
                    <Header/>
                    {headerTitle}
                    <HeaderExt/>
                </div>
            </header>
            <main>
                <BodyPages title={title} mainImg='' addTextBody={textBody} classOffset={classOffset}/>
                <div className="footer_ext" style={classOffset}>
                    <div className="footer_ext_title">
                        Our best
                    </div>
                    <div className="footer_ext_best_list">
                           {renderTopCards(arr)}
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

export default Main;

