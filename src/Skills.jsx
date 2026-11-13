function Skills() {
  const skills = ["Electrical engineering", "Circuit design", "Motor rewinding", "Embedded systems", "Learning HTML"];

  return (
    <div>
      <h2>My skills</h2>
      <ul>
        {skills.map(function (skill) {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;