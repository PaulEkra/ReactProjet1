import s from "./style.module.css"

export function Logo({image,title,subtitles}){
return(
    <>
    <div className={s.container}>
        <img className={s.image}src={image}/>
        <span className={s.title}>{title}</span>
    </div>
    <span className={s.subtitles}>{subtitles}</span>
    </>
)
}