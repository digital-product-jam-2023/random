import { makeConcept } from "../../helpers";
import ConceptSentence from "../partials/concept-sentence";
import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";

export default function SelectConcept({ session, data, teams, setTeams, assignedStudents, setAssignedStudents, currentTeamMembers, setCurrentTeamMembers, stateDescriptor, transitionToStateFn }) {

  const concept = makeConcept(data.prompt_companies, data.prompt_ideas);

  function actionHandler(event) {
    event.preventDefault();
    setTeams([...teams, { students: currentTeamMembers, concept }]);
    setAssignedStudents([...assignedStudents, ...currentTeamMembers]);
    setCurrentTeamMembers([]);

    // TODO: if all students allocated, then, move to final location which is 4
    // transitionToStateFn(4);
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList groups={data.groups} students={data.students} currentTeamMembers={currentTeamMembers} assignedStudents={assignedStudents} />
      <div className="row">
        <ConceptSentence concept={concept} />
      </div>
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={stateDescriptor.action.disabled} />
    </>
  )
}
