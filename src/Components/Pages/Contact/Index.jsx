import React from 'react';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>

            <form action="">
                <p className='formTxt'><i class="fa-solid fa-user"></i>Your name</p>
                <input type="text" placeholder="John Doe" />
                <p className='formTxt'><i class="fa-solid fa-at"></i>Your email</p>
                <input type="email" placeholder="johndoe@gmail.com" />
                <p className='formTxt'><i class="fa-solid fa-bars"></i>Your subject</p>
                <input type="text" placeholder="My plan, commercial, questions.." />
                <p className='formTxt'><i class="fa-solid fa-message"></i>Your message</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="I contact you for an offer.."></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;