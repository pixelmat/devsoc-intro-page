import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
		<div className="skills--section--card">
            <div className="skills--section--img">
              <img src="{item.src}" alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Front-End</h3>
              <p className="skills--section--description">bleh</p>
            </div>
          </div>
		  <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="{item.src}" alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Back-End</h3>
              <p className="skills--section--description">bleh</p>
            </div>
          </div>
		  <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="{item.src}" alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">UI & UX Design</h3>
              <p className="skills--section--description">bleh</p>
            </div>
          </div>
      </div>
    </section>
  );
}