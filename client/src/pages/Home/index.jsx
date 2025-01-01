import React from 'react'
import Icon from '../../components/Icon'

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Icon name="home" size="48px" color="blue" />
      <Icon name="search" size="36px" color="green" />
      <Icon name="favorite" size="48px" color="red" />
      <Icon name="settings" size="32px" />
      <span className="material-symbols-outlined">
search
</span>
    </div>
  )
}

export default Home