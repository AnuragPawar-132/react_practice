import React, {useContext, useState, createContext} from "react";
import {UseContextChild} from "../components/UseContextChild";
import LightThemeContext from '../components/LightThemeContext';

export const UseContext = () => {

    const [lightTheme, setLightTheme] = useState(true);

    return (
        <div className={`${lightTheme ? 'bg-[white] text-[#000000]' : 'bg-[#000000] text-[white]'} h-[100vh]`}>
            <h2>UseContext Hook</h2>
            <button onClick={()=>setLightTheme(!lightTheme)} className="bg-[#808080] px-[2%] py-[1%]">Dark</button>
            <LightThemeContext.Provider value={lightTheme}>
                <UseContextChild />
            </LightThemeContext.Provider>
        </div>
    )

}