import React from "react";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from "react-icons/fa"

const GridItem = (item, onDelete) => {
    return(
        <tr>
            <td className="td">{item.desc}</td>
            <td className="td">{item.amount}</td>
            <td className="td">{item.expense ? (
                <FaRegArrowAltCircleDown color="red" className="svg"/>
            ) : (
                <FaRegArrowAltCircleUp color="green" className="svg" />
            )}
            </td>
            <td> 
                <FaTrash onClick={() => onDelete(item.id)} className="svg"/>
            </td>
        </tr>
    )
}

export default GridItem