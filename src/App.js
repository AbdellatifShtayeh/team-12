
import Tags from "./components/Tags";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

  
function App() {
  
  return (
    <>
    <div className="App">
      <div id="page-container">
        <div id="content-wrap">
          <NavBar />
          <Tags />
        </div>
        <Footer />
      </div>
      <div className="rest"></div>
    </div>

    </>

  );
}

export default App;

