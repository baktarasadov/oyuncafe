export interface IInput {
    id?: string;
    type?: string
    name?: string
    className?: string
    value?: string
    placeholder?: string
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}