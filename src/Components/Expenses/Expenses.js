import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
         return expense.date.getFullYear().toString === filteredYear;
    });
     
    let expensesContent = <p>No Expense Found .</p>

    
    
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={(props.items.filter(thedate => thedate.date.getFullYear().toString() === filteredYear))}/>
            {/*{filteredExpenses.length=== 0 ? (<p>No Expense found.</p>) : (filteredExpenses.map((expense) => ( */}
                {(props.items.filter(thedate => thedate.date.getFullYear().toString() === filteredYear)).length===0 && expensesContent}
                {props.items.filter(thedate => thedate.date.getFullYear().toString() === filteredYear).map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                   
                ))}
                {/*<ExpensesChart expenses={filteredExpenses}/>*/}

        </Card>
        </div>
    );
}
export default Expenses;