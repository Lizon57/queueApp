import { getRandomInt } from "../../../utils/get-random-int"
import { Avatar } from "../../common/avatar"
import { SkeletonLoader } from "../../common/skeleton-loader"


export function PeoplePreviewLoader() {
    return (
        <tr className="people-preview-loader-container">
            <td className="name"><Avatar isLoading={true} /><SkeletonLoader width={getRandomInt(3, 8)} /></td>
            <td><SkeletonLoader width={getRandomInt(3, 8)} /></td>
            <td><SkeletonLoader width={getRandomInt(3, 8)} /></td>
        </tr>
    )
}