import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportsByCategory } from '../api/apiClient'

const CategoryComponent = () => {
  const [sports, setSports] = useState([])
  const { categoryID } = useParams()

  useEffect(() => {
    if (categoryID) {
      getSportsByCategory(categoryID).then(setSports).catch(console.error)
    }
  }, [categoryID])
}

export default CategoryComponent
