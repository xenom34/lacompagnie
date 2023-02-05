import React, {useCallback} from "react";
import VolAlleSimple from "./VolAlleSimple";
import {forEach} from "lodash";
import Search from "./Search";


class ParentVols extends React.Component<any, any>{

    tristesse=(event:any) => {
        let propTristesse = this.props.desolation()

        return propTristesse
    }
    constructor(props:any) {
        super(props);


    }
    render = () => {
        return (


            <div>
                {Search.conteur >= 1 ? <div><h4 id={"AlleSimpleTitle"}> RETOUR </h4></div> : <h4 id={"AlleSimpleTitle"}> ALLER </h4>
                }


                {

                    this.props.lucile.request.map((vol:any, index:any) =>
                        <VolAlleSimple folie={this.tristesse} key={index} flight={vol._id} depart={vol.airport_departure} arrive={vol.airport_arrival}
                                                            dateDépart={vol.date_departure} dateArrivee={vol.date_arrival}
                                                            heureDepart={vol.time_departure}
                                                            heureArrivee={vol.time_arrival}
                                                            duree={vol.duration} modeleAvion={vol.aircraft}
                                                            prixBillet={vol.price}  nbPassenger={this.props.nbPassenger} classeBillet={this.props.classeBille} Token={this.props.lucile.askToken}>

                        </VolAlleSimple>
                    )}
            </div>

        );
    }

}
export default ParentVols;