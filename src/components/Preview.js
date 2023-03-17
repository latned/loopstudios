import '../styles/Preview.css';
import interactive from '../icons/image-interactive.jpg';

function Preview() {
  return (
    <section className="preview mrg-btm">
      <div className="preview__img-container">
        <img className="preview__img" src={interactive} alt="" />
      </div>
      <Content />
    </section>
  );
}

export default Preview;

function Content() {
  return (
    <div className="preview__content">
      <h2 className="preview__title">
        THE LEADER IN INTERACTIVE VR
      </h2>
      <p className="preview__body">
        Founded in 2011, Loopstudios has been producing world-class virtual reality 
        projects for some of the best companies around the globe. Our award-winning 
        creations have transformed businesses through digital experiences that bind 
        to their brand.
      </p>
    </div>
  );
}
