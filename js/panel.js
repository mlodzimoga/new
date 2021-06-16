class Panel {
  constructor(id, state=1) {
    this.id = id;
    this.state = state;
    this.switchPanel();
  }

  switchPanel() {
    if (this.state==0) {
      document.querySelector("#"+this.id).style.display = "block";
      this.state=1;
    }
    else if (this.state==1) {
      document.querySelector("#"+this.id).style.display = "none";
      this.state=0;
    }
  }
}

var panel = new Panel("panel");
