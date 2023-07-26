import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservations from './components/pages/reserve_a_table/Reservations';

function App() {
  return (
    <>
      test
      <Header />

      {/* <Main /> */}
      <Reservations />

      <Footer isFooter={true} />
    </>
  );
}

export default App;
