function Projects({ items }) {
  return (
    <div>
      <h2>My projects</h2>
      {items.map(function (project) {
        return (
          <div key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;