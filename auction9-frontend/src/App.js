import './App.css';
import CreateAuctionForm from './components/CreateAuctionForm';
import { useState, useEffect } from "react";
import LandingPage from './dashboard/LandingPage';

function App() {

  const [users, setUsers] = useState(null);

  return (
    <div>
      <LandingPage />
      <CreateAuctionForm />
    </div>
  );
}

export default App;