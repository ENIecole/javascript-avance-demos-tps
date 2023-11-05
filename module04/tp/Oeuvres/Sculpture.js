"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sculpture = void 0;
var Oeuvre_1 = require("./Oeuvre");
var Sculpture = /** @class */ (function (_super) {
    __extends(Sculpture, _super);
    function Sculpture(annee, titre, matiere, meilleureEnchere, acheteur) {
        if (meilleureEnchere === void 0) { meilleureEnchere = 0; }
        var _this = _super.call(this, annee, titre, acheteur, meilleureEnchere) || this;
        _this._matiere = matiere;
        return _this;
    }
    Object.defineProperty(Sculpture.prototype, "matiere", {
        get: function () {
            return this._matiere;
        },
        set: function (value) {
            this._matiere = value;
        },
        enumerable: false,
        configurable: true
    });
    return Sculpture;
}(Oeuvre_1.Oeuvre));
exports.Sculpture = Sculpture;
