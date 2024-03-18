import Foam from "./components/Foam";
import Mynavbar from "./components/Mynavbar";

function App() {
  return (
    <>
      <Mynavbar/>
      <div className="d-flex justify-content-center p-2">
      <h1>ReduxToolkit Crud</h1>
      </div>
      <Foam/>
    </>
  );
}
export default App;
``