import React from "react";
import "./App.css";
import {Header} from './componenets/Header';
import {Balance} from './componenets/Balance';
import {IncomeExpenses} from './componenets/IncomeExpenses';
import {TransactionList} from './componenets/TransactionList';
import {AddTransaction} from './componenets/AddTransaction';
import {GlobalProvider} from './context/GlobalState';


function App() {
    return (
    <GlobalProvider> 
        <Header/>
        <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />  
        </div>
    </GlobalProvider>);
}

export default App;