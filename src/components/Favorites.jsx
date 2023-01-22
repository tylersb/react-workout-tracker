export default function Favorites(props) {
  
  const favorites = props.favorites.map((exercise, index) => {
    return (
      <div key={`favorite-${index}`}>
        <div className="row">
          <span className="col border border-primary rounded-start">
            {exercise.name}
          </span>
          <span className="col border border-primary"> {exercise.muscle}</span>
          <span className="col border border-primary rounded-end">
            {exercise.equipment}
          </span>
        </div>
        <div className="row">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#exerciseInstructions{index}"
            aria-expanded="false"
            aria-controls="ExerciseInstructions"
          >
            Click for instructions
          </button>
          <div className="collapse" id="exerciseInstructions{index}">
            <div className="card card-body bg-dark text-white">
              {exercise.instructions}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="col overflow-auto" style={{ height: '400px' }}>
      <div className="container fluid">{favorites}</div>
    </div>
  )
}
