import react, { useState } from "react";
import "./css/App.css";
import Header from "./Header";

import MainBody from "./MainBody";
import Note from "./Notes";
import Footer from "./Footer";

const App = () => {
  const [addItem, newAddItem]=useState([]);
 
  const addNote = (curdata) => {
   
    newAddItem((olddata) => {
      return [...olddata,curdata];
    });
   
  };
 
  // deleticomponentent

  const onDelete = (id) => {
     
    newAddItem((olddata) => {
      olddata.filter((curdata, indx) => {
        return indx!== id;
      });
    });
  };
  return (
    <>
      <Header />


      <MainBody passNote={addNote} />

      
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })};

      <Footer />
    </>
  );
};

export default App;
