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
import * as React from 'react';
import * as strings from 'TilesWebPartStrings';
import styles from './Tiles.module.scss';
import { Tile } from './tile';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
var Tiles = (function (_super) {
    __extends(Tiles, _super);
    function Tiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Default React remder method
     */
    Tiles.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.tiles },
            React.createElement(WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.fUpdateProperty }),
            this.props.collectionData && this.props.collectionData.length > 0 ? (React.createElement("div", { className: styles.tilesList }, this.props.collectionData.map(function (tile, idx) { return React.createElement(Tile, { key: idx, item: tile, height: _this.props.tileHeight }); }))) : (React.createElement(Placeholder, { iconName: 'Edit', iconText: strings.noTilesIconText, description: strings.noTilesConfigured, buttonLabel: strings.noTilesBtn, onConfigure: this.props.fPropertyPaneOpen }))));
    };
    return Tiles;
}(React.Component));
export { Tiles };

//# sourceMappingURL=Tiles.js.map
