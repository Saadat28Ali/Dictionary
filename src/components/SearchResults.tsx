import { useContext, Fragment } from "react";
import { motion } from "framer-motion";

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
              <h2 className="ResultHeader"> {meaning.getter.word} </h2>
            </motion.div>
          )
          : (<h2 className="NoResultHeader"> No word searched... </h2>)
        }
        <p>
          {
            (meaning.getter.definition) 
            ? meaning.getter.definition.split("\n").map((section: string, index: number) => {
              return <Fragment key={index}>{section}<br></br></Fragment>;              
            })
            : ""
          } 
        </p>
      </div>
    );
}