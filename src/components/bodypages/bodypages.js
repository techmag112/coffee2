const BodyPages = (props) => {
   
    let {title, mainImg, addTextBody, classOffset} = props;
    
    let textBody = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.`;
    textBody += addTextBody;
    let photoBlock = null;
    let classStyle = null;
    let logoImg = 'Beans_logo_black.svg';
    logoImg = `./img/svg/${logoImg}`;
    if (mainImg !== '') {
        classStyle = "wrapper_main";
        mainImg = `./img/${mainImg}`;
        photoBlock = <div className="section_photo">
                             <img src={mainImg} alt="Coffee" className="section_photo"/>
                          </div>
    } 

    return (
        <>
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
                            {textBody}
                        </div>
                    </div>
                </div>
        </>
    )

}

export default BodyPages;