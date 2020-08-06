import React from 'react'

const HandleRequeset = ({ loading, error, children }) => {
  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return children
}

export default HandleRequeset
