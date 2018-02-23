'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class TaskCollection {

//     constructor(tasks = []) {

//         this.tasks = tasks

//     }

//     prepare() {
//         this.tasks.forEach( (task) => {
//             console.log(this)
//         });
//     }
// }

// class Task {
//     toGulp() {
//         console.log('converting to gulp.')
//     }
// }

// new TaskCollection([
//     new Task, new Task, new Task
// ]).prepare()

// let name = 'Batman'
// let template = `<div><p>hello ${name}</p></div>`;


// console.log(template)

var User = function () {
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    _createClass(User, [{
        key: 'changeEmail',
        value: function changeEmail(newEmail) {
            this.email = newEmail;
        }
    }]);

    return User;
}();

var user = new User('Alan Mendes', 'alan@demystify.com');

user.changeEmail('newemail@newEmail.com');

console.dir(user);