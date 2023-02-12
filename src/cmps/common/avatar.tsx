import { FaUserCircle } from "react-icons/fa"


export function Avatar({ isLoading }: Props) {
    return (
        <span className="common-cmp--avatar">
            {!isLoading && <FaUserCircle />}
        </span>
    )
}


type Props = {
    isLoading?: boolean
}