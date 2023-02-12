import { SkeletonLoader } from "../../common/skeleton-loader"

export function StatusIndicator({ amount, text, className }: Props) {
    return (
        <div className={'user-setting--cmp-status-indicator ' + className}>
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