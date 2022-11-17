import SessionAction from "../session-action";

export default function Start({ session, data, teams, stateDescriptor, transitionToStateFn }) {

  function actionHandler(event) {
    event.preventDefault();
    transitionToStateFn(stateDescriptor.next);
  }

  return <SessionAction handler={actionHandler} id={stateDescriptor.action.id} text={stateDescriptor.action.text} disabled={stateDescriptor.action.disabled} />

}
