import './App.css'
import Favorites from './components/Favorites'
import Workouts from './components/Workouts'
import { useState } from 'react'

function App() {
  const [savedWorkouts, setSavedWorkouts] = useState([
    {
      date: '2023-01-09',
      exercise: 'Bench Press',
      weight: 135,
      reps: 10
    }
  ])

  const [date, setDate] = useState('')
  const [exercise, setExercise] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newWorkout = {
      date: date,
      exercise: exercise,
      weight: weight,
      reps: reps
    }
    setSavedWorkouts([...savedWorkouts, newWorkout])
  }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <form onSubmit={handleSubmit}>
              <div class="row form-group">
                <label for="date" class="col-auto form-label">
                  Date
                </label>
                <input
                  type="date"
                  class="col-auto form-control"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </div>

              <div class="row form-group">
                <label for="exercise" class="col-auto form-label">
                  Exercise Name
                </label>
                <input
                  type="text"
                  class="col-auto form-control"
                  id="exercise"
                  name="exercise"
                  value={exercise}
                  onChange={(event) => setExercise(event.target.value)}
                  required
                />
              </div>

              <div class="row form-group">
                <label for="weight" class="col-auto form-label">
                  Weight
                </label>
                <input
                  type="number"
                  class="col-auto form-control"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  required
                />
              </div>

              <div class="row form-group">
                <label for="reps" class="col-auto form-label">
                  Reps
                </label>
                <input
                  type="number"
                  class="col-auto form-control"
                  id="reps"
                  name="reps"
                  value={reps}
                  onChange={(event) => setReps(event.target.value)}
                  required
                />
              </div>

              <input
              class="btn btn-primary"
              type="submit"                
              />
            </form>
          </div>
          <div class="col overflow-auto" style={{ height: '400px' }}>
            <Favorites />
          </div>
          <Workouts savedWorkouts={savedWorkouts} />
        </div>
      </div>
    </div>
  )
}

export default App
