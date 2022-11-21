export default function TeamList({ teams, students, groups }) {
  return (
    <div className="row">
      {teams.map((team, idx) => {
        return (
          <div key={idx} className="item team-show">
            <div className="content">
            <p>
              {students
                .filter((s) => team.students.includes(s.id))
                .map((student) => student.name)
                .join(", ")}
            </p>
            <p>
              <span>Like</span> {team.concept.name} <span>for</span>{" "}
              {team.concept.idea}
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
