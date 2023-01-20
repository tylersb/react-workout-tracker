export default function Workouts(props) {
  const workouts = props.savedWorkouts.map((workout, index) => {
    return (
      <tr>
        <td>{workout.date}</td>
        <td>{workout.exercise}</td>
        <td>{workout.weight}</td>
        <td>{workout.reps}</td>
        <td>
          <a href={`/profile/workouts/${index}`} class="btn btn-primary">
            Edit
          </a>
        </td>
      </tr>
    )
  })

  return (
    <div class="container">
      <h3>My Workout History</h3>
      <table class="table text-white">
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
