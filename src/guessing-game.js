class GuessingGame {

    constructor() {
    this.nMin=0;
    this.nMax=0;
    this.nTarget=0;
    }

    setRange(min, max) {
      this.nMin=min;
      this.nMax=max;
    }

    guess() {
      this.nTarget=Math.round((this.nMax+this.nMin)/2);
      return this.nTarget;
    }

    lower() {
       this.nMax=this.nTarget;
    }

    greater() {
       this.nMin=this.nTarget;
    }
}

module.exports = GuessingGame;
