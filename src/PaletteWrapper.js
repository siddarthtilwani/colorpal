import React from 'react';
import Pallete from './Pallete';
import { useParams } from 'react-router-dom';

function PaletteWrapper({ findPalette, generatePalette }) {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));

  return <Pallete  palette={palette} />;
}

export default PaletteWrapper;
