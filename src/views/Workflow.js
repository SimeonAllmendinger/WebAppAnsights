import React, { useState } from 'react';
// import sections
import FileUploader from '../components/sections/FileUploader';
import Webcam from '../components/sections/Webcam';


const Workflow = () => {

  const [running, setRunning] = useState(false);

  return (
    <>
      <FileUploader
        className="illustration-section-01"
        setRunning={setRunning}
        running={running}
      />
      <Webcam
        running={running}
        setRunning={setRunning}
      />
    </>
  );
}

export default Workflow;