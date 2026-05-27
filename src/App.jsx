import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import './app.css'

import gambar from './assets/icon.png'
import Navbar from "./components/navabar"
import Card from "./components/card"
import UserDetail from "./components/UserDetail"
import Footer from "./components/footer"
import { createContext } from "react"
import { searchcontex } from "./contexts/inputContext"

function App() {
  const [user,setuser] = useState([])
  const [error,seterror] = useState("")
  const [loading,setloading] = useState(true)
  const [login,setslogin] = useState(false)
  const [inputSearch,setInputSearch] = useState("")


  const [selectedUser, setSelectedUser] = useState(null)

  //tombol
  const [likedUsers, setLikedUsers] = useState([]) 
  const [followedUsers, setFollowedUsers] = useState([]) 

useEffect(() => {
  async function PengambilanAPI() {
        try{
          const getAPI =  await fetch('https://jsonplaceholder.typicode.com/users')

          if(!getAPI){
            throw new error ("gagal mengambil API")
          }

          const data = await getAPI.json()

          setuser(data)
          // console.log(user)

        }
        catch(err){
          console.log(err + "error")
        }
        finally{
          setloading(false)
        }

        
      }

      PengambilanAPI()
  },[])

  const likeButton = (id) => {
    if (likedUsers.includes(id)) {
      setLikedUsers(likedUsers.filter(userId => userId !== id))
    } else {
      setLikedUsers([...likedUsers, id])
    }
  }

  const followButton = (id) => {
    if (followedUsers.includes(id)) {
      setFollowedUsers(followedUsers.filter(userId => userId !== id))
    } else {
      setFollowedUsers([...followedUsers, id])
    }
  }

 if (loading) {
    return (
      <searchcontex.Provider value={{inputSearch,setInputSearch}}>
        <Navbar />
        <h2>Sedang memanggil data...</h2>
      </searchcontex.Provider>
    )
  }
  

  const filerInput = user.filter((item) =>(
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  ))

  return (
    <searchcontex.Provider value={{inputSearch,setInputSearch}}>
      <Navbar/>
      

      {selectedUser ? (
        <UserDetail 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
          isLiked={likedUsers.includes(selectedUser.id)}
          onToggleLike={likeButton}
          isFollowed={followedUsers.includes(selectedUser.id)}
          onToggleFollow={followButton}
        />
      ) : (
        <div className="bagan">
          {filerInput.map((item) => (

            <div key={item.id} onClick={() => setSelectedUser(item)} style={{ cursor: 'pointer' }}> 
              <Card
                name={item.name}
                email={item.email}
                addressCity={item.address.city}
                addressStreet={item.address.street}
                initials={<img src={gambar} style={{ width: "70px" }} alt="icon" />}
              />
            </div>
          ))}
        </div>
      )}
      <Footer></Footer>
    </searchcontex.Provider>
  )
}

export default App