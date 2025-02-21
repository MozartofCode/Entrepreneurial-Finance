"use client";
import React from "react";
import { useState } from "react";

function Cashflow() {
  const [formData, setFormData] = useState({
    operatingActivities: {
      cashFromOperations: "",
      workingCapitalChanges: "",
    },
    investingActivities: {
      capitalExpenditures: "",
      investmentActivity: "",
    },
    financingActivities: {
      debtActivity: "",
      equityActivity: "",
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
      const response = await fetch("/api/cash-flow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      window.location.href = "/financial-ratios";
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

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-6 rounded-lg shadow"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
                Operating Activities
              </h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cash from Operations
                  </label>
                  <input
                    type="number"
                    name="cashFromOperations"
                    value={formData.operatingActivities.cashFromOperations}
                    onChange={(e) =>
                      handleInputChange(
                        "operatingActivities",
                        "cashFromOperations",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Changes in Working Capital
                  </label>
                  <input
                    type="number"
                    name="workingCapitalChanges"
                    value={formData.operatingActivities.workingCapitalChanges}
                    onChange={(e) =>
                      handleInputChange(
                        "operatingActivities",
                        "workingCapitalChanges",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
                Investing Activities
              </h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Capital Expenditures
                  </label>
                  <input
                    type="number"
                    name="capitalExpenditures"
                    value={formData.investingActivities.capitalExpenditures}
                    onChange={(e) =>
                      handleInputChange(
                        "investingActivities",
                        "capitalExpenditures",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Investment Purchases/Sales
                  </label>
                  <input
                    type="number"
                    name="investmentActivity"
                    value={formData.investingActivities.investmentActivity}
                    onChange={(e) =>
                      handleInputChange(
                        "investingActivities",
                        "investmentActivity",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 font-roboto">
                Financing Activities
              </h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Debt Issuance/Repayment
                  </label>
                  <input
                    type="number"
                    name="debtActivity"
                    value={formData.financingActivities.debtActivity}
                    onChange={(e) =>
                      handleInputChange(
                        "financingActivities",
                        "debtActivity",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equity Issuance/Repurchases
                  </label>
                  <input
                    type="number"
                    name="equityActivity"
                    value={formData.financingActivities.equityActivity}
                    onChange={(e) =>
                      handleInputChange(
                        "financingActivities",
                        "equityActivity",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

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