import {FC, useState} from 'react'

const GuestList: FC = () => {
    const [name, setName] = useState<string>("");
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName("")
        setGuests([...guests, name])
    }
    console.log(guests)
    return (
        <>
            <div>
                <h3>Guest List</h3>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={onClick}>Add Guest</button>
            </div>
            <ul>
                {guests.map(guest => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
        </>
    )
}

export default GuestList
