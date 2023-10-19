import React from 'react'
import Hero from './sections/Hero'
import Service from './sections/Service'
import About from './sections/About'
import Dish from './sections/Dish'
import Menu from './sections/Menu'
import Testimonial from './sections/Testimonial'
import Reservation from './sections/Reservation'
import Feature from './sections/Feature'
import Event from './sections/Event'

export default function Home() {
  return (
    <>
        <Hero />
        <Service />
        <About />
        <Dish />
        <Menu />
        <Testimonial />
        <Reservation />
        <Feature />
        <Event />
    </>
  )
}
