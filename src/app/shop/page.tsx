import React from 'react'
import Coord from '../coords/page';
import Tops from '../tops/page';
import Dresses from '../dresses/page';
import Bottoms from '../bottoms/page';

function page() {
  return (
    <section>
        <Coord />
        <Tops />
        <Bottoms />
        <Dresses />
    </section>
  )
}

export default page