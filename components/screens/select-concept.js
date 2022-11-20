import { makeConcept } from "../../helpers";
import ConceptSentence from "../partials/concept-sentence";
import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";

export default function SelectConcept({
  session,
  data,
  teams,
  setTeams,
  assignedStudents,
  setAssignedStudents,
  currentTeamMembers,
  setCurrentTeamMembers,
  stateDescriptor,
  transitionToStateFn,
}) {
  const concept = makeConcept(data.prompt_companies, data.prompt_ideas);
  const isLastTeam = teams.length === data.distribution.length - 1;
  const nextState = isLastTeam ? 4 : stateDescriptor.next;

  function actionHandler() {
    // animation of slot machine goes also here
    setTeams([...teams, { students: currentTeamMembers, concept }]);
    setAssignedStudents([...assignedStudents, ...currentTeamMembers]);
    setCurrentTeamMembers([]);
    transitionToStateFn(nextState);
  }

  return (
    <>
      <div className="team">
        <StudentList
          groups={data.groups}
          students={data.students}
          currentTeamMembers={currentTeamMembers}
          assignedStudents={assignedStudents}
        />

        <ConceptSentence concept={concept} />
      </div>
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={stateDescriptor.action.disabled}
      />
    </>
  );
}
