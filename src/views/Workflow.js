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
import example_scan6 from "../assets/images/scan_examples/example_scan6.jpeg";
import example_scan7 from "../assets/images/scan_examples/example_scan7.jpeg";

const Workflow = () => {

  const [running, setRunning] = useState(false);
  const [nodes, setNodes] = useState([
    { id: "KEY", image: example_flyer, label: "Flugblatt", shape: "image", size: 60, title: "Flugblatt" },
    { color: "rgba(204, 129, 0, 0.7)", id: 0, image: example_scan2, label: "0382.hocr", shape: "image", size: 20, title: "1933-01-02--1940-03-30---001-032-008-8449-0382.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(204, 129, 0, 0.7)", id: 1, image: example_scan4, label: "0422.hocr", shape: "image", size: 20, title: "1897-01-02--1903-02-28---001-045-014-9421-0422.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(70, 227, 228, 0.7)", id: 2, image: example_scan1, label: "0372.hocr", shape: "image", size: 20, title: "1922-01-02--1923-12-31---022-036-036-8996-0372.hocr\n Keywords: \nGasarbeiter\nBetriebe" },
    { color: "rgba(184, 0, 152, 0.7)", id: 3, image: example_scan2, label: "0385.hocr", shape: "image", size: 30, title: "1919-01-02--1921-12-31---001-021-001-8961-0385.hocr\n Keywords: \nArbeiter\nArbeitgeber\nBetriebe" },
    { color: "rgba(244, 51, 255, 0.7)", id: 4, image: example_scan5, label: "0380.hocr", shape: "image", size: 30, title: "1903-03-02--1909-05-29---046-089-073-9481-0380.hocr\n Keywords: \nstreiken\nArbeitgeber\nBetriebe" },
    { color: "rgba(0, 62, 211, 0.7)", id: 5, image: example_scan4, label: "0582.hocr", shape: "image", size: 20, title: "1933-01-02--1940-03-30---001-032-025-8466-0582.hocr\n Keywords: \nSorgt\nBetriebe" },
    { color: "rgba(244, 51, 254, 0.7)", id: 6, image: example_scan4, label: "0058.hocr", shape: "image", size: 30, title: "1909-06-01--1916-08-31---090-154-115-9523-0058.hocr\n Keywords: \nstreiken\nArbeitgeber\nBetriebe" },
    { color: "rgba(204, 129, 0, 0.7)", id: 7, image: example_scan3, label: "0431.hocr", shape: "image", size: 20, title: "1916-01-09--1918-12-31---155-167-159-9567-0431.hocr\n Keywords: \nauszumachen\nArbeiter" },
    { color: "rgba(254, 255, 150, 0.7)", id: 8, image: example_scan1, label: "0359.hocr", shape: "image", size: 30, title: "1925-10-01--1928-02-29---049-065-049-9009-0359.hocr\n Keywords: \nArbeiter\nstreiken\nGasarbeiter" },
    { color: "rgba(38, 59, 127, 0.7)", id: 9, image: example_scan7, label: "0500.hocr", shape: "image", size: 30, title: "1909-06-01--1916-08-31---090-154-116-9524-0500.hocr\n Keywords: \nSorgt\nArbeiter\nBetriebe" }]);

  const [edges, setEdges] = useState([
    { from: 1, length: 1, smooth: false, title: "Arbeiter,\nauszumachen", to: 0, value: 2, weight: 1.0 },
    { from: 3, length: 76, smooth: false, title: "Arbeiter", to: 0, value: 1, weight: 0.25 },
    { from: 3, length: 76, smooth: false, title: "Arbeiter", to: 1, value: 1, weight: 0.25 },
    { from: 3, length: 76, smooth: false, title: "Betriebe", to: 2, value: 1, weight: 0.25 },
    { from: 4, length: 76, smooth: false, title: "Betriebe", to: 2, value: 1, weight: 0.25 },
    { from: 4, length: 51, smooth: false, title: "Arbeitgeber,\nBetriebe", to: 3, value: 2, weight: 0.5 },
    { from: 5, length: 67, smooth: false, title: "Betriebe", to: 2, value: 1, weight: 0.3333333333333333 },
    { from: 5, length: 76, smooth: false, title: "Betriebe", to: 3, value: 1, weight: 0.25 },
    { from: 5, length: 76, smooth: false, title: "Betriebe", to: 4, value: 1, weight: 0.25 },
    { from: 6, length: 76, smooth: false, title: "Betriebe", to: 2, value: 1, weight: 0.25 },
    { from: 6, length: 51, smooth: false, title: "Arbeitgeber,\nBetriebe", to: 3, value: 2, weight: 0.5 },
    { from: 6, length: 1, smooth: false, title: "Betriebe,\nstreiken,\nArbeitgeber", to: 4, value: 3, weight: 1.0 },
    { from: 6, length: 76, smooth: false, title: "Betriebe", to: 5, value: 1, weight: 0.25 },
    { from: 7, length: 1, smooth: false, title: "Arbeiter,\nauszumachen", to: 0, value: 2, weight: 1.0 },
    { from: 7, length: 1, smooth: false, title: "Arbeiter,\nauszumachen", to: 1, value: 2, weight: 1.0 },
    { from: 7, length: 76, smooth: false, title: "Arbeiter", to: 3, value: 1, weight: 0.25 },
    { from: 8, length: 76, smooth: false, title: "Arbeiter", to: 0, value: 1, weight: 0.25 },
    { from: 8, length: 76, smooth: false, title: "Arbeiter", to: 1, value: 1, weight: 0.25 },
    { from: 8, length: 76, smooth: false, title: "Gasarbeiter", to: 2, value: 1, weight: 0.25 },
    { from: 8, length: 81, smooth: false, title: "Arbeiter", to: 3, value: 1, weight: 0.2 },
    { from: 8, length: 81, smooth: false, title: "streiken", to: 4, value: 1, weight: 0.2 },
    { from: 8, length: 81, smooth: false, title: "streiken", to: 6, value: 1, weight: 0.2 },
    { from: 8, length: 76, smooth: false, title: "Arbeiter", to: 7, value: 1, weight: 0.25 },
    { from: 9, length: 76, smooth: false, title: "Arbeiter", to: 0, value: 1, weight: 0.25 },
    { from: 9, length: 76, smooth: false, title: "Arbeiter", to: 1, value: 1, weight: 0.25 },
    { from: 9, length: 76, smooth: false, title: "Betriebe", to: 2, value: 1, weight: 0.25 },
    { from: 9, length: 51, smooth: false, title: "Arbeiter,\nBetriebe", to: 3, value: 2, weight: 0.5 },
    { from: 9, length: 81, smooth: false, title: "Betriebe", to: 4, value: 1, weight: 0.2 },
    { from: 9, length: 34, smooth: false, title: "Sorgt,\nBetriebe", to: 5, value: 2, weight: 0.6666666666666666 },
    { from: 9, length: 81, smooth: false, title: "Betriebe", to: 6, value: 1, weight: 0.2 },
    { from: 9, length: 76, smooth: false, title: "Arbeiter", to: 7, value: 1, weight: 0.25 },
    { from: 9, length: 81, smooth: false, title: "Arbeiter", to: 8, value: 1, weight: 0.2 },
    { color: null, "from": 0, smooth: false, title: "auszumachen,Arbeiter", to: "KEY", value: 2, weight: 2 },
    { color: null, "from": 1, smooth: false, title: "auszumachen,Arbeiter", to: "KEY", value: 2, weight: 2 },
    { color: null, "from": 2, smooth: false, title: "Gasarbeiter,Betriebe", to: "KEY", value: 2, weight: 2 },
    { color: null, "from": 3, smooth: false, title: "Arbeiter,Arbeitgeber,Betriebe", to: "KEY", value: 3, weight: 3 },
    { color: null, "from": 4, smooth: false, title: "streiken,Arbeitgeber,Betriebe", to: "KEY", value: 3, weight: 3 },
    { color: null, "from": 5, smooth: false, title: "Sorgt,Betriebe", to: "KEY", value: 2, weight: 2 },
    { color: null, "from": 6, smooth: false, title: "streiken,Arbeitgeber,Betriebe", to: "KEY", value: 3, weight: 3 },
    { color: null, "from": 7, smooth: false, title: "auszumachen,Arbeiter", to: "KEY", value: 2, weight: 2 },
    { color: null, "from": 8, smooth: false, title: "Arbeiter,streiken,Gasarbeiter", to: "KEY", value: 3, weight: 3 },
    { color: null, "from": 9, smooth: false, title: "Sorgt,Arbeiter,Betriebe", to: "KEY", value: 3, weight: 3 }]);

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