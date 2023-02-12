import { TextField } from "@mui/material"
import { IconType } from "react-icons"


export function TextInput({ label, Icon, onChange }: Props) {
    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        onChange && onChange(ev.target.value)
    }


    return (
        <div className="common-cmp--text-input">
            <TextField label={label} variant="outlined" onChange={handleChange} />
            {Icon && <span className="icon-wrapper"><Icon /></span>}
        </div>
    )
}


type Props = {
    label: string
    Icon?: IconType
    onChange: (term: string) => void
}