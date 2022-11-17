import StudentList from "../partials/student-list";
import SessionAction from "../session-action";

export default function ShowStudents({ session, data, teams, selected, assigned, stateDescriptor, transitionToStateFn }) {

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList groups={data.groups} students={data.students} selected={selected} assigned={assigned} />
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={stateDescriptor.action.disabled} />
    </>
  )
}
