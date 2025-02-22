"use client";
import React from "react";
import { useState } from "react";

function FinancialRatio() {

  const [ratios, setRatios] = useState({
 
    // Liquidity Ratios
    currentRatio: "",          
    quickRatio: "",            
    NWCToTA: "",               
  
    // Leverage Ratios
    TDToTA: "",                
    equityMultiplier: "",       
    debtToEquity: "",          
    currentLiabilitiesToTD: "", 
    interestCoverage: "",       
    fixedChargeCoverage: "",    
  
    // Profitability & Efficiency Ratios
    NOPATMargin: "",            
    salesToTA: "",              
    operatingReturnOnAssets: "", 
    ROA: "",                    
    ROE: "",                    
  
    // Breakeven & Cash Flow Metrics
    survivalRevenues: "",      
    cashBurn: "",              
    cashBurnRate: "",          
    cashBuild: "",             
    cashBuildRate: "",         
    netCashBurn: "",           
    netCashBurnRate: "",       
  });
  

  const RatioCard = ({ title, value, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mb-2">
        {typeof value === "number" ? value.toFixed(2) : value}
      </p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const RatioSection = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Financial Ratios</h1>
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Start Over
          </a>
        </div>

        <RatioSection title="Liquidity Ratios">
          <RatioCard
            title="Current Ratio"
            value={ratios.currentRatio}
            description="Measures ability to pay short-term obligations"
          />
          <RatioCard
            title="Quick Ratio"
            value={ratios.quickRatio}
            description="Measures ability to pay short-term obligations without selling inventory"
          />
          <RatioCard
            title="NWC to TA"
            value={ratios.NWCToTA}
            description="Measures the net working capital to total assets"
          />
        </RatioSection>

        <RatioSection title="Profitability & Efficiency Ratios">
          <RatioCard
            title="NOPAT Margin"
            value={ratios.NOPATMargin}
            description="Net operating profit after tax margin"
          />
          <RatioCard
            title="Sales to TA"
            value={ratios.salesToTA}
            description="Sales to total assets ratio"
          />
          <RatioCard
            title="Operating Return on Assets"
            value={ratios.operatingReturnOnAssets}
            description="Operating income to total assets ratio"
          />
          <RatioCard
            title="Return on Assets (ROA)"
            value={ratios.ROA}
            description="How efficiently assets are used to generate profit"
          />
          <RatioCard
            title="Return on Equity (ROE)"
            value={ratios.ROE}
            description="How efficiently shareholder equity is used to generate profit"
          />
        </RatioSection>

        <RatioSection title="Leverage Ratios">
          <RatioCard
            title="Total Debt to Total Assets"
            value={ratios.TDToTA}
            description="Proportion of assets financed by debt"
          />
          <RatioCard
            title="Equity Multiplier"
            value={ratios.equityMultiplier}
            description="Measures the financial leverage of the company"
          />
          <RatioCard
            title="Debt to Equity"
            value={ratios.debtToEquity}
            description="Measures the proportion of debt to equity"
          />
          <RatioCard
            title="Current Liabilities to Total Debt"
            value={ratios.currentLiabilitiesToTD}
            description="Measures the proportion of current liabilities to total debt"
          />
          <RatioCard
            title="Interest Coverage"
            value={ratios.interestCoverage}
            description="Measures the company's ability to pay interest on outstanding debt"
          />
          <RatioCard
            title="Fixed Charge Coverage"
            value={ratios.fixedChargeCoverage}
            description="Measures the company's ability to pay fixed charges"
          />
        </RatioSection>

        <RatioSection title="Breakeven & Cash Flow Metrics">
          <RatioCard
            title="Survival Revenues"
            value={ratios.survivalRevenues}
            description="Minimum revenue required to cover all expenses"
          />
          <RatioCard
            title="Cash Burn"
            value={ratios.cashBurn}
            description="Rate at which a company is using up its cash reserves"
          />
          <RatioCard
            title="Cash Burn Rate"
            value={ratios.cashBurnRate}
            description="Rate at which a company is using up its cash reserves"
          />
          <RatioCard
            title="Cash Build"
            value={ratios.cashBuild}
            description="Rate at which a company is building up its cash reserves"
          />
          <RatioCard
            title="Cash Build Rate"
            value={ratios.cashBuildRate}
            description="Rate at which a company is building up its cash reserves"
          />
          <RatioCard
            title="Net Cash Burn"
            value={ratios.netCashBurn}
            description="Rate at which a company is using up its cash reserves"
          />
          <RatioCard
            title="Net Cash Burn Rate"
            value={ratios.netCashBurnRate}
            description="Rate at which a company is using up its cash reserves"
          />
        </RatioSection>
      </div>
    </div>
  );
}

export default FinancialRatio;