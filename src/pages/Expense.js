import React, { useState } from 'react'

export default function Expense({expense,setExpense,CATEGORIES}) {
    const [isUpdating, setIsUpdating] = useState(false);
    const isDisputed = expense.votesInteresting + expense.votesMindblowing < expense.votesFalse;

     // Function to format the date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  // Function to format the amount
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR', // Change to your preferred currency
      minimumFractionDigits: 2,
    }).format(amount);
  };
  
  
    return (
      <li className='fact'>
        <span
          className='bg-white capitalize font-bold text-xl leading-5 rounded-lg shadow-md p-4 py-8 flex items-center'
          style={{
            backgroundColor: CATEGORIES.find((cat) => cat.name === expense.category)
              .color,
          }}
        >
          {expense.category}
        </span>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-full">
        
        <div className="flex-grow">
          <h3 className="font-medium text-gray-900 capitalize text-2xl">{expense.title}</h3>
          <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
        </div>
        <div className="ml-auto text-right">
          <span className=" font-medium text-gray-900 text-xl">{formatAmount(expense.amount)}</span>
        </div>
        </div>
      </li>
    );
}
