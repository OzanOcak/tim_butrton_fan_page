import About from "./components/about/About"; //import About Component
import Contact from "./components/contact/Contact"; //import Contact Component
import Intro from "./components/intro/Intro"; //import Intro Component
import MovieList from "./components/productList/ProductList"; //import MovieList Component

function App() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Intro />
      <About />
      <MovieList />
      <Contact />
    </div>
  );
}

export default App;
