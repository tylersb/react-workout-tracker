import { useState } from 'react'

export default function Favorites() {
  const [exercises, setFavorites] = useState([
    {
      name: 'Bench Press',
      muscle: 'Chest',
      equipment: 'Barbell',
      instructions:
        'Lie on your back on a flat bench. Grasp a barbell with an overhand grip that is slightly wider than shoulder width. Unrack the bar and hold it straight over you with your arms locked. Lower the bar to your chest by flexing your elbows and pectoral muscles. Press the bar back to the starting position.'
    }
  ])

  const favorites = exercises.map((exercise, index) => {
    return (
      <>
        <div class="row">
          <span class="col border border-primary rounded-start">
            {exercise.name}
          </span>
          <span class="col border border-primary"> {exercise.muscle}</span>
          <span class="col border border-primary rounded-end">
            {exercise.equipment}
          </span>
        </div>
        <div class="row">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#exerciseInstructions{index}"
            aria-expanded="false"
            aria-controls="ExerciseInstructions"
          >
            Click for instructions
          </button>
          <div class="collapse" id="exerciseInstructions{index}">
            <div class="card card-body bg-dark text-white">
              {exercise.instructions}
            </div>
          </div>
        </div>
      </>
    )
  })

  return (
    <div class="col overflow-auto" style={{ height: '400px' }}>
      <div class="container fluid">{favorites}</div>
    </div>
  )
}
