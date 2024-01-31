//import css from './Contact.module.css'

const Contact = ({ name, number, deleteUser }) => {
    return (
        <li>
            <h2>{name}</h2>
            <h2>{number}</h2>
            <button onClick={deleteUser}>Delete</button>
        </li>
    )
}
export default Contact