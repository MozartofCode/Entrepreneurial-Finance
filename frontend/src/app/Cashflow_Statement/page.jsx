"use client";
import React, { useState } from "react";

function Cashflow() {
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",

    cashflowFromOperations: {
      netIncome: "",
      depreciation: "",
      increaseInReceivables: "",
      increaseInInventory: "",
      increaseInPayables: "",
      increaseInAccruedWages: "",
      netCashflowFromOperations: "",
    },

    cashflowFromInvestingActivities: {
      increaseInGrossEquipment: "",    
    },

    cashflowFromFinancingActivities: {
      increaseInOtherShortTermLiabilities: "",
      netChangeExcludingCashAccounts: "",
      beginningCash: "",
      endingCash: "",
    },
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/store_cashflow_statement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      window.location.href = "/Financial_Ratios";
    } catch (err) {
      console.error(err);
      setError("Failed to save data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-roboto">
          Cash Flow Statement
        </h1>

        {error && <div className="text-red-600 text-sm">{error}</div>}

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
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />

            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Operating Activities */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
              Operating Activities
            </h2>
            <div className="grid gap-4">
              {Object.keys(formData.cashflowFromOperations).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData.cashflowFromOperations[field]}
                    onChange={(e) =>
                      handleInputChange("cashflowFromOperations", field, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Investing Activities */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
              Investing Activities
            </h2>
            <div className="grid gap-4">
              {Object.keys(formData.cashflowFromInvestingActivities).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData.cashflowFromInvestingActivities[field]}
                    onChange={(e) =>
                      handleInputChange("cashflowFromInvestingActivities", field, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Financing Activities */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
              Financing Activities
            </h2>
            <div className="grid gap-4">
              {Object.keys(formData.cashflowFromFinancingActivities).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={formData.cashflowFromFinancingActivities[field]}
                    onChange={(e) =>
                      handleInputChange("cashflowFromFinancingActivities", field, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save and Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cashflow;
