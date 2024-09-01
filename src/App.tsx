import './App.css'

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

const theme = createTheme({
  colorSchemes: {
    dark: true, 
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
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
              {/* <Header /> */}
              <Typography variant="h2" gutterBottom fontSize={50} fontWeight={500}> Dictionary </Typography>
              <SearchBar />
            </div>
            <div className="Right">
              <SearchResults />
            </div>
          </div>
        </motion.div>

      </div>
    </ThemeProvider>
  );
}

export default App;
