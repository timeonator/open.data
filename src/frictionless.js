import React from 'react';
import Resources from './component/frictionless/resources';
import Contributors from './component/frictionless/contributors';
import Sources from './component/frictionless/sources';
const Frictionless = (props) => {
  return (
    <>
      <h3>Frictionless</h3>
      <Resources />
      <Contributors />
      <Sources />
    </>
  );
};
export default Frictionless;
