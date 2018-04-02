import * as events from '../../core/Events';
import Score from './Score';

export default class ScoreManager {
  constructor(){
    
  }

  save(score){
    ipcRenderer.send(events.system.storage, {method: 'score', data: score.toJSON()})
  }
}
