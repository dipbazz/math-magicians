import calculate from '../../logic/calculate';

describe('calculate', () => {
  describe('button case +/-', () => {
    it('return total as -10', () => {
      const result = calculate({
        total: '10',
        next: '',
        operation: null
      }, '+/-')

      expect(result.total).toBe('-10');
    });

    it('return next as -8', () => {
      const result = calculate({
        total: '10',
        next: '8',
        operation: null
      }, '+/-')

      expect(result.next).toBe('-8');
    });
  });

  describe('button case AC', () => {
    it('clears the calculate data', () => {
      const result = calculate({
        total: '10',
        next: '8',
        operation: '+'
      }, 'AC')

      expect(result.total).toBe('');
    });
  });

  describe('button case =', () => {
    it('return the total as 18 for +', () => {
      const result = calculate({
        total: '10',
        next: '8',
        operation: '+'
      }, '=')

      expect(result.total).toBe('18');
    })
  });

  it('return the total as same value without next', () => {
    const result = calculate({
      total: '10',
      next: '',
      operation: '+'
    }, '=')

    expect(result.total).toBe('10');
  });

  describe('button case .', () => {
    it('return the total as 10.', () => {
      const result = calculate({
        total: '10',
        next: '',
        operation: null
      }, '.')

      expect(result.total).toBe('10.');
    })
  });

  it('return the next as 8.', () => {
    const result = calculate({
      total: '10',
      next: '8',
      operation: '+'
    }, '.')

    expect(result.next).toBe('8.');
  });

  it('return the total as 10. with already 10. value', () => {
    const result = calculate({
      total: '10.',
      next: '',
      operation: null
    }, '.')

    expect(result.total).toBe('10.');
  });

  describe('button case 0 - 9', () => {
    it('return the total as button if operation is null', () => {
      const result = calculate({
        total: '',
        next: '',
        operation: null
      }, '1')

      expect(result.total).toBe('1');
    });

    it('return the next as button if operation and total is present', () => {
      const result = calculate({
        total: '12',
        next: '',
        operation: '+'
      }, '1')

      expect(result.next).toBe('1');
    });
  });

  it('return the next as button if operation is present', () => {
    const result = calculate({
      total: '12',
      next: '',
      operation: '+'
    }, '1')

    expect(result.next).toBe('1');
  });

  describe('button case +, -, x, %, ÷', () => {
    it('return operation as button name when total is present', () => {
      const result = calculate({
        total: '12',
        next: '',
        operation: null
      }, '+')

      expect(result.operation).toBe('+');
    });


    it('does nothing when total is not present', () => {
      const result = calculate({
        total: '',
        next: '',
        operation: null
      }, '+')

      expect(result.operation).toBe(null);
    });
  });
});
