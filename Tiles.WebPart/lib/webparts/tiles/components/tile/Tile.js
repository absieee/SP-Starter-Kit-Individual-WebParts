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
import styles from './Tile.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/components/Icon';
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var tileStyle = {};
        if (this.props.height) {
            tileStyle.height = this.props.height + "px";
        }
        return (React.createElement("div", { className: styles.tile, style: tileStyle },
            React.createElement("a", { href: this.props.item.url, target: this.props.item.target, title: this.props.item.title },
                React.createElement("div", { className: styles.tileIcon },
                    React.createElement(Icon, { iconName: this.props.item.icon })),
                React.createElement("div", { className: styles.tileTitle }, this.props.item.title),
                React.createElement("div", { className: styles.overflow }, this.props.item.description))));
    };
    return Tile;
}(React.Component));
export { Tile };

//# sourceMappingURL=Tile.js.map
