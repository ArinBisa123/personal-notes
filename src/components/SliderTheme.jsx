import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function SliderTheme() {
  return (
    <ThemeConsumer>
      {({ theme, slideTheme }) => {
        return (
          <button className="button-slider" onClick={slideTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default SliderTheme;
