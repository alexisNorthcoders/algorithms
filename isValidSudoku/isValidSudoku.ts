export default function isValidSudoku(sudokuBoard: string[][]): boolean {

    class SudokuBoard {
        board: string[][]
        isValid: boolean
        rowSets: Set<string>[]
        gridMap: Map<string, Set<string>>

        constructor(sudokuBoard: string[][]) {

            this.board = sudokuBoard
            this.isValid = true
            this.rowSets = []
            this.gridMap = new Map()
        }

        checkColumn() {
            let grid = "00"
            for (let r = 0; r < this.board.length; r++) {
                const columnSet = new Set()
                for (let c = 0; c < this.board.length; c++) {
                    const num = this.board[c][r]
                    if (num === ".") { continue }
                    // grid logic
                    grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`
                    if (!this.gridMap.has(grid)) {
                        this.gridMap.set(grid, new Set())
                    }
                    const gridSet = this.gridMap.get(grid);
                    if (gridSet) {
                        if (gridSet.has(num)) {
                            this.isValid = false;
                            break;
                        }
                        gridSet.add(num);
                    }
                    // row logic
                    if (!this.rowSets[c]) {
                        this.rowSets[c] = new Set()
                    }
                    if (this.rowSets[c].has(num)) {
                        this.isValid = false
                        break
                    }
                    this.rowSets[c].add(num)

                    // column logic
                    if (columnSet.has(num)) {
                        this.isValid = false
                        break
                    }
                    columnSet.add(num)


                }
            }
        }
    }
    const newBoard = new SudokuBoard(sudokuBoard)
    newBoard.checkColumn()
    return newBoard.isValid
}