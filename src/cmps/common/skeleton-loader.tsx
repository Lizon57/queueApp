export function SkeletonLoader({ width }: Props) {
    return (
        <span className="skeleton-loader" style={{ width: `${width || 5.3}rem` }}>
        </span>
    )
}


type Props = {
    width?: number
}