export default function Screen({ children }) {

  const [ dataPane, ...actionsPanes ] = children;

  return (
    <div id="screen">
      <div id="data">
        <div className="container">
          {dataPane}
          <div id="data-pad"></div>
        </div>
      </div>
      <div id="actions">
        <div className="container">
          <div id="action-elements">
            {actionsPanes}
          </div>
        </div>
      </div>
    </div>
  );
}
