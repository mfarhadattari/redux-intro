import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const ReduxCounter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[220px] border-2 border-green-600 rounded-xl p-5 shadow-xl font-medium ">
      <h1 className="text-center text-xl uppercase">Redux Counter</h1>
      <div className="flex items-center justify-center mt-10 gap-5">
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <div className="text-3xl">{count}</div>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increase
        </button>
      </div>
      <button
        className="btn w-full mt-5"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increase 5
      </button>
    </div>
  );
};

export default ReduxCounter;
