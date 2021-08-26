import React from 'react';
import Resources from './component/frictionless/resources';
import Contributors from './component/frictionless/contributors';
import Sources from './component/frictionless/sources';
import Licenses from './component/frictionless/licenses';

const Frictionless = () => {
  return (
    <>
      <h3>Frictionless</h3>
      <Resources />
      <Contributors />
      <Sources />
      <Licenses />
    </>
  );
};
export default Frictionless;
