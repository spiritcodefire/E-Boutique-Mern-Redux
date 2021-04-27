import React ,{useState}  from 'react';
import { useTranslation} from 'react-i18next';
import i18next from '../../i18n';

import flagEnglish from   '../DropI18N/drapeaux/flagEnglish.png';
import flagDubai from     '../DropI18N/drapeaux/flagDubai.svg';
import flagRusse from     '../DropI18N/drapeaux/drapeauRusse.svg';
import logoFr from        '../DropI18N/drapeaux/drapeauFr.png';
import drapeauCoreen from '../DropI18N/drapeaux/drapeauCoreen.jpg';

const useChangeFlag = () => {

    const [ContainerLangue, setContainerLangue] = useState( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" /> )  
        
    const French = () => setContainerLangue( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" />)  

    const English = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Italy" />)

    const Coreen = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={drapeauCoreen} alt="drapeau Coreen" />)

    const Russe = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagRusse} alt="drapeau Russe" />)  

    const Dubai = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagDubai} alt="logo Italy" />)  

    
    return [French, English, Coreen, Russe, Dubai ]

}

const NavIdentification = () => {
    useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    const [French, English, Coreen, Russe, Dubai] = useChangeFlag()

    return (
        <div className="d-none d-sm-block bg-light">

            <div className="row justify-content-center"> 

                <div className="col-2" type="button" onClick={()=>{handleClick('fr');French();}} >
                    <img width="35px" style={{marginRight: '5px'}} src={logoFr} alt="logo France" />Français 
                </div>

                <div className="col-2" type="button" onClick={()=>{handleClick('eng');English();}} >
                    <img width="35px" style={{marginRight: '5px'}} src={flagEnglish} alt="logo France" />English
                </div>

                <div className="col-2" type="button" onClick={()=>{handleClick('ara');Dubai();}} >
                    <img width="36px" style={{marginRight: '5px'}} src={flagDubai} alt="logo dubai" />alearabia
                </div>

                <div className="col-2" type="button" onClick={()=>{handleClick('ru');Russe();}} >
                    <img width="36px" className="border" style={{marginRight: '5px'}} src={flagRusse} alt="drapeau Russe" />русски 
                </div>

                <div className="col-2" type="button" onClick={()=>{handleClick('ko');Coreen();}} >
                    <img width="36px" style={{marginRight: '5px'}} src={drapeauCoreen} alt="drapeau Coreen" />한국어
                </div>

            </div>
            
        </div>
    )
}

export default NavIdentification



