import exerciseData from '../exerciseData.js'
import { useState } from 'react'

export default function Exercises(props) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [muscle, setMuscle] = useState('')
  const [equipment, setEquipment] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const filteredExercises = exerciseData.filter((exercise) => {
    return (
      exercise.name.toLowerCase().includes(name.toLowerCase()) &&
      exercise.type.toLowerCase().includes(type.toLowerCase()) &&
      exercise.muscle.toLowerCase().includes(muscle.toLowerCase()) &&
      exercise.equipment.toLowerCase().includes(equipment.toLowerCase()) &&
      exercise.difficulty.toLowerCase().includes(difficulty.toLowerCase())
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
          onChange={(e) => setName(e.target.value)}
          className="col form-control"
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setType(e.target.value)}
          className="col form-control"
          value={type}
        />
        <input
          type="text"
          onChange={(e) => setMuscle(e.target.value)}
          className="col form-control"
          value={muscle}
        />
        <input
          type="text"
          onChange={(e) => setEquipment(e.target.value)}
          className="col form-control"
          value={equipment}
        />
        <input
          type="text"
          onChange={(e) => setDifficulty(e.target.value)}
          className="col form-control"
          value={difficulty}
        />
      </div>
      <hr/>
      {exercises}
    </div>
  )
}
