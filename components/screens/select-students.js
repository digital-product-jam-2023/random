import { useEffect, useState } from "react";
import { selectStudents } from "../../helpers";
import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";

export default function Students({
  session,
  data,
  teams,
  assignedStudents,
  stateDescriptor,
  transitionToStateFn,
  currentTeamMembers,
  setCurrentTeamMembers,
}) {
  const [actionDisabled, setActionDisabled] = useState(
    stateDescriptor.action.disabled
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
    setTimeout(() => {
      // TODO: Animation logic
      console.log("Do our animation ...");

      setIsRunning(false);
      setCurrentTeamMembers(selectStudents(data.students, assignedStudents));
      setActionDisabled(false);
    }, 5000);
  }, [data.students, assignedStudents, setCurrentTeamMembers]);

  function actionHandler() {
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <StudentList
        groups={data.groups}
        students={data.students}
        currentTeamMembers={currentTeamMembers}
        assignedStudents={assignedStudents}
        showAnimation={isRunning}
      />
      {isRunning && (
        <StudentList
          groups={data.groups}
          students={data.students}
          currentTeamMembers={currentTeamMembers}
          assignedStudents={assignedStudents}
          isReplica={true}
          showAnimation={isRunning}
        />
      )}

      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={actionDisabled}
      />
    </>
  );
}
