// import Foam from "./components/Foam";
// import Mynavbar from "./components/Mynavbar";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Read from "./components/Read";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Mynavbar />
//         <div className="d-flex justify-content-center p-2">
//           <h1>ReduxToolkit Crud</h1>
//         </div>
//           <Routes path="/" element={<Foam />} />
//           <Routes path="/read" element={<Read />} />
//       </BrowserRouter>
//       <Foam />
//     </>
//   );
// }
// export default App;

import Foam from "./components/Foam";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
function App() {
  return (
    <>
      <BrowserRouter>
        <Mynavbar />
        <h2 className="d-flex justify-content-center p-3">Crud App Redux ToolKit </h2>
        <Routes>
          <Route exact path="/" element={<Foam />} />
          <Route  path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
