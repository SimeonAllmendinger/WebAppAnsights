import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';

const Workflow = () => {

  const [file, setFile] = useState(null);
  console.log(file);

  
  {file !== null ? null:null}

  return (
    <>
      <FileUploader 
      className="illustration-section-01" setFile={setFile}/>
      <KeywordGraph
      />
    </>
  );
}

export default Workflow;