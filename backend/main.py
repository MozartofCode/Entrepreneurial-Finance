# @ Author: Bertan Berker
# 
# This is a simple Flask application 
# that stores balance sheet, cashflow statement and
# income statement data as JSON files and calculates the financial ratios
#
#

import os
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

DATA_FOLDER = "./data"
os.makedirs(DATA_FOLDER, exist_ok=True)

@app.route('/store_balance_sheet', methods=['POST'])
def store_balance_sheet():
    try:
        # Get form data from the request
        form_data = request.form.to_dict()
        
        # Ensure the company_name key exists
        company_name = form_data.get("company_name", "").strip()

        if not company_name:
            return jsonify({"error": "company_name is required"}), 400

        # Generate the filename
        filename = f"{company_name}_balance_sheet.json"
        file_path = os.path.join(DATA_FOLDER, filename)

        # Store form data as JSON
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(form_data, f, indent=4)

        return jsonify({"message": f"Balance sheet stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/store_cashflow_statement', methods=['POST'])
def store_cashflow_statement():
    try:
        # Get form data from the request
        form_data = request.form.to_dict()
        
        # Ensure the company_name key exists
        company_name = form_data.get("company_name", "").strip()
        
        if not company_name:
            return jsonify({"error": "company_name is required"}), 400

        # Generate the filename
        filename = f"{company_name}_cashflow_statement.json"
        file_path = os.path.join(DATA_FOLDER, filename)

        # Store form data as JSON
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(form_data, f, indent=4)

        return jsonify({"message": f"Cashflow Statement stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    
@app.route('/store_income_statement', methods=['POST'])
def store_income_statement():
    try:
        # Get form data from the request
        form_data = request.form.to_dict()
        
        # Ensure the company_name key exists
        company_name = form_data.get("company_name", "").strip()
        
        if not company_name:
            return jsonify({"error": "company_name is required"}), 400

        # Generate the filename
        filename = f"{company_name}_income_statement.json"
        file_path = os.path.join(DATA_FOLDER, filename)

        # Store form data as JSON
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(form_data, f, indent=4)

        return jsonify({"message": f"Income Statement stored successfully as {filename}"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

if __name__ == '__main__':
    app.run(debug=True)