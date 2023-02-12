import { useRef, useState } from "react"

import { People } from "../../../models/people"

import { PeopleListLoader } from "./people-list-loader"
import { PeoplePreview } from "./people-preview"
import { Modal } from "../../common/modal"
import { RemovePeopleModal } from "./remove-people-modal"


export function PeopleList({ isLoading, people, onRemovePeople }: Props) {
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
    const removePeopleEmail = useRef<string>()


    const onRemoveAction = (email: string) => {
        setIsRemoveModalOpen(true)
        removePeopleEmail.current = email
    }


    return (
        <>
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
                    {!people.length && <tr className="no-people-found">
                        <td colSpan={3}>No users found. Try a different search or Invite a Team Member</td>
                    </tr>}

                    {!!people.length && people.map((people, idx) => <PeoplePreview
                        key={people.email + idx}
                        people={people}
                        onRemoveAction={onRemoveAction}
                    />)}
                </tbody>}
            </table>

            {isRemoveModalOpen && <Modal onCloseModal={() => setIsRemoveModalOpen(false)}>
                <RemovePeopleModal
                    email={removePeopleEmail.current + ''}
                    onRemovePeople={onRemovePeople}
                    onCloseModal={() => setIsRemoveModalOpen(false)}
                />
            </Modal>}
        </>
    )
}


type Props = {
    isLoading: boolean
    people: People[]
    onRemovePeople: (email: string) => void
}