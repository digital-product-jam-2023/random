import TeamList from "../partials/team-list";
import SessionAction from "../session-action";

export default function ShowTeams({ session, data, teams, stateDescriptor, transitionToStateFn }) {

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <>
      <TeamList teams={teams} groups={data.groups} students={data.students} />
      <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={stateDescriptor.action.disabled} />
    </>
  )
}
