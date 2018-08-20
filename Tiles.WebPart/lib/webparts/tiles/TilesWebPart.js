var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import * as strings from "TilesWebPartStrings";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { PropertyFieldNumber } from "@pnp/spfx-property-controls/lib/propertyFields/number";
import { PropertyFieldCollectionData, CustomCollectionFieldType } from "@pnp/spfx-property-controls/lib/PropertyFieldCollectionData";
import { Tiles, LinkTarget } from "./components";
var TilesWebPart = (function (_super) {
    __extends(TilesWebPart, _super);
    function TilesWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TilesWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(Tiles, {
            title: this.properties.title,
            tileHeight: this.properties.tileHeight,
            collectionData: this.properties.collectionData,
            displayMode: this.displayMode,
            fUpdateProperty: function (value) {
                _this.properties.title = value;
            },
            fPropertyPaneOpen: this.context.propertyPane.open
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(TilesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    TilesWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupFields: [
                                PropertyFieldCollectionData("collectionData", {
                                    key: "collectionData",
                                    label: strings.tilesDataLabel,
                                    panelHeader: strings.tilesPanelHeader,
                                    panelDescription: strings.iconInformation + " https://developer.microsoft.com/en-us/fabric#/styles/icons",
                                    manageBtnLabel: strings.tilesManageBtn,
                                    value: this.properties.collectionData,
                                    fields: [
                                        {
                                            id: "title",
                                            title: strings.titleField,
                                            type: CustomCollectionFieldType.string,
                                            required: true
                                        },
                                        {
                                            id: "description",
                                            title: strings.descriptionField,
                                            type: CustomCollectionFieldType.string,
                                            required: false
                                        },
                                        {
                                            id: "url",
                                            title: strings.urlField,
                                            type: CustomCollectionFieldType.string,
                                            required: true
                                        },
                                        {
                                            id: "icon",
                                            title: strings.iconField,
                                            type: CustomCollectionFieldType.fabricIcon,
                                            required: true
                                        },
                                        {
                                            id: "target",
                                            title: strings.targetField,
                                            type: CustomCollectionFieldType.dropdown,
                                            options: [
                                                {
                                                    key: LinkTarget.parent,
                                                    text: strings.targetCurrent
                                                },
                                                {
                                                    key: LinkTarget.blank,
                                                    text: strings.targetNew
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                PropertyFieldNumber("tileHeight", {
                                    key: "tileHeight",
                                    label: strings.TileHeight,
                                    value: this.properties.tileHeight
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TilesWebPart;
}(BaseClientSideWebPart));
export default TilesWebPart;

//# sourceMappingURL=TilesWebPart.js.map
