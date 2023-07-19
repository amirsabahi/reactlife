import { Size } from "@/utils/enums"
import { User } from "@/utils/interfaces"
import { getAvatarImg } from "@/utils/utils"
type profileInput = {
    user: User
    alt:string
    size?:Size
}
export default function Profile({user, alt, size}:profileInput) {

    return (
        <img src={getAvatarImg(user, size)} alt = {alt} />
    )
}