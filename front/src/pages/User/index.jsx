import React, { useEffect } from 'react'
//Components
import Header from '../../components/Header'

const User = () => {

    useEffect(() => {
      fetch(`http://localhost:3000/user/12/performance`)
          .then((response) => response.json()
          .then(({ data }) => console.log(data))
          .catch((error) => console.log(error))
      )
    }, [])

  return (
    <div id='dashboard__container'>
        <Header
            prenom={'Thomas'}
        />
    </div>
  )
}

export default User