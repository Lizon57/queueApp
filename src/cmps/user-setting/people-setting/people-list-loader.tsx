import { PeoplePreviewLoader } from "./people-preview-loader"


const rows = new Array(3).fill(true)

export function PeopleListLoader() {
    return (
        <tbody>
            {rows.map(row => <PeoplePreviewLoader key={row} />)}
        </tbody>
    )
}