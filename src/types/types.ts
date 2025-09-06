export type TabBarKey = string;

export type TabBarProps = {
    activeTab?: TabBarKey
    onChange?: (tab: TabBarKey) => void
    onMenuToggle?: (isOpen: boolean) => void
    sizeDevice?: {device: boolean}
}

export type PageProps = {
    activeTab?: TabBarKey
    onChange?: (tab: TabBarKey) => void
    menuOpen?: boolean
}

export type AboutProps = {
    activeTab?: TabBarKey
    onChange?: (tab: TabBarKey) => void
    onMenuToggle?: (isOpen: boolean) => void
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