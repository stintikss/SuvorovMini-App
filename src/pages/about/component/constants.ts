import type { Constants } from "../../../types/types"

const ABOUT_ME_HEADER_STYLE = {
    background: 'linear-gradient(135deg,#8b5cf6,#a855f7)',
    color: '#fff'
}

export const AboutMeHeader: Constants[] = [
    { key: 1, description: '16 лет', bg: ABOUT_ME_HEADER_STYLE.background, color: ABOUT_ME_HEADER_STYLE.color },
    { key: 2, description: '1.5 года в IT', bg: ABOUT_ME_HEADER_STYLE.background, color: ABOUT_ME_HEADER_STYLE.color },
    { key: 3, description: 'Fullstack разработчик', bg: ABOUT_ME_HEADER_STYLE.background, color: ABOUT_ME_HEADER_STYLE.color },
]

export const ButtonBottom = [
    { key: 1, title: 'Мои услуги', change: 'services' },
    { key: 2, title: 'Мои соц сети', change: 'socialNetworks' }
]