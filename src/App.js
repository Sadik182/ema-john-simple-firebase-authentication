import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
     
     <AuthProvider>
     <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop></Shop>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/review" element={<OrderReview></OrderReview>}/>
          <Route path="/inventory" element={<PrivateRoute><Inventory></Inventory></PrivateRoute>} />
          <Route path="/placeorder" element={<PrivateRoute><PlaceOrder></PlaceOrder></PrivateRoute>}/>
          <Route path="/shipping" element={<PrivateRoute><Shipping></Shipping></PrivateRoute>} />
          <Route path = "/login" element={<Login></Login>} />
          
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </Router>
     </AuthProvider>

    </div>
  );
}

export default App;
