import Main from "./Main";
import Sidebar from "./Sidebar";
import Config from "./config.json";
import "./index.css";

const App = () => (
  <div className="container">
    <Sidebar Data={Config.Sidebar} />
    <Main Data={Config.Sidebar} />
  </div>
);
export default App;
