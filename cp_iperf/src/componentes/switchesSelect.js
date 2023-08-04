import React, { useState } from "react";
import { useEffect } from "react";

function SwitchesSelect(){
    const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);
    const [switches,setSwitches] = useState([]);
    useEffect(() => {
        fetch("http://localhost:40780/api/switches")
        .then(res => res.json())
        .then(
            (result) => {
                //setIsLoaded(true);
                setSwitches(result);
            },
            (error) => {
                //setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    if (error) {
        return console.log(error);
    } else {
        console.log("exito")
        return (
            switches.forEach(swich => {
                <option value={swich.id}>{swich.switch}</option>
            })
        )
    }
}

export default SwitchesSelect