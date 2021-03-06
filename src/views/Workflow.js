import React, { useState } from 'react';
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';

import scan1 from '../assets/images/scan_examples/example_scan1.jpeg'
import scan2 from '../assets/images/scan_examples/example_scan2.jpeg'
import scan3 from '../assets/images/scan_examples/example_scan3.jpeg'
import scan4 from '../assets/images/scan_examples/example_scan4.jpeg'
import scan5 from '../assets/images/scan_examples/example_scan5.jpeg'
import scan6 from '../assets/images/scan_examples/example_scan6.jpeg'
import scan7 from '../assets/images/scan_examples/example_scan7.jpeg'
const scans = [scan1, scan2, scan3, scan4, scan5, scan6, scan7]
const Workflow = () => {

  const [flyer, setFlyer] = useState(require('../assets/images/scan_examples/example_flyer1.jpeg'));

  function get_nodes(nodes_array, flyer_img) {
    let img_id
    let int
    nodes_array.forEach(function (node, index) {
      img_id = node['id']
      if (img_id === 'KEY') {
        node['image'] = flyer_img
      }
      else {
        int = parseInt(img_id)
        node['image'] = scans[int % scans.length]
      }
    });
    return nodes_array
  }

  const [running, setRunning] = useState(false);
  const [nodes, setNodes] = useState(get_nodes(require("../assets/example_net/exampleNet1/nodes.json")["nodes"], flyer));
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
        get_nodes={get_nodes}
        flyer={flyer}
        setFlyer={setFlyer}
      />
      <KeywordGraph
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        options={options}
        setOptions={setOptions}
        running={running}
        setRunning={setRunning}
        get_nodes={get_nodes}
        flyer={flyer}
        setFlyer={setFlyer}
      />
    </>
  );
}

export default Workflow;