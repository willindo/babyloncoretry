import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function Dragnode() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Create a circle
    const circle = svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 20)
      .style("fill", "blue");

    // Define the drag behavior
    const dragHandler = d3.drag().on("drag", function (event) {
      circle.attr("cx", event.x).attr("cy", event.y);
    });

    // Apply the drag behavior to the circle
    circle.call(dragHandler);
  }, []);

  return (
    <svg ref={svgRef} width={400} height={400}>
      {/* You can add other SVG elements here */}
    </svg>
  );
}

export default Dragnode;
