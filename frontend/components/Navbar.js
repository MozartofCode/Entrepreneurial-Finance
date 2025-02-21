import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-200">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/balance-sheet">Balance Sheet</Link></li>
        <li><Link href="/income-statement">Income Statement</Link></li>
        <li><Link href="/cashflow-statement">Cash Flow</Link></li>
        <li><Link href="/financial-ratios">Financial Ratios</Link></li>
      </ul>
    </nav>
  );
}
