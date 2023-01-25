import './App.css'
import Favorites from './components/Favorites'
import Workouts from './components/Workouts'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [savedWorkouts, setSavedWorkouts] = useState([
    {
      date: '2023-01-09',
      exercise: 'Bench Press',
      weight: 135,
      reps: 10
    }
  ])

  const [favorites, setFavorites] = useState([])

  const [newWorkout, setNewWorkout] = useState({
    date: '',
    exercise: '',
    weight: '',
    reps: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedWorkout = [newWorkout, ...savedWorkouts]
    setSavedWorkouts(updatedWorkout)
  }

  const handleFavorite = (addFavorite) => {
    const newFavorites = [...favorites]
    const favoriteExists = newFavorites.indexOf(addFavorite)
    if(favoriteExists >= 0 ) {
      newFavorites.splice(favoriteExists, 1)
    } else {
      newFavorites.push(addFavorite)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="App">
    <Navbar handleFavorite={handleFavorite} favorites={favorites}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <form onSubmit={handleSubmit}>
              <div className="row form-group">
                <label htmlFor="date" className="col-auto form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="col-auto form-control"
                  id="date"
                  name="date"
                  value={newWorkout.date}
                  onChange={(event) => setNewWorkout({ ...newWorkout, date: event.target.value })}
                  required
                />
              </div>

              <div className="row form-group">
                <label htmlFor="exercise" className="col-auto form-label">
                  Exercise Name
                </label>
                <input
                  type="text"
                  className="col-auto form-control"
                  id="exercise"
                  name="exercise"
                  value={newWorkout.exercise}
                  onChange={(event) => setNewWorkout({ ...newWorkout, exercise: event.target.value })}
                  required
                />
              </div>

              <div className="row form-group">
                <label htmlFor="weight" className="col-auto form-label">
                  Weight
                </label>
                <input
                  type="number"
                  className="col-auto form-control"
                  id="weight"
                  name="weight"
                  value={newWorkout.weight}
                  onChange={(event) => setNewWorkout({ ...newWorkout, weight: event.target.value })}
                  required
                />
              </div>

              <div className="row form-group">
                <label htmlFor="reps" className="col-auto form-label">
                  Reps
                </label>
                <input
                  type="number"
                  className="col-auto form-control"
                  id="reps"
                  name="reps"
                  value={newWorkout.reps}
                  onChange={(event) => setNewWorkout({ ...newWorkout, reps: event.target.value })}
                  required
                />
              </div>

              <input
              className="btn btn-primary"
              type="submit"                
              />
            </form>
          </div>
          <div className="col overflow-auto" style={{ height: '400px' }}>
            <Favorites favorites={favorites} />
          </div>
          <Workouts savedWorkouts={savedWorkouts} />
        </div>
      </div>
    </div>
  )
}

export default App
