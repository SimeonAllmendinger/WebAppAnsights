import React, { useState } from 'react';
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';
import Image from '../components/elements/Image';

const Workflow = () => {

  function get_nodes(nodes_array){
    nodes_array.forEach(function (node, index) {
      console.log(node, index);
      //node.set("image", <Image src={require("../assets/images/scan_examples/example_flyer.jpg")}/>);
    });
    
    return nodes_array
  }

  const [running, setRunning] = useState(false);
  const [nodes, setNodes] = useState(get_nodes(require("../assets/example_net/exampleNet1/nodes.json")["nodes"]));
  const [edges, setEdges] = useState(require("../assets/example_net/exampleNet1/edges.json")["edges"]);
  const [options, setOptions] = useState(require("../assets/example_net/exampleNet1/options.json"));

  return (
    <>
      <FileUploader
        className="illustration-section-01"
        setRunning={setRunning}
        running={running}
        setNodes={setNodes}
        setEdges={setEdges}
        setOptions={setOptions}
      />
      <KeywordGraph
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        options={options}
        setOptions={setOptions}
        />
    </>
  );
}

export default Workflow;