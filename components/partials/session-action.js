export default function SessionAction({ id, text, handler, disabled }) {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          <button id={id} onClick={handler} disabled={disabled}>{text}</button>
        </div>
      </div>
    </div>
  )
}
