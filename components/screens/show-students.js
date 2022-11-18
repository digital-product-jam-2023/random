import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";

export default function ShowStudents({ session, data, teams, currentTeamMembers, assignedStudents, stateDescriptor, transitionToStateFn }) {

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList groups={data.groups} students={data.students} currentTeamMembers={currentTeamMembers} assignedStudents={assignedStudents} />
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={stateDescriptor.action.disabled} />
    </>
  )
}
