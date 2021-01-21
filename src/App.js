import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(90);
  const [intensity, setIntensity] = useState(1.3);
  const [gender, setGender] = useState("male");
  const [calories, setCalories] = useState(0);

  function handleSubmit(e) {
    let result = 0;
    e.preventDefault();
    if (gender === "male") {
      result = (879 + 10.2 * weight) * intensity;
    } else {
      result = (795 + 7.18 * weight) * intensity;
    }
    setCalories(result);
  }

  return (
    <div className="container" style={{marginTop: 30}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Weight</label>
          <input className="form-control" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label>Intensity</label>
          <select  className="form-control" value={intensity} onChange={e => setIntensity(e.target.value)}>
            <option value="1.3">Light</option>
            <option value="1.5">Usual</option>
            <option value="1.7">Moderate</option>
            <option value="2">Hard</option>
            <option value="2.2">Very hard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label> 
          <div>
          <label style={{marginRight: 10}}><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
          <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>Calorie consumption: </label> 
          <output>{calories.toFixed(0)}</output>
        </div>
        <button className="btn btn-primary">Calculate</button>
      </form>
    </div>
  );
}

export default App;
