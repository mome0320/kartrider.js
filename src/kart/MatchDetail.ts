import type { rawMatchDetail } from '../../typings/raw'
import Match from './Match';
export default class MatchDetail extends Match{
    private _playTime: number;
    public gameSpeed: number;

    constructor(data: rawMatchDetail){
    super(data);
    this._playTime = data.playTime;
    this.gameSpeed = data.gameSpeed;
    }
    
    get playTime(){
        return this._playTime;
    }
}