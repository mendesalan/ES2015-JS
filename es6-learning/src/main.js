class TaskCollection {

    constructor(tasks = []) {

        this.tasks = tasks

    }

    prepare() {
        this.tasks.forEach( (task) => {
            console.log(this)
        });
    }
}

class Task {
    toGulp() {
        console.log('converting to gulp.')
    }
}

new TaskCollection([
    new Task, new Task, new Task
]).prepare()

let name = 'Batman'
let template = `<div><p>hello ${name}</p></div>`;


console.log(template)
