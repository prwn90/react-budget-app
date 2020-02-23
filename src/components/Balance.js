import React, { useContext} from 'react'

import { GlobalContext } from '../operations/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      
    return (
        <>
            <h3>Your Money 💳</h3>
            <h1>${total}</h1>
        </>
    )
}
