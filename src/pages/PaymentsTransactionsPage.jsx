import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const transactionData = [
  {
    id: "TXN001",
    date: "2023-07-01",
    amount: 150.75,
    status: "Completed",
    method: "Credit Card",
  },
  {
    id: "TXN002",
    date: "2023-07-02",
    amount: 75.50,
    status: "Pending",
    method: "PayPal",
  },
  {
    id: "TXN003",
    date: "2023-07-03",
    amount: 200.00,
    status: "Failed",
    method: "Bank Transfer",
  },
  {
    id: "TXN004",
    date: "2023-07-04",
    amount: 350.40,
    status: "Completed",
    method: "Credit Card",
  },
  {
    id: "TXN005",
    date: "2023-07-05",
    amount: 500.25,
    status: "Pending",
    method: "Stripe",
  },
];

const PaymentsTransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTransactions = transactionData.filter((transaction) =>
    transaction.id.toLowerCase().includes(searchTerm) ||
    transaction.method.toLowerCase().includes(searchTerm)
  );

  const statusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="text-green-500" size={20} />;
      case "Pending":
        return <XCircle className="text-yellow-500" size={20} />;
      case "Failed":
        return <XCircle className="text-red-500" size={20} />;
      default:
        return null;
    }
  };

  const statusCounts = filteredTransactions.reduce(
    (acc, transaction) => {
      if (transaction.status === "Completed") acc.completed += 1;
      if (transaction.status === "Pending") acc.pending += 1;
      if (transaction.status === "Failed") acc.failed += 1;
      return acc;
    },
    { completed: 0, pending: 0, failed: 0 }
  );

  const pieData = [
    { name: "Completed", value: statusCounts.completed, fill: "#28a745" },
    { name: "Pending", value: statusCounts.pending, fill: "#ffc107" },
    { name: "Failed", value: statusCounts.failed, fill: "#dc3545" },
  ];

  return (
    <div className="bg-brown-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 h-screen overflow-y-auto">
      <h2 className="text-xl font-semibold text-brown-100 mb-6">Payments & Transactions</h2>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search transactions..."
          className="bg-brown-700 text-white placeholder-brown-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Cards for Transactions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-brown-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-brown-100">Transaction ID: {transaction.id}</h3>
              {statusIcon(transaction.status)}
            </div>
            <p className="text-brown-300">Date: {transaction.date}</p>
            <p className="text-brown-300">Amount: Rs.{transaction.amount.toFixed(2)}</p>
            <p className="text-brown-300">Payment Method: {transaction.method}</p>

            <div
              className={`mt-4 px-4 py-2 rounded-lg ${
                transaction.status === "Completed"
                  ? "bg-green-500"
                  : transaction.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } text-white text-center`}
            >
              {transaction.status}
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart for Transaction Status */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-brown-100 mb-4">Transaction Status Breakdown</h3>
        <div className="bg-brown-700 p-6 rounded-lg shadow-lg">
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={5}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTransactionsPage;
