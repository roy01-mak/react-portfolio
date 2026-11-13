import Skills from "../Skills";
import Projects from "../Projects";

const projects = [
  { title: "Profile page", description: "My first web page, built with HTML and CSS.", link: "https://roy01-mak.github.io/portfolio/" },
  { title: "To-do app", description: "Add, tick off, delete, and saved tasks.", link: "https://roy01-mak.github.io/todo-app/" },
  { title: "Weather app", description: "Live weather, rain, sun, and UV for my location.", link: "https://roy01-mak.github.io/weather-app/" },
];

function Home() {
  return (
    <div>
      <h1>Hi, I'm Roy</h1>
      <p>This page is built with React.</p>
      <Skills />
      <Projects items={projects} />
    </div>
  );
}

export default Home;