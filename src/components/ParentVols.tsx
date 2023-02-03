import React, {useCallback} from "react";
import VolAlleSimple from "./VolAlleSimple";
import {forEach} from "lodash";


class ParentVols extends React.Component<any, any>{


    constructor(props:any) {
        super(props);
        console.log(this.props)
        console.log(props.lucile)
        console.log(props.lucile.request)

    }
    render = () => {
        return (

            <div>
                {

                    this.props.lucile.request.map((vol:any, index:any) =>
                        <VolAlleSimple key={index} depart={vol.airport_departure} arrive={vol.airport_arrival}
                                                            dateDépart={vol.date_departure} dateArrivee={vol.date_arrival}
                                                            heureDepart={vol.time_departure}
                                                            heureArrivee={vol.time_arrival}
                                                            duree={vol.duration} modeleAvion={vol.aircraft}
                                                            prixBillet={vol.price_first}>

                        </VolAlleSimple>
                    )}
            </div>

        );
    }

}
export default ParentVols;