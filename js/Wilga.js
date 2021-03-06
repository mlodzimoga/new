class Storage {
  constructor(keyName) {
    this.keyName = keyName;
  }

  uploadLocal(keyValue) {
    localStorage.setItem(this.keyName, keyValue);
  }

  downloadLocal() {
    return localStorage.getItem(this.keyName);
  }

  downloadLocalLength() {
    return localStorage.length;
  }

  synchronizeLocal() {
    this.uploadLocal(this.downloadSession());
  }

  uploadSession(keyValue) {
    sessionStorage.setItem(this.keyName, keyValue);
  }

  downloadSession() {
    return sessionStorage.getItem(this.keyName);
  }

  downloadSessionLength() {
    return sessionStorage.length;
  }

  synchronizeSession() {
    this.uploadSession(this.downloadLocal());
  }
}

class Theme {
  counter = 0;
  variables = [];
  values = [];

  constructor(name="", icon_url="") {
    this.name = name;
    this.icon_url = icon_url;
  }

  add(variable, value) {
    var permission = true;
    for (var i = 0; i < this.counter; i++) {
      if (this.variables[i] == variable) {
        this.values[i] = value;
        permission = false;
      }
    }
    if (permission == true) {
      this.variables.push(variable);
      this.values.push(value);
      this.counter++;
    }
  }

  set() {
    for (var i = 0; i < this.counter; i++) {
      document.documentElement.style.setProperty(this.variables[i], this.values[i]);
    }
  }
}

class ThemeController {
  themesCounter = 0;
  themes = [];

  statusesCounter = 0;
  statuses = [];

  statusIconesCounter = 0;
  statusIcones = [];

  buttonsCounter = 0;
  buttons = [];

  constructor(name="") {
    this.name = name;
  }

  //--------------------ADD--------------------//
  addTheme(theme) {
    this.themes.push(theme);
    this.themesCounter++;
  }

  addButton(button_id) {
    this.buttons.push(button_id);
    this.buttonsCounter++;
    document.getElementById(button_id).addEventListener('click', function () {themeController.toogleSessionTheme()});
  }

  addStatus(status_id) {
    this.statuses.push(status_id);
    this.statusesCounter++;
  }

  addStatusIcon(statusIcon_id) {
    this.statusIcones.push(statusIcon_id);
    this.statusIconesCounter++;
  }

//(+)
  toogleSessionTheme(themeNumber=-9) { //Prze????czanie motywu
    var storage = new Storage(this.name);
    var state = storage.downloadSession();

    if (themeNumber>=0) storage.uploadSession(themeNumber);
    else {
      if (themeNumber == -9) state++;
      else if (themeNumber == -10) state=state;
      else if (themeNumber == -11) state--;

      if (state>=this.themesCounter) state=0;
      storage.uploadSession(state);
    }

    this.run();
  }

//(+)
  showSessionTheme() { //Wy??wietlanie motywu
    var storage = new Storage(this.name);
    var state = storage.downloadSession();

    this.themes[state].set();
    for (var i = 0; i < this.statusesCounter; i++) {
      document.getElementById(this.statuses[i]).innerHTML = this.themes[state].name;
    }
    for (var i = 0; i < this.statusIconesCounter; i++) {
      document.getElementById(this.statusIcones[i]).style.backgroundImage = "url("+this.themes[state].icon_url+")";
    }
  }

//(+)
  synchronizeSessionTheme() { //Ustawianie domy??lnego motywu jako obecny
    var storage = new Storage(this.name);
    storage.synchronizeSession();
  }

//(+)
  synchronizeLocalTheme() { //Ustawianie obecnego motywu jako domy??lny
    var storage = new Storage(this.name);
    storage.synchronizeLocal();
  }

  run() {
    var storage = new Storage(this.name);
    if (storage.downloadLocal() == null) {
      storage.uploadLocal(0);
    }
    if (storage.downloadSession() == null) {
      this.synchronizeSessionTheme();
    }
    this.showSessionTheme();
  }
}
