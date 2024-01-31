import { ISocialMedia } from "@/types/header/ISocialMedia";
import facebook from '@/components/layout/header/assets/icon/facebook.svg'
import instagram from '@/components/layout/header/assets/icon/instagram.svg'
import twitter from '@/components/layout/header/assets/icon/twitter.svg'

export const socialMediaList: ISocialMedia[] = [
    {
        href: "/",
        alt: "oyuncafe facebook",
        src: facebook
    },
    {
        href: "/",
        alt: "oyuncafe twitter",
        src: twitter
    },

    {
        href: "/",
        alt: "oyuncafe instagram",
        src: instagram
    }
]