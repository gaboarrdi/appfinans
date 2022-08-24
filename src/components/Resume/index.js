import React from "react";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = ({income, expense, total}) => {
    return(
        <div>
           <div className="container">
            <ResumeItem title="Entradas:" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title="Saidas:" Icon={ FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem title="Total:" Icon={FaDollarSign} value={total} />
           </div>
         
            
            </div>
    )
}
export default Resume