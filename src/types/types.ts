export type TabBarKey = string;

export type TabBarProps = {
    activeTab: TabBarKey
    onChange: (tab: TabBarKey) => void
    onMenuToggle?: (isOpen: boolean) => void
}