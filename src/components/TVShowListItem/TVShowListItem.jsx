import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ TVShow,onClick }) {
  return (
  <div onClick={()=>onClick(TVShow)} className={s.container}>
    <img className={s.img}
    src={SMALL_IMG_COVER_BASE_URL+TVShow.backdrop_path} 
    alt={TVShow.name} />
    <div className={s.title}>
    {TVShow.name}
    </div>
  </div>
  )
}
