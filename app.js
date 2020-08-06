const init = () => {
  const board = document.getElementById('board')
  const shuffle = document.getElementById('shuffle')
  const sort = document.getElementById('sort')

  // Shuffle items on the board
  shuffle.addEventListener('click', () => {
    let toShuffle = Array.from(document.getElementById('board').children)

    toShuffle = toShuffle.sort(() => {
      return Math.random() - 0.5
    })
    board.innerHTML = ''

    toShuffle.map((x) => {
      board.appendChild(x)
    })
  })

  // Sort items on the board
  sort.addEventListener('click', () => {
    let toSort = Array.from(document.getElementById('board').children)

    toSort = toSort.sort((a, b) => {
      return a.id.split('-')[1] - b.id.split('-')[1]
    })
    board.innerHTML = ''

    toSort.map((x) => {
      board.appendChild(x)
    })
  })
}

init()
