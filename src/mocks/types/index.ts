export interface MenuNode {
  id: number;
  label: string;
  key: string;

}
export interface SideMenu {
  MenuId: number;
  title: string;
  path: string;
  icon: string,
  MenuLink: null,
  hidden: boolean,
  children: [];

}