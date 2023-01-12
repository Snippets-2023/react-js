export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  dialogtitle: string;
  dialogContentText: string;
  listItemIcon: JSX.Element;
}
export interface activeTabIprops {
  parent: number | null;
  child: number | null;
}
export interface AppSettingSubMenuProps {
  data: {
    openAppSettings: boolean;
    activeTabState: activeTabIprops;
    setActiveTabState: (data: activeTabIprops) => void;
  };
}
export interface AppSettingMenuDataProps {
  label: string;
  url: string;
}

export interface InformationSubMenuProps {
  data: {
    openInfo: boolean;
    activeTabState: activeTabIprops;
    setActiveTabState: (data: activeTabIprops) => void;
  };
}
export interface SubMenuDataProps {
  label: string;
  url: string;
}

export interface SubMenuProps {
  data: {
    open: boolean;
    activeTabState: activeTabIprops;
    parentId: number;
    subMenu: { label: string; url: string }[];
    setActiveTabState: (data: activeTabIprops) => void;
  };
}

export interface AlertBoxProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  dialogtitle: string;
  dialogContentText: string;
  listItemIcon: JSX.Element;
}

export interface DuplicateBoxProps {
  open: boolean;
  handleEdit: () => void;
  handleDuplicate: () => void;
}
