import React, { useState }   from 'react';
import { useTranslation} from 'react-i18next';
import i18next from '../../i18n';
import flagEnglish from './drapeaux/drapeauRusse.svg';
import flagDubai from './drapeaux/drapeauRusse.svg';
import flagRusse from './drapeaux/drapeauRusse.svg';
import logoFr from './drapeaux/drapeauRusse.svg';
import drapeauCoreen from './drapeaux/drapeauCoreen.jpg';

const useChangeFlag = () => {

    const [ContainerLangue, setContainerLangue] = useState( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" /> )  
        
    const English = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre" /> )  

    const Dubai = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagDubai} alt="logo Italy" />)  

    const Russe = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={flagRusse} alt="drapeau Russe" />)  

    const Coreen = () => setContainerLangue( <img width="36px" style={{ marginRight: '5px' }} src={drapeauCoreen} alt="drapeau Coreen" />)  

    const French = () => setContainerLangue( <img width="25px"  style={{paddingTop: '0px', }} src={logoFr} alt="logo France" />)  
    
    return [ContainerLangue, English , French,Coreen, Russe, Dubai ]

}


const DropI18N = () => {

    useTranslation();
    const [ContainerLangue,  English , French, Coreen, Russe, Dubai] = useChangeFlag()
    
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }


    return (
        <div>

            <div className="col-md-2 dropdown bg-light">

                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {ContainerLangue}
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

                    <button className="dropdown-item" type="button" onClick={()=>{
                        handleClick('fr');
                        French();
                        }} >
                            <img width="35px" style={{ marginRight: '5px'  }} src={logoFr} alt="logo France" />Français 
                    </button>

                    <button className="dropdown-item" type="button" onClick={()=>{
                        handleClick('eng');
                        English();
                        }} >
                            <img width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre" />English
                    </button>

                    <button className="dropdown-item" type="button" onClick={()=>{
                        handleClick('ara');
                        Dubai();
                        }} >
                            <img width="36px" style={{ marginRight: '5px' }} src={flagDubai} alt="logo dubai" />alearabia
                    </button>

                    <button className="dropdown-item" type="button" onClick={()=>{
                        handleClick('ru');
                        Russe();
                        }} >
                            <img width="36px" style={{ marginRight: '5px' }} src={flagRusse} alt="drapeau Russe" />русски 
                    </button>

                    <button className="dropdown-item" type="button" onClick={()=>{
                        handleClick('ko');
                        Coreen();
                        }} >
                            <img width="36px" style={{ marginRight: '5px' }} src={drapeauCoreen} alt="drapeau Coreen" />한국어
                    </button>

                </div> 

            </div>
            
        </div>
    )
}

export default DropI18N
