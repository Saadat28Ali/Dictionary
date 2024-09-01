import { useContext, Fragment } from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import MeaningContext from "../contexts/meaningContext";

import "./styles/SearchResults.css";

export default function SearchResults() {

    const meaning = useContext(MeaningContext);

    return (
      <div className="SearchResults" 
      style={{
        flexDirection: "column"
      }}>
        {
          (meaning.getter.word)
          ? (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1, 
                transition: {
                  duration: 0.1
                }
              }}
            >
              {/* <h2 className="ResultHeader"> {meaning.getter.word} </h2> */}
              <Typography variant="h1" sx={{textTransform: "capitalize", marginTop: "50px"}} fontSize={100} gutterBottom> {meaning.getter.word} </Typography>
            </motion.div>
          )
          : (
          // <h2 className="NoResultHeader"> No word searched... </h2>
          <Typography variant="body2" color="neutral" sx={{opacity: 0.5}}> No word searched... </Typography>
        )
        }
        {/* <p>
          {
            (meaning.getter.definition) 
            ? meaning.getter.definition.split("\n").map((section: string, index: number) => {
              return <Fragment key={index}>{section}<br></br></Fragment>;              
            })
            : ""
          } 
        </p> */}
        <Typography variant="body1">
          {
            (meaning.getter.definition) 
            ? meaning.getter.definition.split("\n").map((section: string, index: number) => {
              return <Fragment key={index}>{section}<br></br></Fragment>;              
            })
            : ""
          } 
        </Typography>
      </div>
    );
}