import { useContext,useRef,useState} from 'react'
import './css/navbar.css'
import { searchcontex } from '../contexts/inputContext'

export default function Navbar(){
    const {inputSearch, setInputSearch, getName} = useContext(searchcontex) 
    const [showhint,setshowhint] = useState(false)
    const [showHistory, setShowHistory]= useState([])
    const history = useRef([])

    const hints = inputSearch && getName.length > 0 ? getName.filter(name =>  name.toLowerCase().includes(inputSearch.toLowerCase()) && name.toLowerCase() != inputSearch.toLowerCase()) : [];

    const handleClickEvent = (event) =>{
        setshowhint(true)
        setInputSearch(event)

        history.current.push(event)

        console.log(history.current)

    }

    const eventHistory = () =>{
        const riwayat= [...history.current]
        setShowHistory(riwayat)
        alert( "You have been search before: "+riwayat.join(" , "))
        
    }

    const clearSearch = () =>{
        setInputSearch("");
        setshowhint(false);
    }

    return(
        <nav>
            <ul>
                <li onClick={clearSearch}>Home</li>
                <li style={{ position: 'relative' }}>
                     <input type="text" placeholder='search user' 
                     value={inputSearch} 
                     onChange={(e) => {{setInputSearch(e.target.value)} setshowhint(true)}} 
                     onFocus = {() => setshowhint(true)} />

                     <ul className='inputHint'>
                        {hints.map((name,index) => (
                            <li key={index} onClick={() => handleClickEvent(name)}>
                                {name}
                            </li>
                        ))}
                     </ul>
                </li>
                <li>Profile</li>
            </ul>
            <button onClick={eventHistory}>History</button>
        </nav>
    )
}