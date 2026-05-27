import { useContext } from 'react'
import './css/navbar.module.css'
import { searchcontex } from '../contexts/inputContext'

export default function Navbar(){
    const {inputSearch, setInputSearch} = useContext(searchcontex)

    return(
        <nav>
            <ul>
                <li>Home</li>
                <input type="text" placeholder='search user' value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
                <li>Profile</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}