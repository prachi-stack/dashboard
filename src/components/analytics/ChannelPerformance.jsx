import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const channelData = [
    { name: "Web Traffic", value: 5200 },
    { name: "Mobile App", value: 1800 },
    { name: "Emails", value: 1200 },
    { name: "Affiliate Marketing", value: 3400 },
    { name: "Social Media", value: 4500 },
    { name: "Influencer Marketing", value: 2300 },
  ];
const COLORS = ["#f56b00", "#00bcd4", "#ff5722", "#4caf50", "#9c27b0", "#3f51b5"];

const ChannelPerformance = () => {
	return (
		<motion.div
			className='bg-brown-600 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-brown-600'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-brown-100 mb-4'>Channel Performance</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={channelData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{channelData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "#f3eae7",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#241511" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ChannelPerformance;