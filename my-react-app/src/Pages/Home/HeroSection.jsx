import profImage from './profile_pic.jpg';
import { Button } from "react-bootstrap";

export default function HeroSection() {
	return (
		<section id="heroSection" className="hero--section">
		  <div className="hero--section--content--box">
			<div className="hero--section--content">
			  <p className="section--title">Hey, I'm Muhammad</p>
			  <h1 className="hero--section--title">
				<span className="hero--section-title--color">(Aspiring)</span>{" "}
				<br />
				Full Stack Developer
			  </h1>
			  <p className="hero--section-description">
				I love cars and videography.
			  </p>
			</div>
		  </div>
		  <div className="hero--section--img">
			<img src={profImage}/>
		  </div>
		  <div className="wave wave1"></div>
		</section>
	  );
	}