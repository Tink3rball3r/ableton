// css files
import "../styles/normalize.css";
import "../styles/components/small__nav.css";
import "../styles/components/large__nav.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/footer.css";
import "../styles/style.css";
// javaScript files
import smallNavToggle from "./utils/small__nav";
import hideAndShow from "./utils/hideAndShow";
smallNavToggle();
hideAndShow();

// smooth scroll

const lenis = new Lenis();
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
