export default function ConceptSentence({ concept }) {
  return (
    <div className="row">
      <div className="item">
        <div className="content concept">
          Like <span>{concept.name}</span> for <span>{concept.idea}</span>
        </div>
      </div>
    </div>
  )
}