import FormInput from "../UI/input/form-input/FormInput"
import "../expense-form/expense-form.css"
import Button from "../UI/Button/Button"
import { useState } from "react"


export const ExpenseForm =(props)=>{
const [title,setTitle]=useState("")
const [price,setPrice]=useState("")
const [date,setDate]=useState("")


    const  cancelHanler = (event) =>{
    event.preventDefault();
    props.onShowForm();
    };

    const titleInputChangeHandler =(event)=>{
        setTitle(event.target.value);
        
    }
    const priceInputChangeHandler =(event)=>{
        const value =event.target.value;
        if(value.charAt(0)!=="-"){
        } setPrice(value);
     }
 const dateInputChangeHandler =(event)=>{
    setDate(event.target.value);
 }


    const saveHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
             title,
             date,
            price,
        };

        props.onNewExpenseAdd(expenseData);
        setTitle("")
        setPrice("")
        setDate("")
        console.log(props);
    };

    return(
        <form className="form-title">
            <div className="form-item">
            <div>
<FormInput 
            id="name"
             labelName= "Название"
              inputType="text"
               placeholder="Выведите ..."
               value={title} 
               onChange={ titleInputChangeHandler}/>

<FormInput
            id="date" 
             labelName= "Дата"
              inputType="date"
              placeholder="dd.mm.yyyy"
              vaule={date} 
              onChange={ dateInputChangeHandler}
              />
</div>


<div>


<FormInput 
            id="price" 
            labelName= "Количество денег"
             inputType="number" 
             placeholder=""
             value={price}
             onChange={priceInputChangeHandler} />
</div>

            </div>

         


          

              <div className="btn">
              <Button title="отмена" onClick={cancelHanler} />
              <Button title="сохранит" onClick={saveHandler}    />  
              </div>
           
             </form>
    )
}
