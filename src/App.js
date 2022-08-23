import './App.css';
import { Names } from './names/data';

function App() {
  return (
    <div className="App">
      Hello world
      <div className="cards">
        {Names.map((data) => {
          return (<div className="card-content">
            <div className="name">{data.name}</div>
            <div className="class">Class :{data.class}</div>
            <div className="rollno">Roll No: {data.rollno}</div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
