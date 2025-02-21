import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-200">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Balance_Sheet">Balance Sheet</Link></li>
        <li><Link href="/Cashflow_Statement">Cashflow Statement</Link></li>
        <li><Link href="/Income_Statement">Income Statement</Link></li>
        <li><Link href="/Financial_Ratios">Financial Ratios</Link></li>
      </ul>
    </nav>
  );
}
