const isPalindrome = require('./palindrome')

describe('isPalindrome()', () => {
  test('should return true', () => {
    expect(isPalindrome('madam')).toBeTruthy()
  });

  test('should return false', () => {
    expect(isPalindrome('apple')).toBe(false)
  })

  test('should return true', () => {
    expect(isPalindrome('nurses run')).toBe('nursesrun')
  })
  
})
