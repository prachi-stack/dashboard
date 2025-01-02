import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import PaymentsTransactionsPage from './pages/PaymentsTransactionsPage';
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from './components/common/Sidebar'

 const App = () => {
   return (
     <div className='flex h-screen bg-brown-800 text-brown-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-brown-900 via-brown-800 via-brown-700 via-brown-600 via-brown-500 via-brown-600 via-brown-700 via-brown-800 to-brown-900 opacity-80'/>
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
				<Route path='/orders' element={<OrdersPage />} />
        <Route path='/payments' element={<PaymentsTransactionsPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
      </Routes>
     </div>
   )
 }
 
 export default App