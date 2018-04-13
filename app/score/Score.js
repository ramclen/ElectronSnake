export default class Score{
  constructor(user, points){
    this.user= user;
    this.points= points;
  }
    
  toJSON(){
    return {
      user : this.user,
      points : this.points
    }
  }
}