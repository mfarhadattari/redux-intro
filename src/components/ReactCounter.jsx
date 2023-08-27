import { useState } from "react";

const ReactCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[300px] h-[200px] border-2 border-slate-950 rounded-xl p-5 shadow-xl font-medium ">
      <h1 className="text-center text-xl uppercase">React Counter</h1>
      <div className="flex items-center justify-center mt-10 gap-5">
        <button className="btn" onClick={() => setCount((pre) => pre - 1)}>
          Decrease
        </button>
        <div className="text-3xl">{count}</div>
        <button className="btn" onClick={() => setCount((pre) => pre + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default ReactCounter;
