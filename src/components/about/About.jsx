import "./about.css";
import Emmy from "../../img/emmy.webp";
import Golden from "../../img/golden-globe.webp";
import Saturn from "../../img/saturn.webp";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://s.studiobinder.com/wp-content/uploads/2020/02/Tim-Burton-Set-Design-Mise-en-Scene-Explained-scaled.jpg"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Burton</h1>
        <p className="about-sub">
          Burton was born on August 25, 1958, in Burbank, California.
        </p>
        <p className="about-desc">
          As a preteen, Burton would make short films in his backyard at 2101
          North Evergreen Street using crude stop motion animation techniques or
          shooting on 8 mm film without sound (one of his oldest known juvenile
          films is The Island of Doctor Agor, which he made when he was 13 years
          old). Burton attended Burbank High School but was not a particularly
          good student. He played on the water polo team at Burbank High. Burton
          was an introspective person and found pleasure in artwork, painting,
          drawing, and watching movies. His future work would be heavily
          influenced by the works of such childhood heroes as Dr. Seuss and
          Roald Dahl. After graduating from Burbank High School, Burton attended
          the California Institute of the Arts in Valencia, Santa Clarita, to
          study character animation. As a student at CalArts, Burton made the
          shorts Stalk of the Celery Monster and King and Octopus.
        </p>
        <div className="about-award">
          <img src={Emmy} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">Daytime Emmy Award 1990</h4>
            <p className="about-award-desc">
              Beetlejuice Outstanding Children's Animated Program
            </p>
          </div>
        </div>
        <div className="about-award">
          <img src={Golden} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">Golden Globe Awards 2008</h4>
            <p className="about-award-desc">
              Sweeney Todd: The Demon Barber of Fleet Street - Best Motion
              Picture – Musical or Comedy
            </p>
          </div>
        </div>
        <div className="about-award">
          <img src={Saturn} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">
              Saturn Awards 1990,1994, 2006, 2013
            </h4>
            <p className="about-award-desc">
              Edward Scissorhands Best Fantasy Film, The Nightmare Before
              Christmas Best Fantasy Film, Corpse Bride Best Animated Film,
              Frankenweenie Best Animated Film
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
