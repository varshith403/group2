// import React, { Component } from 'react';  // Correctly import Component
// import PropsChildrenex from './components/PropsChildrenex';
// import SubChildProps from './components/SubChildProps';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <PropsChildrenex username="varshith" company="Google">
//           <h1>This data is passing as a prop to child components</h1>
//           <SubChildProps />
//         </PropsChildrenex>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
// import UseEffectEx from './hookexample/Use EffectEx';
import RefExample from './RefExample';
export const App = () => {
  return (
    <div>
      {/* <UseEffectEx /> */}
      <RefExample/>
    </div>
  );
};

export default App