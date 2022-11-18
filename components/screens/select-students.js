import { useEffect, useState } from "react";
import { selectStudents } from "../../helpers";
import StudentList from "../partials/student-list";
import SessionAction from "../session-action";

export default function Students({ session, data, teams, assigned, stateDescriptor, transitionToStateFn, selected, setSelected }) {

  const [actionDisabled, setActionDisabled] = useState(stateDescriptor.action.disabled);

  useEffect(() => {
    setTimeout(() => {

      // TODO: Animation logic
      console.log('Do our animation ...')

      setSelected(selectStudents(data.students, assigned));
      setActionDisabled(false);
    }, 3000);
  }, [data.students, assigned, setSelected]);

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList groups={data.groups} students={data.students} selected={selected} assigned={assigned} />
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={actionDisabled} />
    </>
  )
}
