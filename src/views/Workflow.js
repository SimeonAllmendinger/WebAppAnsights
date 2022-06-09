import React, { useState } from 'react';
// import sections
import FileUploader from '../components/sections/FileUploader';
import KeywordGraph from '../components/sections/KeywordGraph';
import example_flyer from "../assets/images/scan_examples/example_flyer.jpg";
import example_scan1 from "../assets/images/scan_examples/example_scan.jpg";
import example_scan2 from "../assets/images/scan_examples/example_scan2.jpeg";
import example_scan3 from "../assets/images/scan_examples/example_scan3.jpeg";
import example_scan4 from "../assets/images/scan_examples/example_scan4.jpeg";
import example_scan5 from "../assets/images/scan_examples/example_scan5.jpeg";

const Workflow = () => {

  const [running, setRunning] = useState(false);
  const [nodes, setNodes] = useState([
    { id: "KEY", image: example_flyer, label: "Flugblatt", shape: "image", size: 60, title: "Flugblatt", fixed: true},
    { color: "rgba(204, 129, 0, 0.7)", id: 0, image: example_scan2, label: "0382.hocr", shape: "image", size: 20, url:  'http://www.google.com', title: "1933-01-02--1940-03-30---001-032-008-8449-0382.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(204, 129, 0, 0.7)", id: 1, image: example_scan4, label: "0422.hocr", shape: "image", size: 20, url: 'http://www.google.com', title: "1897-01-02--1903-02-28---001-045-014-9421-0422.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(70, 227, 228, 0.7)", id: 2, image: example_scan1, label: "0372.hocr", shape: "image", size: 20, url: 'http://www.google.com', title: "1922-01-02--1923-12-31---022-036-036-8996-0372.hocr\n Keywords: \nGasarbeiter\nBetriebe" },
    { color: "rgba(184, 0, 152, 0.7)", id: 3, image: example_scan2, label: "0385.hocr", shape: "image", size: 30, url: 'http://www.google.com', title: "1919-01-02--1921-12-31---001-021-001-8961-0385.hocr\n Keywords: \nArbeiter\nArbeitgeber\nBetriebe" },
    { color: "rgba(244, 51, 255, 0.7)", id: 4, image: example_scan5, label: "0380.hocr", shape: "image", size: 30, url: 'http://www.google.com', title: "1903-03-02--1909-05-29---046-089-073-9481-0380.hocr\n Keywords: \nstreiken\nArbeitgeber\nBetriebe" },
    { color: "rgba(0, 62, 211, 0.7)", id: 5, image: example_scan4, label: "0582.hocr", shape: "image", size: 20, url: 'http://www.google.com', title: "1933-01-02--1940-03-30---001-032-025-8466-0582.hocr\n Keywords: \nSorgt\nBetriebe" },
    { color: "rgba(244, 51, 254, 0.7)", id: 6, image: example_scan4, label: "0058.hocr", shape: "image", size: 30, url: 'http://www.google.com', title: "1909-06-01--1916-08-31---090-154-115-9523-0058.hocr\n Keywords: \nstreiken\nArbeitgeber\nBetriebe" },
    { color: "rgba(204, 129, 0, 0.7)", id: 7, image: example_scan3, label: "0431.hocr", shape: "image", size: 20, url: 'http://www.google.com', title: "1916-01-09--1918-12-31---155-167-159-9567-0431.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(254, 255, 150, 0.7)", id: 8, image: example_scan1, label: "0359.hocr", shape: "image", size: 30, url: 'http://www.google.com', title: "1925-10-01--1928-02-29---049-065-049-9009-0359.hocr\n Keywords: \nArbeiter\nstreiken\nGasarbeiter" },
    { color: "rgba(38, 59, 127, 0.7)", id: 9, image: example_scan4, label: "0500.hocr", shape: "image", size: 30, url: 'http://www.google.com', title: "1909-06-01--1916-08-31---090-154-116-9524-0500.hocr\n Keywords: \nSorgt\nArbeiter\nBetriebe" }]);

  const [edges, setEdges] = useState(require("../assets/example_net/edges.json")["edges"])
  const [options, setOptions] = useState(require("../assets/example_net/options.json"));


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