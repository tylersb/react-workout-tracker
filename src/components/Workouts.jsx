import { useState } from 'react'
import axios from 'axios'

export default function Workouts(props) {
  const [editWorkout, setEditWorkout] = useState('')
  const [form, setForm] = useState({
    date: '',
    exercise: '',
    weight: '',
    reps: '',
  })

  const handleEditClick = (e) => {
    setEditWorkout(e._id)
    setForm({
      date: e.inputDate,
      exercise: e.exercise,
      weight: e.weight,
      reps: e.reps,
    })
  }

  const handleUpdate = async (id, form) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/workouts/${id}`, form)
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/workouts`
      )
      props.setSavedWorkouts(response.data)
      setEditWorkout('')
    } catch (err) {
      console.warn(err)
    }
  }

  const sortedWorkouts = props.savedWorkouts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  const workouts = sortedWorkouts.map((workout, index) => {
    workout.inputDate = new Date(workout.date)
    let day = workout.inputDate.getUTCDate()
    let month = workout.inputDate.getUTCMonth() + 1
    const year = workout.inputDate.getUTCFullYear()
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    workout.inputDate = `${year}-${month}-${day}`
    if (editWorkout === workout._id) {
      return (
        <tr key={`workout-${index}`}>
          <td>
            <input
              type="date"
              className="form-control"
              id="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              id="exercise"
              value={form.exercise}
              onChange={(e) => setForm({ ...form, exercise: e.target.value })}
              required
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              required
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              id="reps"
              value={form.reps}
              onChange={(e) => setForm({ ...form, reps: e.target.value })}
              required
            />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => handleUpdate(workout._id, form)}
              >
              Save
              </button>
          </td>
        </tr>
      )
    } else {
      workout.date = new Date(workout.date).toUTCString().slice(0, 16)
      return (
        <tr key={`workout-${index}`}>
          <td>{workout.date}</td>
          <td>{workout.exercise}</td>
          <td>{workout.weight}</td>
          <td>{workout.reps}</td>
          <td>
            <button className="btn btn-primary" onClick={() => handleEditClick(workout)}>
              Edit
            </button>
          </td>
        </tr>
      )
    }
  })

  return (
    <div className="container">
      <h3>My Workout History</h3>
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Exercise</th>
            <th scope="col">Weight</th>
            <th scope="col">Reps</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{workouts}</tbody>
      </table>
    </div>
  )
}
