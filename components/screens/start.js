import SessionAction from "../partials/session-action";

export default function Start({
  session,
  data,
  teams,
  stateDescriptor,
  transitionToStateFn,
}) {

  function actionHandler() {
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <div id="start">
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={stateDescriptor.action.disabled}
        cycleBackground={stateDescriptor.cycleBackground}
      />
    </div>
  );
}
