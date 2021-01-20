import {useState, FC} from 'react'

const users = [
    {name: "tom", age: 20},
    {name: "bob", age: 10},
    {name: "jon", age: 32},
]

const UserSearch:FC = () => {
    const [name, setName] = useState<string>("")
    const [user, setUser] = useState<{name: string, age: number} | undefined>()
    const onClick = () => {
        const foundUser = users.find(user => {
            return user.name === name;
        })
        setUser(foundUser)
    }
    return (
        <div>
            UserSearch
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick}>search</button>
            <p>{user ? `${user.name} ${user.age}` : ""}</p>
        </div>
    )
}

export default UserSearch
