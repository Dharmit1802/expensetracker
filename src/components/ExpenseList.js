import React from 'react';
import Expense from "../pages/Expense"

export default function ExpenseList({expenses,setExpenses,CATEGORIES}) {
  if (expenses.length === 0)
  return (
    <p className='message'>
      there are no expense hear !! Add the new Expense 💰
    </p>
  );

return (
  <section className='overflow-y-auto'>
    <ul className='fact-list'>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} setExpense={setExpenses} CATEGORIES={CATEGORIES} />
      ))}
    </ul>
  </section>
)
}
