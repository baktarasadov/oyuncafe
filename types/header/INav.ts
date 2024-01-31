import { ReactNode } from "react"

interface IBase {
    href: string
}

export interface INavItem extends IBase {
    title: string

}

export interface INavItemProps extends IBase {
    children: ReactNode,
}