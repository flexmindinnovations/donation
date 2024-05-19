export interface NavbarMenuItem {
    id: number;
    key: string;
    title: string;
    route: string;
    icon: string;
    isActive: boolean;
    isHeaderItem?: boolean;
    isFooterItem?: boolean;
}