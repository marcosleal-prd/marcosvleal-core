import { stringTransform } from '../index';

test('Test UpperCase', () => {
	expect(stringTransform.toUppercase('marcos v. LEAL')).toBe('MARCOS V. LEAL');
});
