import Bar from "./components/Bar";
import Background from "./components/Background";
import TerminalWindow from "./components/Terminal";

function App() {
  return (
    <>
      <main
        className="w-full h-full overflow-hidden transition-all duration-100 ease-in-out bg-neutral-50"
        data-mode={"dark"}
      >
        <div className="absolute w-full h-full flex flex-col">
          <Bar />
          <TerminalWindow />
        </div>
        <Background />
      </main>
    </>
  );
}

export default App;
