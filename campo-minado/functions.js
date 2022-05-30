// cria o tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}
// esparrama as minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    
    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}
//  cria o tabuleiro com as minas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

// vamos clonar a board -> programação funcional
// mudança de estado
const cloneBoard = board => {
  return board.map(rows => { // para cada linha do tabuleiro
    return rows.map(field => { // para cada coluna
      return {
        ...field // retorna campo
      }
    })
  })
}

// obter os vizinhos de um field
const getNeighbors = (board, row, column) => {
  const neighbors = []
  const rows = [row - 1, row, row + 1]
  const columns = [column -1, column, column + 1]
  rows.forEach( r => {
    columns.forEach( c => {
      // vizinho não pode ser ele mesmo
      const different = (r != row || c != column)
      // linha inválida
      const validRow = (r >= 0 && r < board.length)
      // coluna inválida
      const validColumn = (c >= 0 && c < board[0].length)
      if (different && validRow && validColumn){
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors // retorna os campos vizinhos
}

// verifica se os campos vizinhos estão seguras
// estar seguro significa não estar minado
// retorna true caso todos vizinhos sejam seguros
// retorna false caso algum vizinho esteja inseguro
const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

// vamos abrir o campo
const openField = (board, row, column) => {
  const field = board[row][column]
  if (!field.opened){ // campo ainda não aberto
    field.opened = true
    if (field.mined){ // campo minado
      field.exploded = true
    }
    else if (safeNeighborhood(board, row, column)){ // vizinhos seguros
      getNeighbors(board, row, column)
      .forEach( n => openField(board, n.row, n.column))
    }
    else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter( n => n.mined).length
    }
  }
}

// transforma a matriz em um vetor único
const fields = board => [].concat(...board)
// se houve explosão
const hadExplosion = board => fields(board)
    .filter( field => field.exploded).length > 0
// existe algo pendente
const pendding = field => (field.mined && !field.flagged) || 
  (!field.mined && !field.opened)

// quando ganhou jogo - quando não tiver pendência
const wonGame = board => fields(board).filter(pendding).length = 0  

// mostra as minas
const showMines = board => fields(board).filter( field => field.mined).forEach (field => field.opened = true)

// inverte a bandeira
const invertFlag = (board, row, column) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

// conta quantas bandeiras existem
const flagsUsed = board => fields(board)
  .filter(field => field.flagged).length

export {createMinedBoard, 
      cloneBoard, 
      openField, 
      hadExplosion, 
      wonGame, 
      showMines,
      invertFlag,
      flagsUsed}