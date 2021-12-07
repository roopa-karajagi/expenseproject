import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({onSelectFiltervalue,defaultSelected}) => {
    const handleFilterValue=(event)=>{
        //console.log("dropdoonw" , event.target.value);
        const value=event.target.value;
        onSelectFiltervalue(value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
           <select name="year" value={defaultSelected} onChange={handleFilterValue}>
               <option value="2019">2019</option>
               <option value="2020">2020</option>
               <option value="2021">2021</option>
               <option value="2022">2022</option>
               </select> 
               </div>
        </div>
    )
}

export default ExpenseFilter
