import { Link, Route, Routes } from "react-router-dom";
import { Repo } from "./Pages/Repo";
import { Repos } from "./Pages/Repos";

export function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Hello vite</h1>
          <Link to="/repos">Repositories 🗃️</Link>
        </>
      } />
      <Route path="/repos" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}