import React, { useState, useContext } from 'react'
import { GlobalContext } from '../operations/GlobalState';

export const TransactionsAdd = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }

    return ( 
        <>
        <h3>Add Transaction!</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
          placeholder="Enter name of transaction" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount" />
        </div>
        <button className="btn">Submit</button>
      </form>
            
        </>
    )
}
