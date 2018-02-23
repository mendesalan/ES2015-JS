'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(name, status) {
    _classCallCheck(this, Task);

    this.name = name;
    this.status = status;
};

var task = new Task('Clean the room', 'open');

console.log(task);