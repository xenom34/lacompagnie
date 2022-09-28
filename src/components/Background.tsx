import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import ISourceOptions from "react-tsparticles";
import Main from "react-tsparticles";

import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

function Background() {
    const options: any = {
        //preset: "seaAnemone",
        particles: {
            move: {
                speed: 3
            },
        },




    };

    const initialize = useCallback(async (engine: any) => {
        await loadSeaAnemonePreset(engine);
    }, []);
        return (
            <Particles options={options} init={initialize} />);
}


export default Background;