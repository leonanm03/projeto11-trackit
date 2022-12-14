import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/cadastro" element={<RegisterPage />}></Route>
      <Route path="/habitos" element={<HabitsPage />}></Route>
      <Route path="/hoje" element={<TodayPage />}></Route>
      <Route path="/historico" element={<HistoryPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
