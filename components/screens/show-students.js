import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";
import Screen from "../screens/screen-layout";

export default function ShowStudents({
  session,
  data,
  teams,
  currentTeamMembers,
  assignedStudents,
  stateDescriptor,
  transitionToStateFn,
}) {

  function actionHandler() {
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <Screen>
      <StudentList
        groups={data.groups}
        students={data.students}
        currentTeamMembers={currentTeamMembers}
        assignedStudents={assignedStudents}
      />
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={stateDescriptor.action.disabled}
        cycleBackground={stateDescriptor.cycleBackground}
      />
    </Screen>
  );
}
