import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import { ITileInfo } from "./components";
export interface ITilesWebPartProps {
    collectionData: ITileInfo[];
    tileHeight: number;
    title: string;
}
export default class TilesWebPart extends BaseClientSideWebPart<ITilesWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
