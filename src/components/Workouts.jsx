export default function Workouts(props) {
  const sortedWorkouts = props.savedWorkouts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  const workouts = sortedWorkouts.map((workout, index) => {
    workout.date = new Date(workout.date).toUTCString().slice(0, 16)
    return (
      <tr key={`workout-${index}`}>
        <td>{workout.date}</td>
        <td>{workout.exercise}</td>
        <td>{workout.weight}</td>
        <td>{workout.reps}</td>
        <td>
          <a href={`/profile/workouts/${index}`} className="btn btn-primary">
            Edit
          </a>
        </td>
      </tr>
    )
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
        <tbody>
          {workouts}
        </tbody>
      </table>
    </div>
  )
}
