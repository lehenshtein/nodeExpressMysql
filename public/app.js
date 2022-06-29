new Vue({
    el: '#app',
    data() {
        return {
            isDark: true,
            show: true,
            todoTitle: '',
            todos: []
        }
    },
    created() {
        fetch('/api/todo', {
            method: 'get',
        })
            .then(res => res.json())
            .then(data => this.todos = data)
            .catch(err => console.log(err))
    },
    methods: {
        addTodo() {
            const title = this.todoTitle.trim()
            if (!title) {
                return
            }
            fetch('/api/todo', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title})
            })
                .then(res => res.json())
                .then(({todo}) => {
                    this.todos.push(todo);
                    this.todoTitle = ''
                })
                .catch(err => console.log(err))

        },
        removeTodo(id) {
            fetch('/api/todo/' + id, {
                method: 'delete'
            })
                .then(() => this.todos = this.todos.filter(t => t.id !== id))
                .catch(err => console.log(err))
        },
        complete(id) {
            fetch('/api/todo/' + id, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({done: true})
            })
                .then(res => res.json())
                .then(({todo}) => {
                    const index = this.todos.findIndex(el => el.id === todo.id);
                    this.todos[index].updatedAt = todo.updatedAt;
                })
                .catch(err => console.log(err))
        }
    },
    filters: {
        capitalize(value) {
            return value.toString().charAt(0).toUpperCase() + value.slice(1)
        },
        date(value, withTime) {
            if (withTime) {
                return new Intl.DateTimeFormat('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }).format(new Date(value))
            }
            return new Intl.DateTimeFormat('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(new Date(value))
        }
    }
})
