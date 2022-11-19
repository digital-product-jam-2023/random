let count = 0;
const colors = ["#8D8D93", "#0028B6", "#DB6E4C", "#AFDB00"];
export default function SessionAction({ id, text, handler, disabled }) {
  const buttonText = disabled ? "Wait ..." : text;
  function handlerWrapper(event) {
    event.preventDefault();
    count++;
    let body = document.querySelector("body");
    body.style.setProperty("background-color", colors[count % colors.length]);
    console.log(count);
    handler(event);
  }
  return (
    <div className="action" id={id}>
      <button id={id} onClick={handlerWrapper} disabled={disabled}>
        {buttonText}
      </button>
    </div>
  );
}
