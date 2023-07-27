import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservations from './components/pages/reserve_a_table/Reservations';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>

      <Footer isFooter={true} />
    </>
  );
}

export default App;
