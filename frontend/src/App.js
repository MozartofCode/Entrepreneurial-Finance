import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BalanceSheet from './pages/BalanceSheet';
import IncomeStatement from './pages/IncomeStatement';
import CashFlow from './pages/CashFlow';
import FinancialRatios from './pages/FinancialRatios';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BalanceSheet />} />
          
          {/ Financial statement input routes /}
          <Route path="/income-statement" element={<IncomeStatement />} />
          <Route path="/cash-flow" element={<CashFlow />} />
          <Route path="/financial-ratios" element={<FinancialRatios />} />

          {/ Catch all undefined routes and redirect to balance sheet /}
          <Route path="" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;