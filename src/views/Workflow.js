import React, { useState } from 'react';
// import sections
import  WorkflowHeader from '../components/sections/WorkflowHeader';
import Viewer from '../components/sections/Viewer';


const Workflow = () => {

  const [running, setRunning] = useState(false);

  return (
    <>
      <WorkflowHeader
        className="illustration-section-01"
        setRunning={setRunning}
        running={running}
      />
      <Viewer
        running={running}
        setRunning={setRunning}
      />
    </>
  );
}

export default Workflow;