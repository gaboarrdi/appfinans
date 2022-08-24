import React, { useState } from "react";

const Form = ({handleAdd}) => {
    const [desc, setDesk] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateId = () => Math.round(Math.random()*1000)
    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!")
            return
        } else if (amount < 1) {
            alert("o Valor tem que ser positivo!")
        }        
        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };
        handleAdd(transaction);
        setDesk("")
        setAmount("")
    } 


    return (
       <>
       <div className="form">
        <div className="inputContent">
            <p className="inputContent">Descrição</p>
            <input value={desc} onChange = {(e)=> setDesk(e.target.value)} className="input1"></input>
        </div>
        <div className="inputContent">
            <p className="inputContent">Valor</p>
            <input value={amount} type = "number" onChange={(e) => setAmount(e.target.value)} className="input1"></input>
        </div>
        <div className="radioGroup">
        <div className="radioGroup">
            <p className="radioGroup">Entrada</p><input id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} className="radioGroupInput" type="radio"></input> 
        </div>
        <div className="radioGroup">
            <p className="radioGroup">Saida</p><input id="rExpenses"  name="group1" onChange={() => setExpense(!isExpense)} className="radioGroupInput" type="radio"></input> 
        </div>
        </div>
        
        <button onClick={handleSave}>ADICIONAR</button>
        
           
        
        
       </div>
       </>
    )
     
}
export default Form