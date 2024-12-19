import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="border border-red-300 rounded-xl flex flex-col space-y-3 w-full my-3 pb-6 text-white" key={props.id}>{props.children}</div>
  )
}

export default MovieCard