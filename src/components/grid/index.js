import React from "react";
import GridItem from "../gridItem";


const Grid = (itens, setItens) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray)
        localStorage.setItem("transaction", JSON.stringify(newArray))
    }
    return(
       <table className="grid">
        <thead>
            <tr>
                <th className="th"> Descição</th>
                <th className="th"> Valor</th>
                <th className="th"> Tipo</th>
                <th className="th">.</th>
            </tr>
        </thead>
        <body>
        
            <GridItem  onDeLete = {onDelete} />
        
        </body>
       </table>
    )
}

export default Grid