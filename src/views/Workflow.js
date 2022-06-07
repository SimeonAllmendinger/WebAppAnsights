import React, { useState } from 'react';
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';

const Workflow = () => {

  const [running, setRunning] = useState(false);

  const nodes = [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
  ];

  const edges = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 }
  ];

  const options = {};

  return (
    <>
      <FileUploader
        className="illustration-section-01"
        setRunning={setRunning}
        running={running} 
        />
      <KeywordGraph
        nodes={nodes}
        edges={edges}
        options={options} 
        />
    </>
  );
}

export default Workflow;