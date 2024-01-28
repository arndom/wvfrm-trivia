export const drawerWidth = 250;

export interface NavItemType {
  label: string;
  onClick: () => void;
}

export interface NavProps {
  navItems: NavItemType[];
}
