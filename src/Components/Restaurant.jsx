import React from 'react'
import Card from './Card'
import data from '../db.json'

const handleEdit = (id) => {
  alert(`Edit restaurant with id: ${id}`)
}

const handleDelete = (id) => {
  alert(`Delete restaurant with id: ${id}`)
}

const Restaurant = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap justify-center gap-6'>
        {data.restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            title={restaurant.title}
            type={restaurant.type}
            img={restaurant.img}
            onEdit={() => handleEdit(restaurant.id)}
            onDelete={() => handleDelete(restaurant.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Restaurant