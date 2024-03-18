import Foam from "./components/Foam";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Mynavbar />
        <div className="d-flex justify-content-center p-2">
          <h1>ReduxToolkit Crud</h1>
        </div>
        <Routes index element={<Foam />} />
      </BrowserRouter>
      <Foam />
    </>
  );
}
export default App;
``;
