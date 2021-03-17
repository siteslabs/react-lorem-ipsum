import React, { useState } from "react"
import data from "./data"
function App() {
  const [texts, setText] = useState(data),
    [length, setLength] = useState(0),
    submitHandler = (e) => {
      e.preventDefault()
      let amount = parseInt(length)
      if (amount <= 0) {
        amount = 1
      } else if (amount > data.length) {
        amount = data.length
      }
      setText(data.slice(0, amount))
    }

  return (
    <section className="section-center">
      <h3>Tired of lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {texts.map((text, index) => {
          return <p key={index}>{text}</p>
        })}
      </article>
    </section>
  )
}

export default App
