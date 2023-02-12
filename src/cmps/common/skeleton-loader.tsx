export function SkeletonLoader({ width }: Props) {
    return (
        <span className="common-cmp--skeleton-loader" style={{ width: (width || 5.3) + 'rem' }}>
        </span >
    )
}


type Props = {
    width?: number
}