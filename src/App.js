import './App.scss';
import {Header} from "./components/layout/Header/Header";
import {Container} from "./components/layout/Container/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Container/>
    </Router>
  );
}

export default App;
