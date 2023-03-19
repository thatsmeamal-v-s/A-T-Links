import "./App.css"
import Aboutus from "./Components/Aboutus/Aboutus";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-content">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="about">
          <Aboutus/>
        </div>
      </div>
    </div>
  );
}

export default App;
