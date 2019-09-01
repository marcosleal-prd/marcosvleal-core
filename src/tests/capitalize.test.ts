import { stringTransform } from '../index';

test('Test Capitalize', () => {
	expect(stringTransform.toCapitalize('marcos v. LEAL')).toBe('Marcos V. Leal');
});
