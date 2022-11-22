import {
  BACKGROUND_COLORS,
  BUTTON_DISABLED_ACTION_TEXT,
  DEFAULT_BACKGROUND_COLOR,
  STATE_TRANSITION_ANIMATION_DURATION
} from "../../config";
import { selectBackGroundColor, selectTransitionColors } from "../../helpers";

function setBackgroundColor(cycleBackground) {
  const target = document.querySelector("body");
  const targetColor = cycleBackground ? selectBackGroundColor(BACKGROUND_COLORS): DEFAULT_BACKGROUND_COLOR;
  const transitionColors = selectTransitionColors(BACKGROUND_COLORS);
  const keyFrames = transitionColors.map(color => { return { backgroundColor: color }  });
  const options = { duration: STATE_TRANSITION_ANIMATION_DURATION, easing: "linear" };
  target.animate(keyFrames, options);
  target.style.setProperty("background-color", targetColor);
}

export default function SessionAction({ id, text, handler, disabled, cycleBackground }) {
  const buttonText = disabled ? BUTTON_DISABLED_ACTION_TEXT : text;

  function actionHandler(event) {
    event.preventDefault();
    if (cycleBackground !== null) setBackgroundColor(cycleBackground);
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
