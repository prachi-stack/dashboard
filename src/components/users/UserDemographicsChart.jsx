import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

// Custom color palette for the chart
const COLORS = ["#f57c00", "#0288d1", "#8bc34a", "#c2185b", "#7b1fa2"];

const userDemographicsData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 30 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

const UserDemographicsChart = () => (
  <motion.div
    className="bg-brown-600 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-brown-500 lg:col-span-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <h2 className="text-xl font-semibold text-brown-100 mb-4">User Demographics</h2>
    <div className="chart-container" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={userDemographicsData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {userDemographicsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#3b251e",
              borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default UserDemographicsChart;