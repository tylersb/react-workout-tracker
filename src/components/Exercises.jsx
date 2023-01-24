import exerciseData from '../exerciseData.js'
import { useState } from 'react'

export default function Exercises(props) {
  const [filter, setFilter] = useState({
    name: '',
    type: '',
    muscle: '',
    equipment: '',
    difficulty: '',
  })

  const filteredExercises = exerciseData.filter((exercise) => {
    return (
      exercise.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      exercise.type.toLowerCase().includes(filter.type.toLowerCase()) &&
      exercise.muscle.toLowerCase().includes(filter.muscle.toLowerCase()) &&
      exercise.equipment.toLowerCase().includes(filter.equipment.toLowerCase()) &&
      exercise.difficulty.toLowerCase().includes(filter.difficulty.toLowerCase())
    )
  })

  const exercises = filteredExercises.map((exercise, index) => {
    return (
      <div key={`exercise-${index}`} className="container-fluid">
        <div className="row">
          <div className="col">Name: {exercise.name}</div>
          <div className="col">Type: {exercise.type}</div>
          <div className="col">Muscle: {exercise.muscle}</div>
          <div className="col">Equipment: {exercise.equipment}</div>
          <div className="col">Difficulty: {exercise.difficulty}</div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-auto">Instructions:</div>
          <div className="col-auto ms-auto">
            <form>
              <input
                type="submit"
                className="btn btn-primary"
                value={props.favorites.includes(exercise) ? 'Unfavorite' : 'Favorite'}
                onClick={(e) => {
                  e.preventDefault()
                  props.handleFavorite(exercise)
                }}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">{exercise.instructions}</div>
        </div>
        <hr />
      </div>
    )
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">Name</div>
        <div className="col">Type</div>
        <div className="col">Muscle</div>
        <div className="col">Equipment</div>
        <div className="col">Difficulty</div>
      </div>
      <div className="row">
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          className="col form-control"
          value={filter.name}
        />
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          className="col form-control"
          value={filter.type}
        />
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, muscle: e.target.value })}
          className="col form-control"
          value={filter.muscle}
        />
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, equipment: e.target.value })}
          className="col form-control"
          value={filter.equipment}
        />
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
          className="col form-control"
          value={filter.difficulty}
        />
      </div>
      <hr/>
      {exercises}
    </div>
  )
}
