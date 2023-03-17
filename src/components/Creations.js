import '../styles/Creations.css';
import  { Breakpoint } from 'react-socks';

function Creations() {
  return (
    <section className="creations mrg-btm">
      <Preface />
      <Breakpoint className="creations__projects-container" id="projects-container" customQuery="(min-width: 200px) and (max-width: 700px)">
        <Projects width="200" />
      </Breakpoint>
      <Breakpoint className="creations__projects-container" id="projects-container" customQuery="(min-width: 700px)">
        <Projects width="700" />
      </Breakpoint>
    </section>
  );
}

export default Creations;

function Preface() {
  return (
    <>
      <h2 className="creations__title">
        OUR CREATIONS
      </h2>
      <button className="creations__btn">SEE ALL</button>
    </>
  );
}

function Projects(props) {
  const projectNames = [
    {id: 0, text: 'DEEP EARTH', w: props.width},
    {id: 1, text: 'NIGHT ARCADE', w: props.width},
    {id: 2, text: 'SOCCER TEAM VR', w: props.width},
    {id: 3, text: 'THE GRID', w: props.width},
    {id: 4, text: 'FROM UP ABOVE VR', w: props.width},
    {id: 5, text: 'POCKET BOREALIS', w: props.width},
    {id: 6, text: 'THE CURIOSITY', w: props.width},
    {id: 7, text: 'MAKE IT FISHEYE', w: props.width},
  ];

  return (
    <>
      {projectNames.map((project) => <CreateProject project={project} key={project.id} />)}
    </>
  );
}

const CreateProject = (props) => {
  let clsTitle = 'creations__project';
  let bgImg = `/images/mobile/bg-mb${props.project.id}.jpg`;

  if (props.project.id === 3) {
    clsTitle += ' creations__project--sml-size';
  }

  if (props.project.w === '700') {
    bgImg = `/images/desktop/bg${props.project.id}.jpg`;
  }

  const changeBgImg = (e) => {
    e.target.style.backgroundImage = `linear-gradient(rgba(255,255,255, .7), rgba(255,255,255, .7)), url(${bgImg})`;
  }

  const returnBgImg = (e) => {
    e.target.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImg})`;
  }

  let bg = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImg})`;

  return (
    <div className={clsTitle} style={{backgroundImage:`${bg}`}} onMouseOver={changeBgImg} onMouseOut={returnBgImg}>
      {props.project.text}
    </div>
  );
}
