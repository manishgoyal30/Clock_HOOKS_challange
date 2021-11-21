import React, { useState } from "react";

const App = () => {
  
  let newTime = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(newTime);

  const UpdTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return(
<>
  <h1> {ctime} </h1>
  <button onClick={UpdTime}>Get Time</button>
  </>
);
};

export default App;

