"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auteur = void 0;
var Auteur = /** @class */ (function () {
    function Auteur(nom, prenom) {
        this._nom = nom;
        this._prenom = prenom;
    }
    Object.defineProperty(Auteur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auteur.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (value) {
            this._prenom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Auteur;
}());
exports.Auteur = Auteur;
