import { useState } from "react";
import BanList from "./components/BanList";
import DiscoverList from "./components/DiscoverList";
import Seen from "./components/Seen";
import './App.css'


function App() {
  const [submit, setSubmit] = useState("")
  return (
    <div className="App">
      <Seen />
      <DiscoverList />
      <BanList />
    </div>
  );
}

export default App;
