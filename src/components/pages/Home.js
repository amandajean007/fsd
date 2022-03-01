import React from 'react';
import "./Home.css"

export default function Home() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December! I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain. Check out some of my projects I have been working on the past year. Leave me a comment!'
  
  return (
    <div className="container">
    <h1>Amanda McBee</h1> <br />
    <div>
      <h3>(303) 489-5490</h3>
      <br />
      <a target="_blank" rel="noreferrer" href="mailto:ahanes35@yahoo.com">
        amandajeanmcbee@gmail.com
      </a>
      <br />
      <br />
    </div>
      <div className="aboutme">
        <h2>Frozen Smoke:</h2>
          <p className="me">
            {greeting} <br/><br/>
          </p>
      </div>
    </div>
  );
}
