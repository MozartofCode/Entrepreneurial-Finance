"use client";
import React, { useState } from "react";

function IncomeStatement() {
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",

    // Revenue
    salesRevenue: "",
    otherRevenue: "",
    totalRevenue: "",

    // Expenses
    costOfGoodsSold: "",
    salariesAndWages: "",
    marketingExpenses: "",
    administrativeExpenses: "",
    researchAndDevelopment: "",
    buildingRental: "",
    depreciationExpense: "",
    interestExpense: "",
    taxExpense: "",

    // Calculated Fields
    grossEarnings: "",
    EBIT: "",
    earningsBeforeTaxes: "",
    netIncome: "",
  });

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
      const response = await fetch("/store_income_statement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      window.location.href = "/cash-flow";
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 font-roboto">
          Income Statement Input
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-8"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Revenue Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">
              Revenue
            </h2>
            <div className="grid gap-4">
              {["salesRevenue", "otherRevenue", "totalRevenue"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Expenses Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">
              Expenses
            </h2>
            <div className="grid gap-4">
              {[
                "costOfGoodsSold",
                "salariesAndWages",
                "marketingExpenses",
                "administrativeExpenses",
                "researchAndDevelopment",
                "buildingRental",
                "depreciationExpense",
                "interestExpense",
                "taxExpense",
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
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Calculations Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">
              Net Earnings
            </h2>
            <div className="grid gap-4">
              {["grossEarnings", "EBIT", "earningsBeforeTaxes", "netIncome"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit and Continue to Cash Flow
          </button>
        </form>
      </div>
    </div>
  );
}

export default IncomeStatement;
