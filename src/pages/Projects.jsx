import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"
function Projects(){
return <div id="projects">
    <h1 className="header">Projects</h1>
    <div className="Projects-parent">
      <div className="box-1">
      <img className="img-p" src={Project1} />
      <h1>Simple Website </h1><br></br>
      <h1>HTML CSS And Js</h1><br></br>
      <p>This project is just a frontend It's a responsive website, I built it with html css and Js, it's very beautiful and eye-catching</p>
      </div>
      <div className="box-1">
      <img className="img-p" src={Project3} />
      <h1>Somali Qouote</h1><br></br>
      <h1>React Js</h1><br></br>
      <p>This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State</p>
      </div>
      <div className="box-1">
      <img className="img-p" src={Project2} />
      <h1>Tasbih App</h1><br></br>
      <h1>React js </h1><br></br>
<p>This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State</p>
      </div>
    </div>
</div>
}
export default Projects