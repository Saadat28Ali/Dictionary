import './App.css'

import Header from "./components/Header";
import Pane from './components/Pane';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import { motion } from "framer-motion";

function App() {

  return (
    <div className="App">
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1, 
        transition: {
          duration: 0.5
        }
      }}
      >
        <div className="ContentRow">
          <div className="Left">
            <Header />
            <SearchBar />
          </div>
          <div className="Right">
            <SearchResults />
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default App;
