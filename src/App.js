import React, { useEffect, useState } from 'react'
import { Loading } from './loading'

const api = "https://jsonplaceholder.typicode.com/posts"

export default function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])


  const fetchData = async() => {
    setLoading(true)
    try {
      const response = await fetch(api)
      const source  =  await response.json()
      setLoading(false)
      setData(source)
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
  }

useEffect(()=>{
  fetchData()
}, [])


  if (loading) {
    return <Loading/>
  }

  return (
    <main>
        <h1>Hello World! {data.length}</h1>
        {data.map((data)=> {
          const {id, title, body} = data

          return(
          <article key={id} className='blog'>
            <h2 className='blog_title'>{title}</h2>
            <p className='blog_info'>{body}</p>
          </article>
          )
        })}
    </main>
  )
}
