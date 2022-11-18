import ConceptSentence from "../partials/concept-sentence";

import StudentList from "../partials/student-list";

export default function TeamList({ teams, students, groups }) {
  return (
    <>
      {teams.map((team, idx) => {
        return (
          <div key={idx} className="team">
            <StudentList students={students.filter(s => team.students.includes(s.id))} groups={groups} currentTeamMembers={[]} assignedStudents={[]} />
            <ConceptSentence concept={team.concept} />
          </div>
        )
      })}
    </>
  )
}