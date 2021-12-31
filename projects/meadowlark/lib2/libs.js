const namesUser = [
  'Rodrigo',
  'Mistery',
  'Martin',
  'Boonnie',
  'Isabel',
  'Jake',
  'Finn'
]
exports.randomName = () => {
  return namesUser[ Math.floor( ( Math.random() * namesUser.length ) + 0 ) ]
}