import { useState } from "react"
import { SavePost } from "./components/SavePost"
import { TablePosts } from "./components/TablePosts"


  export const App = () => {
    const [list, setList] = useState([])

    function  handleSavePost(post){
      let newList = [...list]
      newList.push(post)
      setList(newList)
    }
    return (
      <>
        <SavePost onAddPost={handleSavePost} />
        <TablePosts list={list} />
      </>
    )
  }

