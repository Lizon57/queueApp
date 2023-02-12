import { useRef } from "react"
import { useLockBodyScroll } from "../../hooks/use-lock-body-scroll"
import { useOnClickOutside } from "../../hooks/use-on-click-outside"


export function Modal({ children, onCloseModal }: Props) {
    const elModalContent = useRef<HTMLDivElement>(null)

    useLockBodyScroll()
    useOnClickOutside(elModalContent, onCloseModal)


    return (
        <div className="modal-container">
            <div className="content-container" ref={elModalContent}>
                {children}
            </div>
        </div>
    )
}


type Props = {
    children: JSX.Element
    onCloseModal: () => void
}