export type TabBarKey = string;

export type TabBarProps = {
    activeTab?: TabBarKey;
    onChange?: (tab: TabBarKey) => void;
    onMenuToggle?: (isOpen: boolean) => void;
    sizeDevice?: {device: boolean}
}

export type PageProps = {
    activeTab?: TabBarKey;
    onChange?: (tab: TabBarKey) => void;
    menuOpen?: boolean
}

export type AboutProps = {
    activeTab?: TabBarKey;
    onChange?: (tab: TabBarKey) => void;
    onMenuToggle?: (isOpen: boolean) => void;
    sizeDevice?: {device: boolean}

}

export type BetaProps = {
    onMenuToggle?: (isOpen: boolean) => void
}

export type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean | string;
    photo_url?: string;
}

export type UserDataProps = {
    onLoadingChange?: (loading: boolean) => void;
}

export type Constants = {
    key: number;
    description: string;
    bg: string;
    color: string
}

export type SvgTech = {
    size?: string;
    color?: string;
    style?: string;
    stroke?: string;
    onChange?: () => void
    onClick?: () => void
}

export type ConstantsAbout = {
    nameTech: string;
    technologies: {
        name: string;
        icon: React.ComponentType<{ size?: string }>
    }[]
}

export type SocialNetWorks = {
    key: string;
    label: string;
    link?: string;
    icon: React.ComponentType<{ size?: string }>
}

export type ButtonSecondary = {
    key: string;
    label: string;
    link?: string;
    onChange?: (tab: TabBarKey) => void;
    change?: TabBarKey
}

export type Review = {
    id: number;
    author: string;
    voice?: boolean;
    textvoice?: string;
    text: string;
}

export type CloseModal = {
    onClose: () => void
}