import React from 'react';
import Cards from '../Cards/Index';

function Main() {
  return (
    <main>
        <h2>Our Services</h2>

        <section id='zoneCards'>
            <Cards title="Start 🚀" price="Free" elemOne="• 3 projects" elemTwo="• Non-shareable files" elemThree="• 1 editors" nameClass="cards" nameId="cardStart"/>
            <Cards title="User 🚀" price="$12/m" elemOne="• 50 projects" elemTwo="• Shareable files" elemThree="• 3 editors" nameClass="cards" nameId="cardStart"/>
            <Cards title="Pro 🚀" price="$59/m" elemOne="• Unlimited projects" elemTwo="• Shareable files" elemThree="• Multiple editors" nameClass="cards" nameId="cardPro"/>
        </section>
    </main>
  )
}

export default Main;