(function () {
  'use strict';

  class Task {
    constructor(action = "Классный курс!") {
      this.action = action;
    }
    run() {
      console.log(this.action);
    }
  }

  class User {
    constructor(task) {
      this.task = task;
    }
    do() {
      this.task.run();
    }
  }

  const task = new Task("Классный курс!");
  const user = new User(task);      
  user.do();

})();
