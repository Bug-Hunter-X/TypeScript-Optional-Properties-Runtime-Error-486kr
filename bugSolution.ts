function printName(person: { firstName: string; lastName?: string }) {
  const lastName = person.lastName === undefined ? '' : person.lastName; //Handle undefined
  console.log(`${person.firstName} ${lastName}`);
}

printName({ firstName: 'John' }); // Output: John 
printName({ firstName: 'Jane', lastName: 'Doe' }); // Output: Jane Doe

//Alternative using Optional Chaining
function printName2(person: { firstName: string; lastName?: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}
printName2({ firstName: 'John' }); //Output: John undefined
printName2({ firstName: 'Jane', lastName: 'Doe' }); //Output: Jane Doe
//Solution using optional chaining and nullish coalescing 
function printName3(person: { firstName: string; lastName?: string }) {
  console.log(`${person.firstName} ${person.lastName ?? ''}`);
}
printName3({ firstName: 'John' }); // Output: John 
printName3({ firstName: 'Jane', lastName: 'Doe' }); // Output: Jane Doe 