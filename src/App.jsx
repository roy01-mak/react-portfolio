import Skills from "./Skills";
import Projects from "./Projects";

const projects = [
  { title: "Profile page", description: "My first web page, built with HTML and CSS." },
  { title: "To-do app", description: "Add, tick off, delete, and saved tasks." },
  { title: "Weather app", description: "Live weather, rain, sun, and UV for my location." },
];

function App() {
  return (
    <div>
      <h1>Hi, I'm Roy</h1>
      <p>This page is built with React.</p>
      <Skills />
      <Projects items={projects} />
    </div>
  );
}

export default App;