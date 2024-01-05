import { useState } from "react"
import data from "./MOCK_DATA.json"
const Search = () => { 
  const [searchItem, setsearchItem] = useState("")
  return (
    <div className="container">
      <div>
        <input type="text"className="search" placeholder="Search..." onChange={event => setsearchItem(event.target.value)}/>
      </div>
      <div className="data">
      {data.filter((datum) => {
        if (searchItem == "") {
          return datum
        } else if (datum.first_name.toLocaleLowerCase().includes(searchItem.toLowerCase())) {
          return datum
        }
      }).map((datum, key) => {
        return (
          <div key={key} className="cards">
            <p className="card">{ datum.first_name}</p>
          </div>
        )
      })
        }
      </div>
    </div>
  )
}

export default Search