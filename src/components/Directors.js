import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director)=>(
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie)=>(
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
  ))

  return( 
    <div>
      <h2>Directors Page</h2>
      {directorsList}
 `` </div>
  )
}

export default Directors;
