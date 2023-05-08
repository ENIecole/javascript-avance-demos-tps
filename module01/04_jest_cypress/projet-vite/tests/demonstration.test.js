import {addition} from "../public/calculatrice.js";

describe('Mon premier scénario de test', () => {
    it('devrait fonctionner', () => {
        expect(true).toBe(true);
    });
    it('devrait faire l\'addition', () => {
        expect(addition(2,2)).toStrictEqual(4);
    });
})