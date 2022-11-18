export default function SessionAction({ id, text, handler, disabled }) {
  const buttonText = disabled ? "Wait ..." : text;
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          <button id={id} onClick={handler} disabled={disabled}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}
