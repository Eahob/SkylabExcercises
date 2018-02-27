const axios = require('axios')

let taskApiCall;

(function () {
    const baseUrl = 'http://localhost:5000/api/tasks/'

    taskApiCall = {
        addList: function (data) {
            return axios.post(baseUrl,data)
        },
        getTasksList: function () { // Returs All Tasks
            return axios.get(baseUrl).then(res => res.data)
        },
        getTasksDone: function () { // Returs Tasks done
            return axios.get(baseUrl).then(res => res.data)
        },
        getTasksToDo: function () { // Returs Tasks to do
            return axios.get(baseUrl).then(res => res.data)
        },
        setTaskToDone: function (id) { // Sets Task as done
            return axios.put(baseUrl+id)
        },
        setTask: function () { // Changes task
            return axios.patch(baseUrl)
        },
        deleteTask: function (id) { // Deletes Task
            return axios.delete(baseUrl+id)
        },
        deleteAllTasks: function () {// Deletes all tasks
            return axios.delete(baseUrl)
        }
    }
})()

module.exports = taskApiCall