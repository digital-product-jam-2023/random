import ConceptSentence from "../partials/concept-sentence";

import StudentList from "../partials/student-list";

export default function TeamList({ teams, students, groups }) {
  return (
    <>
      {teams.map((team, idx) => {
        return (
          <div key={idx} className="team show-team">
            <p className="team-info">
              {students
                .filter((s) => team.students.includes(s.id))
                .map((student) => student.name)
                .join(", ")}
            </p>
            <p className="team-info">
              <span>Like</span> {team.concept.name} <span>for</span>{" "}
              {team.concept.idea}
            </p>
          </div>
        );
      })}
    </>
  );
}
