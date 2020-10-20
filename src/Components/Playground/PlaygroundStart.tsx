import React from 'react';
import {useSetRecoilState} from 'recoil';
import {playStart} from '../Store/Atoms';

export default function PlaygroundStart(props) {

  return (
    <div id="playground-start">
      <p>This playground, and even this entire webiste, is built using Recoil!</p>
      <p>Download the Recoilize Dev Tool in the Google Chrome Store and try it out here.</p>
      <div>
      <button type="button" className="grey-button btn-left" onClick={()=>window.open('https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik?hl=en')}>Download</button>
      <button type="button" className="grey-button btn-right" onClick={()=>props.setPlay(true)}>Play</button>
      </div>
    </div>
  )
}