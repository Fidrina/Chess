"use strict"

class Chess {
    /** @var {String} */
    static __ERROR_OUT_OF_RANGE = `An unexpected error occured: Out of range.`;

    /** @var {String} */
    static __ERROR_INVALID_PARAM = `An unexpected error occured: Element out of range or invalid.`;

    static getProperties(arr) {
        if (Validator.Limit(arr.x, Validator.ALPHABETIC) && Validator.Limit(arr.y, Validator.NUMERIC)) {
            for (var i in Config) {
                if (Config[i].entry.abscissa == arr.x && Config[i].entry.ordinate == arr.y) {
                    return Config[i];
                }
            }
        } else {
            throw new Error(this.__ERROR_OUT_OF_RANGE);
        }

        return {}
    }

    /**
     * Get DOM element.
     * 
     * @param {Object} args
     * 
     * @return {DOMElement}
     */
    static DOM(args = {}) {
        if (Validator.Limit(args.x, Validator.NUMERIC) && Validator.Limit(args.y, Validator.NUMERIC)) {
            return document.querySelector(`div div[class="${args.y}"] div:nth-child(${args.x})`);
        } else {
            throw new Error(this.__ERROR_INVALID_PARAM);
        }
    }

    /**
     * Start Method.
     * 
     * @param {void}
     */
    static start() {
        for (const [key, value] of Object.entries([1, 2, 7, 8])) {
            for (let j = 97; j < 105; j++) {
                const GameElement = this.getProperties({ y: value, x: String.fromCharCode(j) });

                if (Object.keys(GameElement).length > 0 === false) {
                    continue;
                } else {
                    this.setDOMElement(GameElement);
                }
            }
        }
    };

    /**
     * Set an element into the game.
     * 
     * @param {Object} object
     */
    static setDOMElement(object) {
        this.DOM({ x: object.entry.abscissa.charCodeAt() - 96, y: object.entry.ordinate }).innerHTML = `<img src="${object.src}" class="piece">`;
    }

    static set() {
        Chess.start();

        Style.src('white-rook1');

        document.querySelectorAll('.a').forEach((a, b, c) => { console.log(a, b, c) });

        document.querySelectorAll(`.a td`)[1 - 1]

        Chess.Rook({ x: 2, y: 3 });

        Chess.set({ name: 'black-rook', x: a, y: 5 });
    }
};