"use strict"

class Chess {
    /** @var {String} */
    static __ERROR_OUT_OF_RANGE = `An unexpected error occured: Out of range.`;

    /** @var {String} */
    static __ERROR_INVALID_PARAM = `An unexpected error occured: Element out of range or invalid.`;

    /** @var {String} */
    static _CHESS_ELEMENTS = `body>div#container div.piece`;

    /** @var {Integer} */
    static _ROWS_COLUMNS_NUMBER = 8;

    /** @var {Integer} */
    static A = 97;

    /** @var {Integer} */
    static H = 104;

    /**
     * Get properties from element.
     * 
     * @param {Object} arg
     * 
     * @return {Object}
     */
    static getProperties(arg = {}) {
        if (Validator.Limit(arg.x, Validator.ALPHABETIC) && Validator.Limit(arg.y, Validator.NUMERIC)) {
            for (let i in Config) {
                if (Config[i].entry.abscissa == arg.x && Config[i].entry.ordinate == arg.y) {
                    return Config[i];
                }
            }
        } else {
            throw new Error(this.__ERROR_OUT_OF_RANGE);
        }

        return {
            "src": "images/Empty.png",
            "entry": {
                "abscissa": arg.x,
                "ordinate": arg.y
            }
        }
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
            return document.querySelector(`div#container div[data-target="${args.y}"] div[data-target="${args.x}"]`)
        } else {
            throw new Error(this.__ERROR_INVALID_PARAM);
        }
    }

    /**
     * Read the Config.js file and render the game accordingly.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    static Render() {
        for (const [key, value] of Object.entries([1, 2, 3, 4, 5, 6, 7, 8])) {
            for (let j = 97; j < 105; j++) {
                const GameElement = this.getProperties({ y: value, x: String.fromCharCode(j) });
                this.setDOMElement(GameElement);
            }
        }
    }

    /**
     * Start the game.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    static start() {
        this.addEntry();
        this.addEventOnClick(document.querySelectorAll(this._CHESS_ELEMENTS));

        this.Render();
    };

    /**
     * Set XY Coordinates.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    static addEntry() {
        for (let i = this._ROWS_COLUMNS_NUMBER; i > 0; i--) {
            document.querySelector(`body>div#container>div:nth-child(${i})`).dataset.target = this._ROWS_COLUMNS_NUMBER + 1 - i;

            for (let j = this._ROWS_COLUMNS_NUMBER; j > 0; j--) {
                document.querySelector(`body>div#container>div:nth-child(${i}) div:nth-child(${j})`).dataset.target = this._ROWS_COLUMNS_NUMBER + 1 - j;
            }
        }
    }

    /**
     * Add events on table.
     * 
     * @param {Object} elements
     * 
     * @return {void}
     */
    static addEventOnClick(elements = {}) {
        const _this = this;

        elements.forEach(function (entry) {
            entry.addEventListener("click", (event) => {
                let _PIECE = event.target.parentElement;
                let _TR = _PIECE.parentElement;
                let _X = _this.A - 1 + parseInt(_PIECE.getAttribute('data-target'));
                let _Y = _TR.getAttribute('data-target');
                let _ASCII = String.fromCharCode(_X);

                const _PARAM = {
                    _PIECE: _PIECE,
                    _TR: _TR,
                    _X: _X,
                    _Y: _Y,
                    _ASCII: _ASCII,
                    _PROPERTIES: _this.getProperties({ x: _ASCII, y: _Y })
                }

                _this.set(_PARAM);
            }, false);
        });
    }

    /**
     * Set an element into the game.
     * 
     * @param {Object} object
     */
    static setDOMElement(object = {}) {
        this.DOM({ x: object.entry.abscissa.charCodeAt() - 96, y: object.entry.ordinate }).innerHTML = `<img src="${object.src}" class="piece">`;
    }

    /**
     * Change the game state.
     * 
     * @param {Object} params 
     * 
     * @return {void}
     */
    static set(params) {
        console.log(params);
    }
};