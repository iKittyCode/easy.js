var Easy = require('./easy')
test('message logged', () => {
let easy = new Easy()
var text = 'Hello'
expect(easy.prints(text)).toBe('Hello')
})