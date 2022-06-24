

function App(props) {
  return (
    <div>
      <h1>This is an OutPut page of the below github Repo. If you are trying to learn react in fast way you can easily follow this code.  </h1>
        <a
          className="App-link"
          href="https://github.com/nivasdhinablogger/learningreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo {props.name}
        </a>
    </div>
  );
}

export default App;
