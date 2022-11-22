import { BACKGROUND_COLORS, BUTTON_DISABLED_ACTION_TEXT, DEFAULT_BACKGROUND_COLOR } from "../../config";
import { selectBackGroundColor } from "../../helpers";

function setBackgroundColor(cycleBackground) {
  const target = document.querySelector("body");
  const color = cycleBackground ? selectBackGroundColor(BACKGROUND_COLORS): DEFAULT_BACKGROUND_COLOR;
  target.style.setProperty("background-color", color);
}

export default function SessionAction({ id, text, handler, disabled, cycleBackground }) {
  const buttonText = disabled ? BUTTON_DISABLED_ACTION_TEXT : text;

  function actionHandler(event) {
    event.preventDefault();
    setBackgroundColor(cycleBackground);
    handler(event);
  }

  return (
    <div className="action" id={id}>
      <button id={id} onClick={actionHandler} disabled={disabled}>
        {buttonText}
      </button>
    </div>
  );
}
