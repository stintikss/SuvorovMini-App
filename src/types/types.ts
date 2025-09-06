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

export type BetaProps = {
    onMenuToggle?: (isOpen: boolean) => void
}