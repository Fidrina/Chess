/**
 *   *************************************************************************
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *************************************************************************
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   *************************************************************************
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *************************************************************************
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   *************************************************************************
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *************************************************************************
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   *************************************************************************
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *        **********        **********        **********        **********
 *   *************************************************************************
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   **********        **********        **********        **********        *
 *   *************************************************************************
 */

"use strict"

/**
 * Variável usada para setar as cores para as casas possíveis de serem movidas para a peça selecionada.
 */
let OnMovement = {
  a: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  b: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  c: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  d: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  e: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  f: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  g: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
  h: [{
      1: false
    },
    {
      2: false
    },
    {
      3: false
    },
    {
      4: false
    },
    {
      5: false
    },
    {
      6: false
    },
    {
      7: false
    },
    {
      8: false
    },
  ],
};

/**
 *
 */
let WhiteKnightPositions = [];

/**
 *
 */
let BlackKnightPositions = [];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Função responsável por auxiliar a validação da posição da peça.
 *
 * @param {integer} x
 * @param {integer} y
 */
let ValidaLimitesTabuleiro = function (x, y) {
  if (x < 1 || x > 8 || y < 1 || y > 8) {
    return false;
  } else {
    return true;
  }
};

/**
 * Função responsável por renderizar a tela a partir de um array base.
 */
function Render() {}

/**
 * Função responsável por aplicar um estilo indicando os movimentos possíveis para a peça selecionada.
 * 
 * Aplica uma cor #00A8E8 na td em que a imagem está inserida.
 */
function ApplyStyleOnMovement() {
  for (let i in OnMovement) {
    for (let j = 0; j < 8; j++) {
      if (OnMovement[i][j][j + 1]) {
        document.querySelector(`table tbody tr td[id='${i}${j+1}'] img`).style.backgroundColor = '#00A8E8';
      } else {
        document.querySelector(`table tbody tr td[id='${i}${j+1}'] img`).style.backgroundColor = '';
      }
    }
  }

  return OnMovement;
}

/**
 * Função usada para limpar a indicação de possibilidade de movimento, de forma a permitir indicar a orientação para a próxima
 */
function RemoveStyleOfTable() {
  for (let i in OnMovement) {
    for (let j = 0; j < 8; j++) {
      OnMovement[i][j][j + 1] = false;
    }
  }
}

/**
 * 
 * @param {*} event 
 */
function Dispatcher(event) {
  if (event.target.attributes.src != undefined) {
    let Element = event.target.attributes.src.value;
    let ColorAndPiece = Element.replace(/images\//i, '').replace(/\.png/i, '');

    let StringSplited = ColorAndPiece.split('-');

    let Color = StringSplited[0];
    let Piece = StringSplited[1];

    RemoveStyleOfTable();

    let data = {
      color: Color,
      line: event.target.parentElement.id[1],
      column: event.target.parentElement.id[0]
    };

    switch (Piece.capitalize()) {
      case 'Rook':
        Rook(data);
        break;
      case 'Knight':
        Knight(data);
        break;
      case 'Bishop':
        Bishop(data);
        break;
      case 'Queen':
        Queen(data);
        break;
      case 'King':
        King(data);
        break;
      case 'Pawn':
        Pawn(data);
        break;
    }

    ApplyStyleOnMovement();
  }
}

/**
 * 
 * @param {*} data 
 */
function Queen(data = []) {}

/**
 * 
 * @param {*} data 
 */
function Bishop(data = []) {}

/**
 * 
 * Regras de negócio para a movimentação da torre
 * 
 * @param {Array} data
 */
function Rook(data = []) {
  // Realiza a coloração de toda a coluna em que a torre está
  for (let i in OnMovement) {
    for (let j = 0; j < 8; j++) {
      if (data.line == j + 1) {
        OnMovement[i][j][j + 1] = true;
      }
    }
  }

  // Realiza a coloração de toda a linha em que a torre está
  for (let i = 0; i < 8; i++) {
    OnMovement[data.column][i][i + 1] = true;
  }
}

/**
 * 
 * @param {Array} data
 */
function Knight(data = []) {}

/**
 * 
 * @param {Array} data
 */
function Pawn(data = []) {}

/**
 * 
 * @param {Array} data
 */
function King(data = []) {}

/**
 * Código executado no carregamento da página.
 */
window.onload = function () {
  let Elements = document.querySelectorAll("table tbody tr td");

  for (let i = 0; i < Elements.length; i++) {
    Elements[i].addEventListener("click", evt => {
      Dispatcher(evt);
    });
  }
};