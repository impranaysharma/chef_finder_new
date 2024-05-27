import React from 'react'

const Form = () => {
  return (
    <form 
    method="POST" 
    action="https://script.google.com/a/macros/thebadnaamadda.com/s/AKfycbzwnWTifq15UdEBqGzzjQg7ouYy6NhGJ3ALM_a2HbIqM7ZQWzPD5afIXT6Nh6_wMbelOw/exec"
  >
    <input name="Email" type="email" placeholder="Email" required/>
    <input name="Name" type="text" placeholder="Name" required/>
    <button type="submit">Send</button>
  </form>
  )
}

export default Form