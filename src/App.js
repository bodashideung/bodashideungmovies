import "./App.css";
import { MoviesProvider } from "./Context/moviesContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import SearchResult from "./pages/searchpage/SearchPage";
import { Detailpages } from "./pages/detailpage/DetailPage";
import Layout from "./layout/Layout";
import BlankPage from "./pages/blankpage/BlankPage";

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:media/:id" element={<Detailpages />} />
          <Route path={"/search"} element={<SearchResult />} />
          <Route path="*" element={<BlankPage/>}/>
        </Route>
      </Routes>
    </MoviesProvider>
  );
}

export default App;
