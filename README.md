![Compartilhar no Twitter](https://img.shields.io/twitter/url/https/github.com/marcosv-lealferreira/marcosvleal-core?style=social) ![Licença MIT](https://img.shields.io/github/license/marcosv-lealferreira/marcosvleal-core) ![Stars](https://img.shields.io/github/stars/marcosv-lealferreira/marcosvleal-core) ![Forks](https://img.shields.io/github/forks/marcosv-lealferreira/marcosvleal-core) ![Issues](https://img.shields.io/github/issues/marcosv-lealferreira/marcosvleal-core)

# @marcosvleal/core

Essa biblioteca é um exemplo de desenvolvimento de pacotes para o npm.

## Note

Esse não é um projeto que continuará sendo mantido e atualizado para fins de produção.

## Instalação

`npm i --save @marcosvleal/core`

## Uso

### To LowerCase

Transforma string em LowerCase.

```typescript
import { stringTransform } from '@marcosvleal/core';

const str = 'MARCOS V. leal';

stringTransform.toLowercase(str); // Saída: marcos v. leal
```

### To UpperCase

```typescript
import { stringTransform } from '@marcosvleal/core';

const str = 'marcos v. LEAL';

stringTransform.toUppercase(str); // Saída: MARCOS V. LEAL
```

### To Capitalize

```typescript
import { stringTransform } from '@marcosvleal/core';

const str = 'MARCOS v. leal';

stringTransform.toUppercase(str); // Saída: Marcos V. Leal
```
