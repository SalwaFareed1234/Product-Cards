
import React from 'react'
import { Button } from '@base-ui/react'
import { ShoppingCart } from '@/components/animate-ui/icons/shopping-cart';

const Card = (props) => {
  return (
    <div className="w-72 rounded-xl bg-white p-6 shadow-lg">

      <img
        src={props.img}
        alt={props.tittle}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h3 className="text-3xl font-bold text-black mt-3">
        Tittle: {props.tittle}
      </h3>

      <h3 className="mt-4 text-lg font-semibold text-gray-700">
        Price: {props.price}
      </h3>

      <Button
        className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white"
        variant="destructive"
      >
        Destructive
          <ShoppingCart animateOnHover />
      </Button>

    </div>
  )
}

export default Card
