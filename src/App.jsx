import ReactCounter from "./components/ReactCounter";
import ReduxCounter from "./components/ReduxCounter";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <ReactCounter />
      <ReduxCounter />
    </div>
  );
};

export default App;
