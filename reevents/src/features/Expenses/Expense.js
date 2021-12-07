import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

import './ExpenseItem.css'

const Expense = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2021'); 
    const handleFilterCondition =(selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    return (
        <div>
        
        <Card className='expenses'>
        <ExpenseFilter onSelectFiltervalue={handleFilterCondition} defaultSelected={filteredYear}/>
          {
              items.map((item)=>(
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
                   
                  ))
                      }
        </Card>
        </div>
    )
}

export default Expense
