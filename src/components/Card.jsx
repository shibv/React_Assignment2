import { Grid, Paper } from '@mui/material'
import React, { useContext } from 'react'
import "./Card.css"



const Card = ({item}) => {



  return (
    <Grid key={item.id} item height="auto">
   <article class="card">
            <header class="card__thumb">
                <a href="#"><img src={item.image_url}/></a>
            </header>
           
            <div class="card__body">
                <div class="card__category"><a href="#"> {item.first_brewed.slice(3)}</a></div>
                <h2 class="card__title"><a href="#">{item.name}</a></h2>
                <div class="card__subtitle">{item.tagline}</div>
                <p class="card__description">{item.description.slice(0,275)}</p>
            </div>

        </article>
  </Grid>
  )
}

export default Card
