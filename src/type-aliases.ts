export {};

type Mojiretsu = string;

const fooString1: string = 'Hello';
const fooString2: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

// example1の型を指定することができる
type Profile2 = typeof example1;
