import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const OrdersList = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	// Handle search functionality
	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-brown-700 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-brown-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			{/* Search Bar */}
			<div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-brown-100 mb-4 sm:mb-0'>Order List</h2>
				<div className='relative w-full sm:w-auto'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-brown-600 text-white placeholder-brown-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-brown-400' size={18} />
				</div>
			</div>

			{/* Card List */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{filteredOrders.map((order) => (
					<motion.div
						key={order.id}
						className='bg-brown-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-start'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						{/* Order Card Content */}
						<h3 className='text-lg font-semibold text-brown-100 mb-2'>{order.id}</h3>
						<p className='text-sm text-brown-200 mb-4'>{order.customer}</p>
						<div className='mb-4'>
							<p className='text-sm text-brown-300'>Amount: ${order.total.toFixed(2)}</p>
							<p className='text-sm text-brown-300'>Date: {order.date}</p>
						</div>
						<span
							className={`px-2 inline-flex text-xs font-semibold rounded-full ${
								order.status === "Delivered"
									? "bg-green-100 text-green-800"
									: order.status === "Processing"
									? "bg-yellow-100 text-yellow-800"
									: order.status === "Shipped"
									? "bg-blue-100 text-blue-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							Status: {order.status}
						</span>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default OrdersList;
