import { FaUserCircle } from "react-icons/fa"


export function Avatar({ isLoading }: Props) {
    return (
        <span className="avatar-container">
            {!isLoading && <FaUserCircle />}
        </span>
    )
}


type Props = {
    isLoading?: boolean
}