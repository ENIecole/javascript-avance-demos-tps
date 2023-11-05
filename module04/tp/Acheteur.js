"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acheteur = void 0;
var Acheteur = /** @class */ (function () {
    function Acheteur(nom, prenom) {
        this._nom = nom;
        this._prenom = prenom;
    }
    Object.defineProperty(Acheteur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Acheteur.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (value) {
            this._prenom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Acheteur;
}());
exports.Acheteur = Acheteur;
