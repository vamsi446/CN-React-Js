let score = 0;
let wicket = 0;
let ballWiseScores = [];
let hit = 0;
let inputRef = React.createRef(); /// refercne to node

function ScoreButtons() {
  return (
    <div>
      <button onClick={() => addOne(0)}>0</button>
      <button onClick={() => addOne(1)}>1</button>
      <button onClick={() => addOne(2)}>2</button>
      <button onClick={() => addOne(3)}>3</button>
      <button onClick={() => addOne(4)}>4</button>
      <button onClick={() => addOne(5)}>5</button>
      <button onClick={() => addOne(6)}>6</button>
      <button onClick={addWicket}>wicket </button>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  if (hit === "W") {
    wicket += 1;
  } else {
    score += hit;
  }

  ballWiseScores.unshift(
    <span>
      {hit}, {inputRef.current.value}
    </span>
  );
  hit = 0;
  inputRef.current.value = "";
  rootElement.render(<App />);
}

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input ref={inputRef} placeholder="Add a comment" />
      <button type="submit">submit</button>
    </form>
  );
}

function App() {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>
        SCORE: {score}/{wicket}
      </h2>
      <ScoreButtons />
      <br />
      <hr />
      <Form />
      <hr />
      <Result />
    </>
  );
}

function addWicket() {
  hit = "W";
  rootElement.render(<App />);
}
function addOne(num) {
  hit = num;
  rootElement.render(<App />);
}
const Result = () => (
  <div>
    {ballWiseScores.map((res, index) => (
      <div>
        {index % 6 === 0 && <br />}
        {res === 0 ? <strong>.</strong> : <span key={index}>{res}</span>}
        &nbsp; &nbsp;
      </div>
    ))}
  </div>
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
