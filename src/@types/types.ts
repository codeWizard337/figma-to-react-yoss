import { Dispatch, SetStateAction } from "react";
export type PortaType = {
    title: string,
    href: string,
    content: string
}
export type HeaderIconType = {
    href: string,
    badge?: number
}
export type SideBarItemType = {
    title: string,
    href: string,
    active?: boolean,
    badge?: number,
    small?: boolean
}
export type stateType = {
    mobileSideBar: boolean
}
export type contextType = {
    state: stateType,
    setState: Dispatch<SetStateAction<stateType>>
}