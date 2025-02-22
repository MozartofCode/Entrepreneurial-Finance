"use client";
import React, { useState } from "react";

function BalanceSheet() {
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",

    // Assets
    cashAndMarketableSecurities: "",
    receivables: "",
    inventories: "",
    prepaidExpenses: "",
    otherCurrentAssets: "",
    grossEquipment: "",
    accumulatedDepreciation: "",
    netEquipment: "",
    otherLongTermAssets: "",
    totalAssets: "",

    // Liabilities
    payables: "",
    accruedWages: "",
    bankLoans: "",
    otherCurrentLiabilities: "",
    totalCurrentLiabilities: "",
    longTermDebt: "",
    capitalLeases: "",
    deferredTaxLiabilities: "",
    pensionLiabilities: "",
    otherLongTermLiabilities: "",
    totalLongTermLiabilities: "",
    totalLiabilities: "",

    // Equity
    commonStock: "",
    additionalPaidInCapital: "",
    retainedEarnings: "",
    treasuryStock: "",
    ownersequity: "",
    totalLiabilitiesAndEquity: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/store_balance_sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      window.location.href = "/income-statement";
    } catch (err) {
      console.error(err);
      setError("Failed to save balance sheet data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 font-roboto">
          Balance Sheet Input
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-6 rounded-lg shadow"
        >
          {/* Company Information */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />

            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Assets Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 font-roboto">
              Assets
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "cashAndMarketableSecurities",
                "receivables",
                "inventories",
                "prepaidExpenses",
                "otherCurrentAssets",
                "grossEquipment",
                "accumulatedDepreciation",
                "netEquipment",
                "otherLongTermAssets",
                "totalAssets",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Liabilities Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 font-roboto">
              Liabilities
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "payables",
                "accruedWages",
                "bankLoans",
                "otherCurrentLiabilities",
                "totalCurrentLiabilities",
                "longTermDebt",
                "capitalLeases",
                "deferredTaxLiabilities",
                "pensionLiabilities",
                "otherLongTermLiabilities",
                "totalLongTermLiabilities",
                "totalLiabilities",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Equity Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 font-roboto">
              Equity
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "commonStock",
                "additionalPaidInCapital",
                "retainedEarnings",
                "treasuryStock",
                "ownersequity",
                "totalLiabilitiesAndEquity",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Balance Sheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BalanceSheet;
