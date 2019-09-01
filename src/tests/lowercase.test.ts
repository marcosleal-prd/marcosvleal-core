import { stringTransform } from '../index';

test('Test LowerCase', () => {
	expect(stringTransform.toLowercase('MARCOS V. leal')).toBe('marcos v. leal');
});
