# @ Author: Bertan Berker
# 
# Flask application to store balance sheet, cashflow statement, 
# and income statement data as JSON files and calculate financial ratios
#

import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins


DATA_FOLDER = "../data"
os.makedirs(DATA_FOLDER, exist_ok=True)

def save_data(data, filename):
    """Helper function to save JSON data to a file."""
    try:
        file_path = os.path.join(DATA_FOLDER, filename)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)
            print(f"Saving data to: {file_path}")  # Debugging line
        return True
    except Exception as e:
        return str(e)


@app.route('/store_balance_sheet', methods=['POST'])
def store_balance_sheet():

    print('HEREEEE')

    try:
        # Parse JSON from request
        form_data = request.get_json()

        # Ensure required fields exist
        company_name = form_data.get("companyName", "").strip()
        year = form_data.get("year", "").strip()

        if not company_name or not year:
            return jsonify({"error": "companyName and year are required"}), 400

        # Generate filename
        filename = f"{company_name}_{year}_balance_sheet.json"

        # Save the data
        save_status = save_data(form_data, filename)
        if save_status is not True:
            return jsonify({"error": save_status}), 500
        print("Success")
        return jsonify({"message": f"Balance sheet stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/store_cashflow_statement', methods=['POST'])
def store_cashflow_statement():
    try:
        # Parse JSON from request
        form_data = request.get_json()

        # Ensure required fields exist
        company_name = form_data.get("companyName", "").strip()
        year = form_data.get("year", "").strip()

        if not company_name or not year:
            return jsonify({"error": "companyName and year are required"}), 400

        # Generate filename
        filename = f"{company_name}_{year}_cashflow_statement.json"

        # Save the data
        save_status = save_data(form_data, filename)
        if save_status is not True:
            return jsonify({"error": save_status}), 500

        return jsonify({"message": f"Cashflow statement stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/store_income_statement', methods=['POST'])
def store_income_statement():
    try:
        # Parse JSON from request
        form_data = request.get_json()

        # Ensure required fields exist
        company_name = form_data.get("companyName", "").strip()
        year = form_data.get("year", "").strip()

        if not company_name or not year:
            return jsonify({"error": "companyName and year are required"}), 400

        # Generate filename
        filename = f"{company_name}_{year}_income_statement.json"

        # Save the data
        save_status = save_data(form_data, filename)
        if save_status is not True:
            return jsonify({"error": save_status}), 500

        return jsonify({"message": f"Income statement stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/calculate_financial_ratios', methods=['POST'])
def calculate_financial_ratios():
    try:
        data = request.get_json()
        company_name = data.get("companyName", "").strip()
        year = data.get("year", "").strip()

        if not company_name or not year:
            return jsonify({"error": "companyName and year are required"}), 400

        # Load saved data
        balance_file = os.path.join(DATA_FOLDER, f"{company_name}_{year}_balance_sheet.json")
        income_file = os.path.join(DATA_FOLDER, f"{company_name}_{year}_income_statement.json")
        cashflow_file = os.path.join(DATA_FOLDER, f"{company_name}_{year}_cashflow_statement.json")

        if not os.path.exists(balance_file) or not os.path.exists(income_file):
            return jsonify({"error": "Balance sheet or income statement missing"}), 404

        with open(balance_file, "r", encoding="utf-8") as f:
            balance_data = json.load(f)
        
        with open(income_file, "r", encoding="utf-8") as f:
            income_data = json.load(f)

        # Extract relevant financial data
        try:
            total_assets = float(balance_data.get("totalAssets", 0))
            total_liabilities = float(balance_data.get("totalLiabilities", 0))
            equity = float(balance_data.get("ownersequity", 0))
            net_income = float(income_data.get("netIncome", 0))
            sales = float(income_data.get("salesRevenue", 0))
            cogs = float(income_data.get("costOfGoodsSold", 0))
            ebit = float(income_data.get("EBIT", 0))

            # Calculate financial ratios
            ratios = {
                "current_ratio": round(float(balance_data.get("totalCurrentAssets", 1)) / float(balance_data.get("totalCurrentLiabilities", 1)), 2),
                "debt_to_equity": round(total_liabilities / equity, 2) if equity > 0 else "N/A",
                "gross_margin": round((sales - cogs) / sales, 2) if sales > 0 else "N/A",
                "operating_margin": round(ebit / sales, 2) if sales > 0 else "N/A",
                "return_on_assets": round(net_income / total_assets, 2) if total_assets > 0 else "N/A",
                "return_on_equity": round(net_income / equity, 2) if equity > 0 else "N/A",
            }

            return jsonify({"companyName": company_name, "year": year, "financialRatios": ratios}), 200
        
        except ValueError:
            return jsonify({"error": "Invalid numeric data in financial statements"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)