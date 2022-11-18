import { useEffect, useState } from "react";
import { selectStudents } from "../../helpers";
import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";

export default function Students({ session, data, teams, assignedStudents, stateDescriptor, transitionToStateFn, currentTeamMembers, setCurrentTeamMembers }) {

  const [actionDisabled, setActionDisabled] = useState(stateDescriptor.action.disabled);

  useEffect(() => {
    setTimeout(() => {

      // TODO: Animation logic
      console.log('Do our animation ...')

      setCurrentTeamMembers(selectStudents(data.students, assignedStudents));
      setActionDisabled(false);
    }, 3000);
  }, [data.students, assignedStudents, setCurrentTeamMembers]);

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList groups={data.groups} students={data.students} currentTeamMembers={currentTeamMembers} assignedStudents={assignedStudents} />
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={actionDisabled} />
    </>
  )
}
