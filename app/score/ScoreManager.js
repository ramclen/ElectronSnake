import events from '../../core/Events';
import Score from './Score';
import { ipcRenderer } from 'electron';

export default class ScoreManager {
  constructor(){
    
  }

  save(score){
    ipcRenderer.send(events.system.storage, {method: 'score', data: score.toJSON()})
  }
}
