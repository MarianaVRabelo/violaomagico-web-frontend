import React, { useState } from "react";

function BpmChange() {
  const [BpmValue, setBpmValue] = useState();

  const handleBpmChange = (event) => {
    setBpmValue(event.target.value);
  };

  const handleBpmClick = () => {
    setBpmValue(BpmValue);
  };

  return (
    <div>
      <p>Valor do BPM: {BpmValue}</p>
      <input type="text" value={BpmValue} onChange={handleBpmChange}/>
    </div>
  );
}

export default BpmChange;
