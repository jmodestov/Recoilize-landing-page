import React from 'react';
import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import Playground from './Playground/Playground';
import PlaygroundStart from './Playground/PlaygroundStart';
import {playStart} from './Store/Atoms';
import TicTacToe from './Playground/TicTacToe';
import RecoilizeDebugger from 'recoilize';


export default function PlaygroundSection() {

// const play = useRecoilValue(playStart)

// useEffect(() => {
//     async function declareRoot(){
//         const root = await document.getElementById('playground-section');
//     }
//     declareRoot();
// }, [])

return (
    <div className="dark-background" id="playground-section">

        {/* <h2 className="section-title-center">Give it a try!</h2>

        <div id="playground-container">

        <RecoilizeDebugger root={ () => document.getElementById('playground-section') } />
        { play ? <TicTacToe /> : <PlaygroundStart />}

        </div> */}
    </div>
)
}