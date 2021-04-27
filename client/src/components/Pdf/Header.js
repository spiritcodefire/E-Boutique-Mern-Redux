import React from 'react'
import logo from './assets/logoNavBar.png'

const Header = () => {
    return (
        <>
            <figure className="text-center">
                <img src={logo} alt="logo" className="img-fluid" width="70%"/>
            </figure>
            <div className="h4 text-center">À RETOURNER PAR MAIL OU PAR FAX À :</div>
            <div className="h6 text-secondary text-center mt-n2">Tél : +33(0)9 77 29 10 63 Fax : +33 (0)1 72 70 30 86 ou directement par mail : liza@artandgalleries.com </div>
        </>
    )
}

export default Header
