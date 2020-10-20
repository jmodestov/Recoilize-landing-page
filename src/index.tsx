import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { RecoilRoot, useRecoilValue } from 'recoil';
import RecoilizeDebugger from 'recoilize';
// import RecoilizeDebugger from 'recoilize';

import {playStart} from './Components/Store/Atoms';
import TicTacToe from './Components/Playground/TicTacToe';
import PlaygroundStart from './Components/Playground/PlaygroundStart';

const root = document.getElementById('root');


function Play(){
  const [play, setPlay] = useState<Boolean>(false)
  return (
      <>
  <h2 className="section-title-center">Give it a try!</h2>

  <div id="playground-container">

    <RecoilizeDebugger root={ document.getElementById('playground-section') } />
    { play ? <TicTacToe /> : <PlaygroundStart setPlay={setPlay}/>}

  </div>
  </>
  )
}

ReactDOM.render(

  <App />,

  root
);

ReactDOM.render(
  <RecoilRoot>
    <Play/>
  </RecoilRoot>,
  document.getElementById('playground-section')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();