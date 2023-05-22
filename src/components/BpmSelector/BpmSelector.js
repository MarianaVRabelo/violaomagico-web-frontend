import { useState } from "react";

function BpmChange(){

const [BpmValue, setBpmValue] = useState(0); 

const setSetBpm = () => {
    setBpmValue(60); 
} 

return (

    <div>
        <p>
            Valor do BPM: {BpmValue}
        </p>
        <button onClick={setSetBpm}>Setar 60</button>
    </div>
    


);

}

export default BpmChange; 