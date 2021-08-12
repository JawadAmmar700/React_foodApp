import React, { useState as State } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import '../CSS folder/footer.css'



const footer = () => {
    const [input, setInput] = State('')
    const [subscribed, setSubscribed] = State(false)

    const handleSub = async (e) => {
        e.preventDefault()
        if (input) {

            await fetch('http://localhost:5000/', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'

                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({ form_email: input })

            }).then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setSubscribed(true)
                }).catch(err => console.log(err))
        }

        setInput('')
    }






    return (
        <div className="footer">

            <div className="footer_text">
                Subscribtion is exclusively
                respectfull for us ❤
            </div>


            <form className="subscribe" onSubmit={handleSub}>
                <p>Subscribe</p>
                <Input className="input_sub" placeholder="Enter your Email" required value={input} type='text' onChange={e => setInput(e.target.value)} />
                <Button type='submit' className="btn_sub" variant="contained" color={subscribed ? "primary" : 'secondary'} disabled={subscribed && true}>
                    {subscribed ? 'Thank you' : "Subscribe"}
                </Button>
            </form>

        </div>
    )
}

export default footer
