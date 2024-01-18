import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"
export function SearchBar({onSubmit}){
    
    function Submit(e){
        if(e.key==="Enter" && e.target.value.trim()!==""){
            onSubmit(e.target.value)
        }
    }

    return (
    <>
    <SearchIcon size={27} className={s.icon}> </SearchIcon>
        <input
        onKeyUp={Submit}
        className={s.input} 
        type="text"
        placeholder="CHERCHEZ UN FILM/UNE SERIE QUI  VOUS PLAIRA" 
         />
   
    </>
    )
}

