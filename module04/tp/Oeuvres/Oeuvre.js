"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oeuvre = void 0;
var Oeuvre = /** @class */ (function () {
    function Oeuvre(annee, titre, acheteur, meilleureEnchere) {
        this._annee = annee;
        this._titre = titre;
        this._acheteur = acheteur;
        this._meilleureEnchere = meilleureEnchere;
    }
    Object.defineProperty(Oeuvre.prototype, "annee", {
        get: function () {
            return this._annee;
        },
        set: function (value) {
            this._annee = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oeuvre.prototype, "titre", {
        get: function () {
            return this._titre;
        },
        set: function (value) {
            this._titre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oeuvre.prototype, "acheteur", {
        get: function () {
            return this._acheteur;
        },
        set: function (value) {
            this._acheteur = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oeuvre.prototype, "meilleureEnchere", {
        get: function () {
            return this._meilleureEnchere;
        },
        set: function (value) {
            this._meilleureEnchere = value;
        },
        enumerable: false,
        configurable: true
    });
    Oeuvre.prototype.afficher = function () {
        return "Meilleure enchere : " + this.meilleureEnchere;
    };
    Oeuvre.prototype.encherir = function (nouvelleEnchere, acheteur) {
        if (acheteur !== this.acheteur && nouvelleEnchere > this.meilleureEnchere) {
            this.acheteur = acheteur;
            this.meilleureEnchere = nouvelleEnchere;
        }
    };
    return Oeuvre;
}());
exports.Oeuvre = Oeuvre;
