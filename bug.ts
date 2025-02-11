function printName(person: { firstName: string; lastName?: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printName({ firstName: 'John' }); // This will work fine
printName({ firstName: 'Jane', lastName: 'Doe' }); // This will also work fine

// Problem:
// If lastName is accessed and the object doesn't have it, a runtime error occurs.
// Ideally, TypeScript should prevent this. 
//However, because the ? makes lastName optional, it compiles without error. 