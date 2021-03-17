// import logo from './logo.svg';
import './App.css';
// import { Background, Parallax } from 'react-parallax';
// import fox from './images/fox.png'
import {Helmet} from "react-helmet";
import Terminal from './Terminal';

let responses = {
  disclaimer: <div>Welcome to V-shell
                  <div className="subDisclaimer"><i>type help to know more</i></div>
              </div>,
  commandList:[
    {
      command: 'ls',
      response: <div>about.sh 
                  <br/>interests.sh
                  <br/>links.sh
                  </div>
    },
    {
      command: './about.sh',
      response: <diV>
                  <h1>Hi, I'm Venkat</h1>
                  <h3>A full-stack engineer interested in everything CS</h3>
                </diV>
    },
    {
      command: './interests.sh',
      response: <h1>namaste</h1>
    },
    {
      command: 'help',
      response: <div>Here are some of the commands to try out
                <ul>
                  <li><b>ls</b> - for list of available commands</li>
                  <li><b>./about.sh</b> - run a script :-)</li>
                  <li><b>help</b> - to get back here</li>
                </ul>
                There are few hidden easter eggs too! Do drop a star on github repo if you liked this page!</div>
    }
  ],
  colorPallete: ["green","blue","maroon","yellow","aqua","red"],
  defaultColor: "crimson",
  error: <div>I'm not sure what info you've asked for. You can ask for help by typing help</div>
}

function App() {

  return (
    <div className="App">
      <Helmet>
        {/* <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script> */}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
        </style>
      </Helmet>
      <Terminal className="terminal"
                responseList={responses}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Parallax className="mainLayer">
        <div>
          <h1>Hi I'm Venkat</h1>
          <p>
          A Full-Stack developer with eyes and ears on anything in CS or soccer.
          </p>
          <a-scene>
            <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-sky color="#BBBBBB"></a-sky>
          </a-scene>
        </div>
      </Parallax>
      <Parallax bgImageAlt="the fox" 
      strength={200}
      className="foxLayer">
        Content goes here. Parallax height grows with content height.
        <img src={fox} alt=""
         className="foxImage"/> 
      </Parallax> */}
    </div>
  );
}

export default App;
