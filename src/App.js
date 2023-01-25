import './App.css'
import Favorites from './components/Favorites'
import Workouts from './components/Workouts'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'

function App() {
  const [savedWorkouts, setSavedWorkouts] = useState([
    {
      date: '',
      exercise: '',
      weight: null,
      reps: null
    }
  ])

  const [favorites, setFavorites] = useState([])

  const [newWorkout, setNewWorkout] = useState({
    date: '',
    exercise: '',
    weight: '',
    reps: '',
  })

  useEffect(() => {
    const getWorkouts = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/workouts`)
      setSavedWorkouts(response.data)
    }
    getWorkouts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/workouts`, newWorkout)
    setSavedWorkouts(response.data)
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
          <Workouts savedWorkouts={savedWorkouts} setSavedWorkouts={setSavedWorkouts} />
        </div>
      </div>
    </div>
  )
}

export default App
