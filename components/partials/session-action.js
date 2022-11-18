export default function SessionAction({ id, text, handler, disabled }) {
  return (
    <div className="action" id={id}>
      <button id={id} onClick={handler} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
