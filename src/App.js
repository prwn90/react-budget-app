import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncExp } from './components/IncExp';
import  TransactionList from './components/TransactionList';
import { TransactionsAdd }  from './components/TransactionsAdd';

import { GlobalProvider } from './operations/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransactionList />
        <TransactionsAdd />
      </div>
    </GlobalProvider>
  );
}

export default App;
