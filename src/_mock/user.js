import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: ``,
  name: 'Conta teste',
  company: 'Fornecedor',
  due_date: '05/05/2022',
  role: "R$ 500,00"
}));

export default users;
