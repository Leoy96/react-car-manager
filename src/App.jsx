import react from 'react'

import Esm from './Components/Esm'

const App=()=>{

 const listOfCars = [
  { id: 1, name: "Hyundai", modelNo: 'Tx3021', year:2021 },
  { id: 2, name: "Honda", modelNo: "GX2300", year:2025 },
  { id: 3, name: "Chevrolet", modelNo: "Kj1020", year:2023 }
]

  return(
    <div>
        <Esm cars={listOfCars}/>
    </div>
  )
}

export default App