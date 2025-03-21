// Reference: https://greasyfork.org/en/scripts/487071-lichess-fritz-full-pack/code

function addGlobalStyle(css) {
  let head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  style = document.createElement('style');
  style.innerHTML = css;
  head.appendChild(style);
}

const globalStyles = [
  '.knight.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/bn.png")!important;',
  '.bishop.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/bb.png")!important;',
  '.queen.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/bq.png")!important;',
  '.rook.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/br.png")!important;',
  '.pawn.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/bp.png")!important;',
  '.king.black { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/bk.png")!important;',
  '.knight.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wn.png")!important;',
  '.bishop.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wb.png")!important;',
  '.queen.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wq.png")!important;',
  '.rook.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wr.png")!important;',
  '.pawn.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wp.png")!important;',
  '.king.white { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/pieces/icy_sea/wk.png")!important;',
  'cg-board::before { background-image: url("https://raw.githubusercontent.com/lightzane/chess.com-boards-and-pieces/refs/heads/main/boards/icy_sea.png")!important; }',
  'square.last-move { background-color: cyan !important; opacity: 0.2;}',
];

globalStyles.forEach((styles) => {
  addGlobalStyle(styles);
});
