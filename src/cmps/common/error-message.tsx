export function ErrorMessage({ icon, text, tryAgainAction }: Props) {
    return (
        <p className="common-cmp--error-message">
            {icon && <span className="icon-wrapper"><img src={icon} alt="error occured" /></span>}
            <span className="text">{text}</span>
            {tryAgainAction && <span className="try-again" onClick={tryAgainAction}>Try again</span>}
        </p>
    )
}


type Props = {
    icon?: string
    text: string
    tryAgainAction?: () => void
}