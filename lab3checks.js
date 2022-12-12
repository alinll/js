// Connect Node.JS built-in module for checks
const assert = require('assert');

// Connect our function
const d = require('./lab3.js');
let failTest = 0;

let time = d.date('2019-05-16T15:15:00.000Z');
d.add(24, 'hours');
d.subtract(1, 'months');
d.add(3, 'days');
d.add(15, 'minutes');

let dt = new Date('2019-04-20T15:30:00.000Z');

try {
     assert.deepEqual(
         time,
         dt
     );
     console.log('Test1 passed');
 } catch (e) {
     console.log('Test1 failed');
     failTest++;
 }
 d.add(10, 'years');
 d.add(24, 'hours');

 dt = new Date('2029-04-21T15:30:00.000Z');

try {
     assert.deepEqual(
         time,
         dt
     );
     console.log('Test2 passed');
 } catch (e) {
     console.log('Test2 failed');
     failTest++;
 }
 d.subtract(7200, 'minutes');

 at = new Date('2029-04-16T15:30:00.000Z');

 try {
     assert.deepEqual(
         time,
         at
     );
     console.log('Test3 passed');
 } catch (e) {
     console.log('Test3 failed');
     failTest++;
 }
 // assert.throws accepts a function and
 // checks that it throws an exception of a certain type
 try {
     assert.throws(
         function () {
             time.add(2, 'years');
         },
         TypeError
     );
     console.log('Test4 passed');
 } catch (e) {
     console.log('Test4 failed');
     failTest++;
 }

 try {
     assert.throws(
         function () {
             time.add(-2, 'years');
         },
         TypeError
     );
     console.log('Test5 passed');
 } catch (e) {
     console.log('Test5 failed');
     failTest++;
 }

 if (!failTest) {
     console.log('All tests passed!');
 } else {
     console.log(`Fail ${failTest} tests!`)
}
