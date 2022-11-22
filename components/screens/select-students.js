import { useEffect, useState } from "react";
import { selectStudents } from "../../helpers";
import SessionAction from "../partials/session-action";
import StudentList from "../partials/student-list";
import Screen from "../screens/screen-layout";

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

  const [actionDisabled, setActionDisabled] = useState(stateDescriptor.action.disabled);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      const teamDistribution = data.distribution[teams.length];
      setCurrentTeamMembers(
        selectStudents(data.students, assignedStudents, teamDistribution)
      );
      setActionDisabled(false);
    }, 2000);
  }, [data.students, data.distribution, assignedStudents, teams, setCurrentTeamMembers]);

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
        animate={animate}
      />
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={actionDisabled}
        cycleBackground={stateDescriptor.cycleBackground}
      />
    </Screen>
  );
}
