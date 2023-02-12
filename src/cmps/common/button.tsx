import { IconType } from "react-icons"


export function Button({ text, Icon, className, onClick }: Props) {
    return (
        <button className={'button-container' + (className ? ` ${className}` : '')} onClick={onClick}>
            {Icon && <span className="icon-wrapper"><Icon size={15} /></span>}
            {text}
        </button >
    )
}


type Props = {
    text: string
    Icon?: IconType
    className?: string
    onClick?: () => void
}