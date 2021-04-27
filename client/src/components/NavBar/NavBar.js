import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/logo/logoNavBar.png'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
// import DropI18N from '../DropI18N/DropI18N';

const NavBar = () => {

	const { t } = useTranslation();

        return(
			<nav  className="navbar navbar-expand-lg navbar navbar-light bg-light bigBorderRed rounded-bottom-xl">
				<div className="container-fluid">

					<div className="navbar-brand " >
						<Link className="nav-link text-white img-fluid"  to='/'>
							<img src={icon} className='img-fluid' width='200px'  alt='logo'/>
						</Link>
					</div>

					<div className="container">
						
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
						
								<li className="nav-item mx-5 d-none d-sm-block">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }} className="nav-link"  to='/Artistes'>{t('NavBar.Artistes')}</Link>
								</li>

								{/* <li className="nav-item mx-3">
									<Link   activeStyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/Galerie'>{t('NavBar.Galerie')}</Link>
								</li> */}

								<li className="nav-item mx-5 d-none d-sm-block">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/Agenda'>{t('NavBar.Agenda')}</Link>
								</li>

								<li className="nav-item mx-5 d-none d-sm-block">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/GalerieVirtuelle'>{t('NavBar.GalerieVirtuelle')}</Link>
								</li>

								<li className="nav-item mx-5 d-none d-sm-block">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/Videos'>{t('NavBar.Videos')}</Link>
								</li>

								<li className="nav-item mx-5 d-none d-sm-block">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/Partenaires'>{t('NavBar.Partenaires')}</Link>
								</li>

								<li className="nav-item mx-5">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to='/NousRejoindre'>{t('NavBar.NousRejoindre')}</Link>
								</li>

								{/* <li className="nav-item mx-5 d-block d-sm-none ">
									<DropI18N />
								</li> */}
	
								 <li className="nav-item mx-3">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to="/test" >Carousel</Link>
								</li> 
								 <li className="nav-item mx-3">
									<Link   activestyle={{ color: '#8d010e', fontWeight: 600 }}  className="nav-link"  to="/Pdf" >PDF</Link>
								</li> 


							</ul>
						</div>
					</div>
					
					
					


				</div>
		</nav>
        )
}

export default NavBar