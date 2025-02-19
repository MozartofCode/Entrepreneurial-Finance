# @Author: Bertan Berker
# This is the calculations file for the backend of the project. 
# This file will contain all the calculations that are needed for certain financial metrics
# that we covered in my entrepreneurial finance class


def EBITDA():
    return

def EBDAT():
    return

def EBIT():
    return

# EBDAT Breakeven
def survival_revenues(CFC, VCRR):
    SR = CFC / (1-VCRR)
    return SR

def cash_burn():
    return

def cash_burn_rate():
    return

def cash_build():
    return

def cash_build_rate():
    return

def net_cash_burn(cash_burn, cash_build):
    return cash_burn - cash_build

def net_cash_burn_rate(cash_burn, cash_build, time_period):
    return (cash_burn - cash_build) / time_period


# Liquidity Ratios

def current_ratio():
    return

def quick_ratio():
    return


def NWC_to_TA():
    return

# Leverage Ratios

def TD_to_TA():
    return

def equity_multiplier():
    return

def debt_to_equity():
    return

def current_liabilities_to_TD():
    return

def interest_coverage():
    return

def fixed_charge_coverage(EBITDA, interest, lease_payments, debt_repayments, tax_rate):
    return (EBITDA + lease_payments) / (interest + lease_payments + (debt_repayments / (1-tax_rate)))


# Profitability and Efficiency Ratios

def NOPAT_margin(EBIT, taxes, net_sales):
    return (EBIT * (1-taxes)) / net_sales

def sales_to_TA():
    return

def operating_return_on_assets():
    return

def ROA():
    return

def ROE():
    return