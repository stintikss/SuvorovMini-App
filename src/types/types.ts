export type TabBarKey = string;

export type TabBarProps = {
    activeTab?: TabBarKey
    onChange?: (tab: TabBarKey) => void
    onMenuToggle?: (isOpen: boolean) => void
}

export type BetaProps = {
    onMenuToggle?: (isOpen: boolean) => void
}