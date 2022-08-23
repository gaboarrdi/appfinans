import React from "react";

const ResumeItem = ({ title, Icon, value}) => {
    return(
        <div className="cardContainer">
            <p className="headerCard">{title}<Icon /></p>
            
            <p className="total">{value}</p>
        </div>
    )
}
export default ResumeItem