function Projects({ items }) {
  return (
    <div>
      <h2>My projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
        {items.map(function (project) {
          return (
            <div key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">View project</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;