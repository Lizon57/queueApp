import { SkeletonLoader } from "../../common/skeleton-loader"

export function StatusIndicator({ amount, text, className }: Props) {
    return (
        <div className={'status-indicator-container' + (className ? ` ${className}` : '')}>
            {(!amount && amount !== 0)
                ? <SkeletonLoader />
                : <span>{amount}</span>
            }
            <span className="text">{text}</span>
        </div>
    )
}


type Props = {
    amount?: number
    text: string
    className?: string
}