export class Task {
  constructor(action = "Классный курс!") {
    this.action = action;
  }
  run() {
    console.log(this.action);
  }
}
