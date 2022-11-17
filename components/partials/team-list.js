import ConceptSentence from "../partials/concept-sentence";

import StudentList from "../partials/student-list";

export default function TeamList({ teams, students, groups }) {
  return (
    <>
      {teams.map(team => {
        return (
          <div className="team">
            <StudentList students={students.filter(s => team.students.includes(s.id))} groups={groups} selected={[]} assigned={[]} />
            <ConceptSentence concept={team.concept} />
          </div>
        )
      })}
    </>
  )
}