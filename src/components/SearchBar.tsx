import { useContext } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

import FetchingContext from "../contexts/fetchingContext";
import MeaningContext from "../contexts/meaningContext";

import { fetchData } from "../scripts/fetchData";
import "./styles/SearchBar.css";

import Fetching from "./Fetching";

export default function SearchBar() {

    const fetching = useContext(FetchingContext);
    const meaning = useContext(MeaningContext);

    function handleSearchFormSubmit(event: any) {
        event.preventDefault();

        fetching.setter(() => {return true});

        fetchData(event.target.querySelector("#searchBarTextInput").value)
        .then((response) => {
          if (response === null) meaning.setter(() => {return {}});
          else meaning.setter(() => {return {...response}});
        })
        .catch(() => {})
        .finally(() => {fetching.setter(() => {return false})});
    }

    return (
        <div className="SearchBar">

            <form onSubmit={handleSearchFormSubmit}>
                {/* <motion.div
                    whileHover={{
                        scale: 1.05, 
                        transition: {
                            duration: 0.05
                        }
                    }}
                >
                    <input id="searchBarTextInput" type="text" placeholder="Enter a word..." defaultValue="Plant"></input>
                </motion.div> */}
                <TextField 
                    id="searchBarTextInput" 
                    variant="outlined" 
                    label="Enter a word..." 
                    color="primary" 
                    focused
                ></TextField>
                <motion.div
                    whileHover={{
                        scale: 1.05, 
                        transition: {
                            duration: 0.05
                        }
                    }} 
                >
                    {/* <button type="submit"> Search </button> */}
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    sx={{
                        marginLeft: "10px", 
                        borderRadius: "10px"
                    }}
                    > 
                        Search 
                    </Button>
                </motion.div>

            </form>

            {/* {(fetching.getter) ? (<span className="FetchingStatus"> Fetching </span>) : <span className="FetchingStatus"></span>} */}
            {(fetching.getter) ? (
                // <motion.div
                //     whileInView={{
                //         transform: "rotate(360deg)", 
                //         transition: {
                //             duration: 1,
                //             repeat: Infinity, 
                //             type: "tween"
                //         }
                //     }}

                //     style={{
                //         marginTop: "50px"
                //     }}
                // >
                //     <Fetching />
                // </motion.div>
                <CircularProgress sx={{marginTop: "10px"}}/>
            ) : <></>}

        </div>
    );
}