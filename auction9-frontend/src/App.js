import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(user => setUser(user));
   }, []);

   console.log(user);

  return (
    <div>
    <h1>Hello, world</h1>
    <Button variant="contained">COnfirm</Button>
    </div>
  );
}

export default App;
