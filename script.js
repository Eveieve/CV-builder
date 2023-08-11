// javascript playground

// using Map

// const contacts = new Map();
// contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });

// console.log(contacts.has('Jessie'));
// contacts.get('Hilary');
// contacts.set('Hilary', { phone: 234 - 23121, address: 'l3kdj2 2kjs' });
// contacts.get('Jessie');
// contacts.delete('Raymond');
// contacts.delete('Jessie');
// console.log(contacts.size);

// Iterating Map with for...of
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// loop and console log keys
for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}

// Iteration May with forEach();
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Relation with Array objects
const kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

// use the regular Map constructor to transform a 2D key-value Array into a map
const myMap2 = new Map(kvArray);
console.log(myMap2);
console.log(myMap2.get('key1'));

// use Array.from() to transform a map into a 2D key-value array
console.log(Array.from(myMap2)); // exactly same as kvArray

// a more succinct way to do the same
console.log([...myMap2]);

// or use the keys() or values() iterators, and convert them to an array
// make keys of Map to an array !
console.log(Array.from(myMap2.keys()));

// Cloning and merging Maps
// Just like Arrays, Maps can be cloned:
const original = new Map([
  [1, 'one'],
  [2, 'two'],
]);
console.log(original);
const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone); // false

// Maps can be merged, maintaining key uniqueness

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// merging two maps, The last repeated key wins.
// spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));
