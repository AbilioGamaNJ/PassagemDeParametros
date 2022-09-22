import { useState } from "react"
import { SaveUser } from "./components/SaveUser"
import { TableUsers } from "./components/TableUsers"


  export const App = () => {
    const [list, setList] = useState([])

    function  handleSaveUser(user){
      let newList = [...list]
      newList.push(user)
      setList(newList)
    }
    return (
      <>
        <SaveUser onAddUser={handleSaveUser} />
        <TableUsers list={list} />
      </>
    )
  }

