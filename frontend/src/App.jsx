import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Dwgusttrmayo</h1>

      <p className="description">
        Приложение чтобы дегустировать майонез онлайн.
      </p>

      <div className="card">
        <h2>Карточка 1</h2>
        <p>Описание первого блока по выбранной теме.</p>
      </div>

      <div className="card">
        <h2>Карточка 2</h2>
        <p>Ещё один информационный блок.</p>
      </div>

      <div className="card">
        <h2>Карточка 3</h2>
        <p>Дополнительная карточка.</p>
      </div>

      <button onClick={() => alert("Майонез продегустирован!")}>
        Продегустировать майонез
      </button>
    </div>
  );
}

export default App;
