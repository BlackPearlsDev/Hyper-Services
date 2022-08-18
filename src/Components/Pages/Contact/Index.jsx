import React from 'react';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>

            <form action="">
                <label className='formTxt'><i class="fa-solid fa-user"></i>Your name</label>
                <input type="text" placeholder="John Doe" />
                <label className='formTxt'><i class="fa-solid fa-at"></i>Your email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
                <label className='formTxt'><i class="fa-solid fa-bars"></i>Your subject</label>
                <input type="text" placeholder="My plan, commercial, questions.." />
                <label className='formTxt'><i class="fa-solid fa-message"></i>Your message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="I contact you for an offer.."></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;