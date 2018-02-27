const request = require("request")
let taskApiRequest;

(function () {
    const baseUrl = 'localhost:5000/api'

    taskApiRequest = {
        addList: function (data) {
            let options = {
                method: 'POST',
                url: 'http://localhost:5000/api/tasks',
                headers: { 'Content-Type': 'application/json' },
                body: data /*{ text: 'Comprar leche' }*/,
                json: true
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body)
            })
        },
        getTasksList: function () {
            let options = {
                method: 'GET',
                url: 'http://localhost:5000/api/tasks',
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body)
            })
        },
        getTasksDone: function () {
            let options = {
                method: 'GET',
                url: 'http://localhost:5000/api/tasks/done',
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        },
        getTasksToDo: function () {
            let options = {
                method: 'GET',
                url: 'http://localhost:5000/api/tasks/todo',
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        },
        setTaskAsDone: function (id) {
            let options = {
                method: 'PUT',
                url: 'http://localhost:5000/api/tasks/'+id,
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        },
        changeTask: function (id,data) {
            let options = {
                method: 'PATCH',
                url: 'http://localhost:5000/api/tasks/'+id,
                headers: { 'Content-Type': 'application/json' },
                body: data,
                json: true
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        },
        deleteTask: function (id) {
            let options = {
                method: 'DELETE',
                url: 'http://localhost:5000/api/tasks/'+id,
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        },
        deleteAll: function(){
            let options = {
                method: 'DELETE',
                url: 'http://localhost:5000/api/tasks/',
            }
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            })
        }
    }
})()

//taskApiRequest.addList('oo', { text: "Comprar leche" })
console.log(taskApiRequest.getTasksList())