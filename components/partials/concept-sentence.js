export default function ConceptSentence({ concept }) {
  return (
    <div className="row">
      <div className="item">
        <div className="content concept">
          כמו <span>{concept.name}</span>
          <br />
          אבל עבור <span>{concept.idea}</span>
        </div>
      </div>
    </div>
  );
}
