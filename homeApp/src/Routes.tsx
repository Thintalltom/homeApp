import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
const RemoteAction = React.lazy(() => import("remoteApp/Alt"));
const RemoteProduct = React.lazy(() => import("designApp/Apx"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/design" element={<Suspense fallback={<p>Loading...</p>}><RemoteAction /></Suspense>} />
        <Route path="/altapp" element={<Suspense fallback={<p>Loading...</p>}><RemoteProduct /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;