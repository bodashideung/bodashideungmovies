import { MoviesContext } from "../../Context/moviesContext";
import { useContext} from "react";
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const {setInput, input} = useContext(MoviesContext);
  const navigate = useNavigate();

  function handleInput(event) {
    const query = event.target.value;
    setInput(query);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!input) return;
    navigate(`search?query=${input}`)
    setInput('')
  }

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="text-logo">
          <span>
            MoviesApp
          </span>
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="input" value={input} onChange={(e) => handleInput(e)} />
          <button type="submit">search</button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
