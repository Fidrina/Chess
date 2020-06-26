"use strict"

class Validator {
  /** @var {integer} */
  static NUMERIC = 1;

  /** @var {Integer} */
  static ALPHABETIC = 2;

  /**
   * Limit Validator.
   *
   * @param {integer} arg
   * @param {integer} type
   * 
   * @return {Boolean}
   */
  static Limit = function (arg, type) {
    switch (type) {
      case this.NUMERIC:
        return [1, 2, 3, 4, 5, 6, 7, 8].includes(parseInt(arg));
      case this.ALPHABETIC:
        return ["a", "b", "c", "d", "e", "f", "g", "h"].includes(arg.toString());
    }

    throw new Error(`An unexpected error occured: Invalid param :${arg}.`);
  };

  /**
   * Queen Validator.
   * 
   * @param {Object} arg
   * 
   * @return {Boolean}
   */
  static Queen(arg = {}) {
    return true;
  }

  /**
   * Bishop Validator.
   * 
   * @param {Object} arg 
   */
  static Bishop(arg = {}) {
    return true;
  }

  /**
   * Rook Validator.
   * 
   * @param {Object} arg
   * 
   * @return {Boolean}
   */
  static Rook(arg = {}) {
    console.log(data.x);
    console.log(data.y);

    return true;
  }

  /**
   * Knight Validator.
   * 
   * @param {Object} arg
   * 
   * @return {Boolean}
   */
  static Knight(arg = {}) {
    return true;
  }

  /**
   * Pawn Validator.
   * 
   * @param {Object} arg
   * 
   * @return {Boolean}
   */
  static Pawn(arg = {}) {
    return true;
  }

  /**
   * King Validator.
   * 
   * @param {Object} arg
   * 
   * @return {Boolean}
   */
  static King(arg = {}) {
    return true;
  }
}