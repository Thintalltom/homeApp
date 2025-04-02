import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
const RemoteAction = React.lazy(() => import("remoteApp/Alt"));
const RemoteProduct = React.lazy(() => import("designApp/Apx"));

function App() {
  return (
  <div>
    <Navbar />
<RemoteAction />
      <RemoteProduct />
  </div>

     
  );
}

export default App;