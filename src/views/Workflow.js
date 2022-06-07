import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';

const Workflow = () => {

  const [running, setRunning] = useState(false);

  return (
    <>
      <FileUploader 
      className="illustration-section-01" setRunning={setRunning}/>
      <KeywordGraph
      />
    </>
  );
}

export default Workflow;