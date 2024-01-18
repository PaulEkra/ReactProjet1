import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import s from"./style.module.css"

export function TVShowList({tvShowList, onClickItem}){
    return (
        <>
            <div className={s.title}>Vous pourriez aimez:</div>
            <div className={s.list}>{tvShowList.map((TVShow)=>{
                return (
                <span key={TVShow.id} className={s.TVShowListItem}>
                <TVShowListItem TVShow={TVShow} onClick={onClickItem}/>
             </span>)
            })}
                
            </div>
            
        </>
    )
}