const users = [
    {name: 'SuperName', age: 300},
    {name: 'Flash', age: 20}
]

module.exports = {
    test() { return {
        count: Math.trunc(Math.random()*10),
        users
    }},
    random({min, max, count}) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const rand = Math.random() * (max - min) + min;
            arr.push(rand)
        }
        return arr;
    },
    addTestUser({user: {name}}) {
        const user = {
            name,
            age: Math.ceil(Math.random()  * 10)
        }
        users.push(user);
        return user;
    }
}
