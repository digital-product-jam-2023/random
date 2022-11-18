export default function SessionAction({ id, text, handler, disabled }) {
  const buttonText = disabled ? "Wait ..." : text;
  return (
    <div className="action" id={id}>
      <button id={id} onClick={handler} disabled={disabled}>
        {buttonText}
      </button>
    </div>
  );
}
