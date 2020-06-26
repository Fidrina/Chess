"use strict"

class Style {
    /**
     * Constructor Method.
     * 
     * @name constructor
     */
    constructor() {
        console.log(new Date());
    };

    /**
     * Get Path.
     * 
     * @name src
     * 
     * @param {String}
     * @return {String}
     */
    static src(piece) {
        return `images/${piece}.png`;
    }
}