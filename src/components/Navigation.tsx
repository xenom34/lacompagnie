import React from "react";
import Logo from '../img/LogoCompagnie.png';



const SiteNavbar: React.FC = () => {
    return (
        <nav id="siteNavbar" className="site-navbar site-navbar-transparent navbar navbar-expand-lg navbar-dark bg-white shadow-light-lg site-navbar-absolute py-2" data-navbar-base="navbar-dark" data-navbar-scrolled="navbar-light" data-navbar-toggled="navbar-light">

            <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="" className="Logo"/>

            </a>

            <button className="navbar-toggler-alternative" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-alternative-icon">
          <span></span>
        </span>
            </button>

            <div className="navbar-collapse collapse" id="navbarCollapse">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#home">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#about">Achetez</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#information">Information</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scrollto" href="#solutions">Compte</a>
                    </li>


                </ul>

                <a className="btn btn-white d-block d-lg-inline-block ml-lg-3" target="_blank" rel="noopener nofollow" data-on-navbar-light="btn-primary" data-on-navbar-dark="btn-white">Connexion</a>

            </div>
        </nav>

    )
}

export default SiteNavbar;