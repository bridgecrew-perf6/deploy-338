import Page1 from "./components/Page1";
import Page2 from "./components/Page2.js";

/* Route와 Route들을 감싸줄 Routes, 그리고 Link import 하기*/
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
      </ul>
      <Routes>
        {/* 달라진 점 아래 코드 주목!! */}
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
