import { Dancing_Script, Koh_Santepheap, Nunito } from "next/font/google";

export const nunitoFont = Nunito({
    weight: ['400', '700', '900'],
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

export const test = Dancing_Script({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})