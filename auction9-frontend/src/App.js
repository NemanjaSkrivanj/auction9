import './App.css';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

function App() {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
   }, []);

  return (
    <div>
      <h1>Halo</h1>
      <Button variant="contained">Contained</Button>
      <h1>{users && users.user.map(x => x.first_name)}</h1>
    </div>
  );
}

export default App;