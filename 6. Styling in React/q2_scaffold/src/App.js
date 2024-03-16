import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={style.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={style.header}>Sign Up</h3>
        <input style={style.input} placeholder="Username" />
        <input style={style.input} placeholder="Email" />
        <input style={style.input} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={style.div}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={style.button}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={style.button}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}


const style ={
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  header:{ fontSize: "2rem", letterSpacing: 2 },
  input: { padding: 10 },
  div:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}