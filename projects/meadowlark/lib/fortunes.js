const fortunes = [
  'Perfect practices, makes Perfect',
  'markdown',
  'package.lock.json',
  'caret'
]
exports.f = () =>  (() => (
  fortunes[ Math.floor( ( Math.random() * fortunes.length ) + 0 ) ] 
))()