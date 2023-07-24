import React, { useRef } from 'react'
import Plot from "react-plotly.js";
import { useNavigate } from 'react-router-dom';
import JsPDF from "jspdf";

const Graph = () => {

    const navigate = useNavigate();

    const xValues = [1, 2, 3, 4, 5];
    const yValues1 = [2, 4, 6, 8, 10];
    const yValues2 = [1, 3, 5, 7, 9];

    const trace1 = {
        x: xValues,
        y: yValues1,
        mode: "lines",
        name: "Line 1",
    };

    const trace2 = {
        x: xValues,
        y: yValues2,
        mode: "lines",
        name: "Line 2",
    };

    const printableContent = useRef(null);

    const savePDFHandler = () => {
      const report = new JsPDF("portrait", "pt", "a4");
      report.html(document.querySelector("#")).then(() => {
        report.save("report.pdf");
      });
    };
    const logoutHandler = () => {
      localStorage.clear();
      navigate('/signin')
      window.location.reload()
    };


    return (
      <div>
        <div ref={printableContent} >
          This is a div
          <Plot id='#report'
            data={[trace1, trace2]}
            layout={{
              title: "Line Comparison Graph",
              xaxis: {
                title: "X-axis",
              },
              yaxis: {
                title: "Y-axis",
              },
            }}
          />
        </div>
        <button onClick={savePDFHandler}>Save as PDF</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    );
}

export default Graph
