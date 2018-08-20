export interface ITileInfo {
    title: string;
    description: string;
    url: string;
    icon: string;
    target: LinkTarget;
}
export declare enum LinkTarget {
    parent = "",
    blank = "_blank",
}
