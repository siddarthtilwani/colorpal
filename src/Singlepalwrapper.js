import React from "react";
import SingleColorPalette from "./SingleColorPalette";
import { useParams } from "react-router-dom";

function Singlepalwrapper(props) {
  const { paletteId,colorId } = useParams();
  const palette = props.generatePalette(props.findPalette(paletteId));
  console.log(colorId)
  return <SingleColorPalette palette={palette} colorId={colorId}/>;
}

export default Singlepalwrapper;
