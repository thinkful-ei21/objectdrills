'use strict';

function makeStudentsReport(data) {
  let report = [];
  for(let i=0; i<data.length; i++) {
  	report.push(`${data[i].name}: ${data[i].grade}`);
  }
  return report;
}

/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/

// tests

function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
        testData.length +
        ' but `makeStudentsReport` returned array of length ' +
        results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();


const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  // your code here
  return students.map(function(students)  {
    return {
    name: students.name,
    status: 'In Summer school',
    course: students.course

    }
  })
}

// Problem "Find by ID"

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  for(let i=0; i<items.length; i++) {
    if(items[i].id === idNum) {
      return items[i];
    }
  }
}

//

function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();

///////////////////////////
/// Validate Object Keys //
///////////////////////////

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let check = [];
  expectedKeys.forEach(function(key) {
    check.push(object.hasOwnProperty(key));
  });
  let checked = true;
  for(let i=0; i<check.length; i++) {
    checked = checked && check[i];
  }
  checked = Object.keys(object).length === expectedKeys.length && checked;
  return checked;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

function testIt() {
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

  const objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused',
  };

  const objectD = {
    foo: 2,
    bar: 'Jane Doe',
    bizz: 34,
    bang: 'Chicago',
  };

  const expectedKeys = ['id', 'name', 'age', 'city'];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error('FAILURE: validateKeys should return a boolean value');
    return;
  }

  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return true but returned false:
      Object: ${JSON.stringify(objectA)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectB)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectC, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectC)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectD, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectD)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  console.log('SUCCESS: validateKeys is working');
}

testIt();
