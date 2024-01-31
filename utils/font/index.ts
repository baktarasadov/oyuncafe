import { Koh_Santepheap, Nunito } from "next/font/google";

export const nunitoFont = Nunito({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const santepheapFont = Koh_Santepheap({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})