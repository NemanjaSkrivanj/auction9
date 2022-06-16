import './App.css';
import CreateAuctionForm from './components/CreateAuctionForm';
import { useState, useEffect } from "react";

function App() {

  const [users, setUsers] = useState(null);

  return (
    <div>
      <CreateAuctionForm />
    </div>
  );
}

export default App;