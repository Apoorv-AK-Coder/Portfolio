// import image from './assets/state-mgmt.png';
// import { Core_Concept } from './data.js';

import './style.css';

function Hero_Section() {
return ( <div>
  <h1>HI, I am Apoorv Agarwal.</h1>
                <h2>I thrive in developing outstanding, impactful applications.</h2>
                <p>Frontend Developer & Designer</p>
                <p>A portfolio to show my Experience & Work...</p>
                <a href="https://github.com/Apoorv-AK-Coder" target="_blank"><button className="button1"><i
                            className="fa-brands fa-github fa-beat"></i> GitHub Profile</button></a>
</div>);
}

function App(){
  return (
    <div className="column hero">
                <Hero_Section />
            </div>
  )
}

/*function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function TabButton({label, onClick}) {
  return <li>
    <button onClick={onClick}>{label}</button>
  </li>;
}

function App() {

  function handleClick() {console.log("Hello");}

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>

        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...Core_Concept[0]} />
            <CoreConcept {...Core_Concept[1]} />
            <CoreConcept {...Core_Concept[2]} />
            <CoreConcept title={Core_Concept[3].title} description={Core_Concept[3].description} image={Core_Concept[3].image} />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton label="Button 1" onClick={handleClick} />
            <TabButton label="Button 2" onClick={handleClick} />
            <TabButton label="Button 3" onClick={handleClick} />
            <TabButton label="Button 4" onClick={handleClick} />
          </menu>
          
        </section>
      </main>
    </div>
  );
}

const update = ['Fundamental', 'Crucial', 'Core'];

function newUpdate(max) { return Math.floor(Math.random() * (max + 1)); }

function Header() {
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {update[newUpdate(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}*/

export default App;