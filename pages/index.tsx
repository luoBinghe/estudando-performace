import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'

import { SearchList } from '../components/SearchList'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState([])

  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    
    if(!text.trim()){
      return
    }

    const response = await fetch(`http://localhost:3333/product?q=${text}`)
    const desformmed = await response.json()
    setData(desformmed)
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

        <button type="submit">
          Buscar
        </button>
      </form>

      <div>
        {data &&
          <SearchList results={data}/>
        }
      </div>
    </div>
  )
}

export default Home
