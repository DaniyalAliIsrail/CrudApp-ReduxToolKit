import Foam from "./components/Foam";
import Mynavbar from "./components/Mynavbar";
import {  Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <>
        <Mynavbar />
        <h2 className="d-flex justify-content-center p-3">Crud App Redux ToolKit </h2>
        <Routes>
          <Route exact path="/" element={<Foam />} />
          <Route  path="/read" element={<Read />} />
          <Route  path="/edit/:id" element={<Update />} />
        </Routes>
    </>
  );
}
export default App;
