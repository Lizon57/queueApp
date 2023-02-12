export function ErrorMessage({ icon, text, tryAgainAction }: Props) {
    return (
        <div className="error-message-container">
            {icon && <span className="icon-wrapper"><img src={icon} alt="error icon" /></span>}
            <span className="text">{text}</span>
            {tryAgainAction && <span className="try-again" onClick={tryAgainAction}>Try again</span>}
        </div>
    )
}


type Props = {
    icon?: string
    text: string
    tryAgainAction?: () => void
}