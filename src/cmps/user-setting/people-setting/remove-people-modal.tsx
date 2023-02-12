import logo from "../../../assets/images/logo.png"
import { Button } from "../../common/button"


export function RemovePeopleModal({ email, onRemovePeople, onCloseModal }: Props) {
    const onRemovePeopleAction = () => {
        onRemovePeople(email)
        onCloseModal()
    }


    return (
        <div className="user-setting-cmp--remove-people-modal">
            <img src={logo} alt="queue logo" />
            <h2>Are you sure you want to delete this person</h2>
            <p>This action cannot be undone and all data associated with this person will be permanently removed.</p>

            <div className="buttons-container">
                <Button text="yes" className="call-to-action" onClick={onRemovePeopleAction} />
                <Button text="no" className="discard" onClick={onCloseModal} />
            </div>
        </div>
    )
}


type Props = {
    email: string
    onRemovePeople: (email: string) => void
    onCloseModal: () => void
}