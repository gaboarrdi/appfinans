import React from "react";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = () => {
    return(
        <div>
           <div className="container">
            <ResumeItem title="Entradas:" Icon={FaRegArrowAltCircleUp} value="1000"/>
            <ResumeItem title="Saidas:" Icon={ FaRegArrowAltCircleDown} value="1000" />
            <ResumeItem title="Total:" Icon={FaDollarSign} value="1000" />
           </div>
         
            
            </div>
    )
}
export default Resume