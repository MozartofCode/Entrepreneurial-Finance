"use client";
import React from "react";

function MainComponent() {
  const [ratios, setRatios] = useState({
    currentRatio: 2.5,
    quickRatio: 1.8,
    grossMargin: 0.45,
    operatingMargin: 0.25,
    netProfitMargin: 0.18,
    roa: 0.12,
    roe: 0.15,
    assetTurnover: 1.2,
    inventoryTurnover: 6.5,
    debtToEquity: 0.8,
    timesInterestEarned: 8.4,
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
        </RatioSection>

        <RatioSection title="Profitability Ratios">
          <RatioCard
            title="Gross Margin"
            value={ratios.grossMargin}
            description="Percentage of revenue retained after cost of goods sold"
          />
          <RatioCard
            title="Operating Margin"
            value={ratios.operatingMargin}
            description="Percentage of revenue retained after operating expenses"
          />
          <RatioCard
            title="Net Profit Margin"
            value={ratios.netProfitMargin}
            description="Percentage of revenue retained after all expenses"
          />
          <RatioCard
            title="Return on Assets (ROA)"
            value={ratios.roa}
            description="How efficiently assets are used to generate profit"
          />
          <RatioCard
            title="Return on Equity (ROE)"
            value={ratios.roe}
            description="How efficiently shareholder equity is used to generate profit"
          />
        </RatioSection>

        <RatioSection title="Efficiency Ratios">
          <RatioCard
            title="Asset Turnover"
            value={ratios.assetTurnover}
            description="How efficiently assets are used to generate revenue"
          />
          <RatioCard
            title="Inventory Turnover"
            value={ratios.inventoryTurnover}
            description="How many times inventory is sold and replaced"
          />
        </RatioSection>

        <RatioSection title="Leverage Ratios">
          <RatioCard
            title="Debt to Equity"
            value={ratios.debtToEquity}
            description="Proportion of debt to equity used to finance assets"
          />
          <RatioCard
            title="Times Interest Earned"
            value={ratios.timesInterestEarned}
            description="Ability to meet interest payments on debt"
          />
        </RatioSection>
      </div>
    </div>
  );
}

export default MainComponent;