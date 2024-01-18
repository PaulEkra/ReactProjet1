import s from "./style.module.css"
import {Star as StarEmpty,StarHalf,StarFill} from "react-bootstrap-icons"
export function FiveStarRating({rating}){
 const StarList=[]

 const StarFillCount=Math.floor(rating);

 const StarHalfCount=rating - StarFillCount >= 0.5;

 const StarEmptyCount = 5-StarFillCount-(StarHalfCount ?1 :0)

 for(let i =1;i<=StarFillCount;i++){
    StarList.push(<StarFill key={"Star-fill"+i}/>)
 }
 if(StarHalfCount)
 {   StarList.push(<StarHalf key={"Star-half"}/>)}
 for(let i =1;i<=StarEmptyCount;i++){
    StarList.push(<StarEmpty key={"Star-empty"+i}/>)
 }

    return <div>
    {StarList}
    </div>
}