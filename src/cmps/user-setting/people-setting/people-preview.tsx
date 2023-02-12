import { MdDelete } from "react-icons/md"
import { People } from "../../../models/people"
import { Avatar } from "../../common/avatar"


export function PeoplePreview({ people, onRemoveAction }: Props) {
    return (
        <>
            <tr className="people-preview-container">
                <td className="name"><Avatar />{people.firstName} {people.lastName}</td>
                <td>{people.email}</td>
                <td className="status">{people.status}</td>
                <td className="actions" onClick={() => onRemoveAction(people.email)}><MdDelete /> Delete</td>
            </tr>
        </>
    )
}


type Props = {
    people: People
    onRemoveAction: (email: string) => void
}