const { it, test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Verifica se uppercase retorna a string passada em maiúsculo', (done) => {
  uppercase('touppercase', (str) => {
    try {
      expect(str).toBe('TOUPPERCASE');
      done();
    } catch (error) {
      done(error);
    }
  });
});