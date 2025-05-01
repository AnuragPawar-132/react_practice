import react, { useContext } from "react"
import LightThemeContext from './LightThemeContext';

export const UseContextChild =  () => {

    const lightTheme = useContext(LightThemeContext)

    return(
        <div className={`${lightTheme ? 'bg-[white] text-[#00000]' : 'bg-[#000000] text-[white]'}  p-[10%]`} >
            <h4>This is react hook useContext. It can be use the manage the context</h4>
        </div>
    )
}