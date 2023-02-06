import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';

interface WebsiteSliderProps {}

const WebsiteInformation: React.FC<WebsiteSliderProps> = () => {
    return (
        <div id="information" className="website-slider-item" data-navbar-slide="navbar-dark">
            <div className="website-slider-item-inner">
                <div className="container text-white">
                    <div className="row mb-7 text-center">
                        <div className="col-12 col-lg-9 mx-lg-auto">
                            <h2>Covid-19 : dernières informations</h2>
                            <div className="divider bg-white mx-auto">

                            </div>
                            <p>Le port du masque (sans valve) est fortement recommandé à bord de nos avions dès l’âge de six ans.
                                Vous souhaitez vérifier les conditions à remplir avant votre départ, découvrir nos mesures sanitaires, ou en savoir plus sur nos billets modifiables* ? Consultez nos pages dédiées.

                                * Sous réserve d'éventuels frais de modification et/ou d'un éventuel réajustement tarifaire. Voir les conditions tarifaires de votre billet.

                            </p>
                        </div>
                        <div className="row">

                            <div className="col-12 col-lg-6 mb-8">
                                <h4>Préparer mon voyage</h4>
                                <p className="mb-0">Vaccinations

                                    Pour voyager l'esprit tranquille, pensez à vérifier vos vaccins.
                                    Ils vous protégeront de maladies qui ont peut-être disparu de certaines régions mais qui persistent dans d'autres.
                                    Certains nécessitent plusieurs injections : pensez-y à l'avance !</p>
                            </div>

                            <div className="col-12 col-lg-6 mb-8">
                                <h4>Mouvement national d’appel à la grève le 7 février 2023</h4>
                                <p className="mb-0">Dans le cadre du mouvement national d’appel à la grève en France le mardi 7 février 2023 et notamment suite à la demande de la Direction Générale de l’Aviation Civile (DGAC) faite à l’ensemble des compagnies aériennes de réduire de 20 % leur programme de vols de et vers Paris Orly, Air France prévoit d’assurer pour cette journée :

                                    la totalité de ses vols long-courriers,
                                    95% de ses vols court et moyen-courriers.


                                    Si des retards et des annulations de dernière minute ne sont pas à exclure, LaCompagnie prévoit d’acheminer l’ensemble des clients en possession d’une réservation pour la journée du 7 février 2023.

                                    Le programme de vols est à jour depuis le 3 février et les clients concernés par des vols annulés ont d'ores et déjà été notifiés individuellement, par SMS, e-mail ou via l’application Air France.

                                    Des mesures commerciales consultables ci-dessous permettent un report sans frais.
                                    Pour les clients dont le vol est annulé, un avoir ou un remboursement intégral seront proposés dans le cas où ils ne voyageraient plus.
                                    Toutes les équipes d'Air France sont mobilisées pour assister les clients dans leurs démarches.</p>
                            </div>

                            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                <h4>Nos mesures sanitaires pour voyager en toute sécurité</h4>
                                <p className="mb-0">Votre santé et votre sécurité sont au cœur de nos préoccupations. Face au Covid-19, nous avons mis en place les mesures sanitaires les plus strictes au sol comme en vol. Regroupées sous le label « Air France Protect », elles sont adaptées régulièrement aux évolutions de la situation sanitaire. Pour vous accueillir, toutes nos équipes respectent strictement les règles d’hygiène et les gestes barrières.

                                    Suivez nos recommandations ci-dessous pour vous préparer, et voyagez en toute sécurité..</p>
                            </div>

                            <div className="col-12 col-lg-6">
                                <h4>Comment vous tenir informé ?</h4>
                                <p className="mb-0"> Si votre voyage est impacté par ce mouvement, vous serez informés grâce aux coordonnées (téléphone portable et/ou adresse e-mail personnels) de votre dossier de réservation.
                                    Nous vous invitons à les tenir à jour

                                    Avant de vous rendre à l'aéroport, veuillez consulter le statut de votre vol mis à jour en temps réel dans la rubrique Horaires et statuts des vols sur notre site internet ou sur l'application mobile.

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebsiteInformation;
