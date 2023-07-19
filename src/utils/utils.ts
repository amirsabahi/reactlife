
import { User }  from "./interfaces"
import { Size } from "./enums"
export function getAvatarImg(user:User, size:Size=0) {
    size
   return (
    'https://i.imgur.com/' +
    user.imageId +
    's.jpg'
   ) 
}