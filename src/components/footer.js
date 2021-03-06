import React, { useState as State } from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import "../CSS folder/footer.css"
import axios from "axios"

const footer = () => {
  const [input, setInput] = State("")
  const [subscribed, setSubscribed] = State(false)

  const handleSub = async e => {
    e.preventDefault()
    if (input) {
      window.open(
        `mailto:${process.env.REACT_APP_TO_EMAIL}?subject=${encodeURIComponent(
          "New Subscriber"
        )}&body=hello reply to (${encodeURIComponent(
          input
        )}): ${encodeURIComponent("just subscribed")}`
      )
    }
    setInput("")
  }

  return (
    <div className="footer">
      <div className="footer_text">
        Subscribtion is exclusively respectfull for us ❤
      </div>

      <form className="subscribe" onSubmit={handleSub}>
        <p>Subscribe</p>
        <Input
          className="input_sub"
          placeholder="Enter your Email"
          required
          value={input}
          type="text"
          onChange={e => setInput(e.target.value)}
        />
        <Button
          type="submit"
          className="btn_sub"
          variant="contained"
          color={subscribed ? "primary" : "secondary"}
          disabled={subscribed ? true : false}
        >
          {subscribed ? "Thank you" : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}

export default footer
