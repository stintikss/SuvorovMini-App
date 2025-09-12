import * as Svg from './iconServices/SvgServices'
import type { SocialNetWorks, ButtonSecondary } from '../../../../types/types'

export const BUTTON_SERVICES: SocialNetWorks[] = [
    { key: 'MiniApp', label: 'Telegram Mini Apps', icon: Svg.Telegram },
    { key: 'Web', label: 'Веб-сайты & SPA', icon: Svg.Web },
]

export const BUTTON_SECONDARY: ButtonSecondary[] = [
    { key: 'reviews', label: 'Мои отзывы', link: '' },
    { key: 'consult', label: 'Проконсультироваться', link: 'https://t.me/menionst?text=Привет,%20Егор!%20👋🏻%0AХотел%20бы%20проконсультироваться%20по%20разработке%20[Mini%20Apps%20/%20Веб-сайтов].%20Мой%20вопрос%20касается%20[Ваш%20вопрос].' },
]