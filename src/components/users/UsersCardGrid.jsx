import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
    { id: 1, name: "Aarav Patel", email: "aarav@example.com", role: "Customer", status: "Active", joinDate: "2022-03-15", lastLogin: "2023-11-28" },
    { id: 2, name: "Meera Sharma", email: "meera@example.com", role: "Admin", status: "Active", joinDate: "2021-06-20", lastLogin: "2023-12-01" },
    { id: 3, name: "Rajesh Kumar", email: "rajesh@example.com", role: "Customer", status: "Inactive", joinDate: "2023-01-10", lastLogin: "2023-10-05" },
    { id: 4, name: "Priya Singh", email: "priya@example.com", role: "Customer", status: "Active", joinDate: "2022-09-05", lastLogin: "2023-12-02" },
    { id: 5, name: "Ravi Verma", email: "ravi@example.com", role: "Moderator", status: "Active", joinDate: "2020-12-12", lastLogin: "2023-11-29" },
    { id: 6, name: "Sita Nair", email: "sita@example.com", role: "Customer", status: "Active", joinDate: "2023-02-15", lastLogin: "2023-11-30" },
    { id: 7, name: "Arjun Gupta", email: "arjun@example.com", role: "Admin", status: "Inactive", joinDate: "2022-11-22", lastLogin: "2023-09-15" },
    { id: 8, name: "Ananya Reddy", email: "ananya@example.com", role: "Customer", status: "Active", joinDate: "2021-05-10", lastLogin: "2023-12-03" }
];

const UsersCardGrid = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    return (
        <motion.div
            className="bg-brown-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-brown-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            {/* Search Bar */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-brown-100">Users</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="bg-brown-700 text-white placeholder-brown-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className="absolute left-3 top-2.5 text-brown-400" size={18} />
                </div>
            </div>

            {/* User Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredUsers.map((user) => (
                    <motion.div
                        key={user.id}
                        className="bg-brown-700 p-4 rounded-lg shadow-md border border-brown-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                                {user.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-brown-100">{user.name}</div>
                                <div className="text-xs text-brown-300">{user.email}</div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                                {user.role}
                            </span>
                        </div>
                        <div className="mb-4">
                            <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    user.status === "Active"
                                        ? "bg-green-800 text-green-100"
                                        : "bg-red-800 text-red-100"
                                }`}
                            >
                                {user.status}
                            </span>
                        </div>
                        <div className="text-sm mb-2">
                            <div className="text-xs text-brown-400">Joined: {new Date(user.joinDate).toLocaleDateString()}</div>
                            <div className="text-xs text-brown-400">Last Login: {new Date(user.lastLogin).toLocaleDateString()}</div>
                        </div>
                        <div>
                            <button className="text-indigo-400 hover:text-indigo-300 mr-2">Edit</button>
                            <button className="text-red-400 hover:text-red-300">Delete</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default UsersCardGrid;
