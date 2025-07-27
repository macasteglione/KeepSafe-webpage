import { render } from 'preact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ScreenshotCarousel from './components/ScreenshotCarousel/ScreenshotCarousel';
import SetupGuide from './components/SetupGuide/SetupGuide';
import FaqSection from './components/FaqSection/FaqSection';

import './style.css';

export function App() {
	return (
		<div className="App">
			<section id="download">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="setup">
				<SetupGuide />
			</section>
			<section id="screenshots">
				<ScreenshotCarousel />
			</section>
			<section id="faq">
				<FaqSection />
			</section>
			<section id="footer">
				<Footer />
			</section>
		</div>
	);
}

render(<App />, document.getElementById('app'));
