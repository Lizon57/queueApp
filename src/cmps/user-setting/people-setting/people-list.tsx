import { People } from "../../../models/people"
import { PeopleListLoader } from "./people-list-loader"
import { PeoplePreview } from "./people-preview"


export function PeopleList({ isLoading, people, onRemovePeople }: Props) {
    return (
        <table className="people-list-table-container" cellPadding="30px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>

            {isLoading && <PeopleListLoader />}

            {!isLoading && <tbody>
                {!!people.length && people.map(people => <PeoplePreview
                    key={people.email}
                    people={people}
                    onRemovePeople={onRemovePeople}
                />)}
            </tbody>}
        </table>
    )
}


type Props = {
    isLoading: boolean
    people: People[]
    onRemovePeople: (email: string) => void
}