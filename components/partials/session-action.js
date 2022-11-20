let count = 0;
const colors = [
  "#8D8D93",
  "#0028B6",
  "#DB6E4C",
  "#AFDB00",
  "#616A3D",
  "#8654D7",
  "#7688C8",
  "#74AB73",
  "#EAAB31",
  "#E86216",
  "#C28563",
  "#FF8896",
  "#51CDDE",
  "#00442F",
  "#A83434",
  "#BEB063",
];
export default function SessionAction({ id, text, handler, disabled }) {
  const buttonText = disabled ? "Wait ..." : text;
  function handlerWrapper(event) {
    event.preventDefault();
    count++;
    let body = document.querySelector("body");
    body.style.setProperty("background-color", colors[count % colors.length]);
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
