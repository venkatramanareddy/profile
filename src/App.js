import './App.css';
import {Helmet} from "react-helmet";
import Terminal from './Terminal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons';

let responses = {
  disclaimer: <div>Welcome to V-shell
                  <div className="subDisclaimer"><i>type help to know more</i></div>
              </div>,
  commandList:[
    {
      command: 'ls',
      response: <div>about.sh 
                  <br/>links.sh
                  </div>
    },
    {
      command: './about.sh',
      response: <div>
                  <h1>Namaste, I'm Venkat</h1>
                  <h3>A full-stack engineer interested in everything CS</h3>
                </div>
    },
    {
      command: './interests.sh',
      response: <h1>coming soon...</h1>
    },
    {
      command: './links.sh',
      response: <div>
                  <a href="https://github.com/venkatramanareddy" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="linkIcons" fixedWidth/>GitHub
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="linkIcons" fixedWidth/>
                  </a><br/>
                  <a href="https://stackoverflow.com/users/5725669/venkat-ramana" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faStackOverflow} className="linkIcons" fixedWidth/>Stackoverflow
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="linkIcons" fixedWidth/>
                  </a><br/>
                  <a href="https://codepen.io/venkatramanareddy" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faCodepen} className="linkIcons" fixedWidth/>Codepen
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="linkIcons" fixedWidth/>
                  </a><br/>
                  <a href="http://venkatramanareddy.github.io/">
                    <FontAwesomeIcon icon={faHome} className="linkIcons" fixedWidth/>Homepage
                  </a>
                </div>
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
  colorPallete: ["green","blue","maroon","yellow","aqua","red","beige","violet","orange"],
  defaultColor: "crimson",
  error: <div>I'm not sure what info you've asked for. You can ask for help by typing help</div>
}

function App() {

  return (
    <div className="App">
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
        </style>
      </Helmet>
      <Terminal className="terminal"
                responseList={responses}
      />
    </div>
  );
}

export default App;
