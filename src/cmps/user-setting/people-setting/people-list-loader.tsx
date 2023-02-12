import { PeoplePreviewLoader } from "./people-preview-loader"


const rows = [1, 2, 3]

export function PeopleListLoader() {
    return (
        <tbody>
            {rows.map(row => <PeoplePreviewLoader key={row} />)}
        </tbody>
    )
}