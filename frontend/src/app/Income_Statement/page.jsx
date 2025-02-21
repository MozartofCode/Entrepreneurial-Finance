"use client";
import React from "react";
import { useState } from "react";


function IncomeStatement() {
  const [formData, setFormData] = useState({
    salesRevenue: "",
    otherRevenue: "",
    costOfGoodsSold: "",
    operatingExpenses: "",
    interestExpense: "",
    taxExpense: "",
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
      const response = await fetch("/api/income-statement", {
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
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">
              Revenue
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="salesRevenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sales Revenue
                </label>
                <input
                  type="number"
                  name="salesRevenue"
                  id="salesRevenue"
                  value={formData.salesRevenue}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter sales revenue"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="otherRevenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Other Revenue
                </label>
                <input
                  type="number"
                  name="otherRevenue"
                  id="otherRevenue"
                  value={formData.otherRevenue}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter other revenue"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">
              Expenses
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="costOfGoodsSold"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost of Goods Sold
                </label>
                <input
                  type="number"
                  name="costOfGoodsSold"
                  id="costOfGoodsSold"
                  value={formData.costOfGoodsSold}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter cost of goods sold"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="operatingExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Operating Expenses
                </label>
                <input
                  type="number"
                  name="operatingExpenses"
                  id="operatingExpenses"
                  value={formData.operatingExpenses}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter operating expenses"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="interestExpense"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest Expense
                </label>
                <input
                  type="number"
                  name="interestExpense"
                  id="interestExpense"
                  value={formData.interestExpense}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter interest expense"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="taxExpense"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tax Expense
                </label>
                <input
                  type="number"
                  name="taxExpense"
                  id="taxExpense"
                  value={formData.taxExpense}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter tax expense"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit and Continue to Cash Flow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IncomeStatement;