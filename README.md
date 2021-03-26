<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>


# JS-CC-003 : Reverse Words

Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.



### Learning Outcomes

At the end of the this coding challenge, students will be able to; 

- Analyze a problem, identify and apply programming knowledge for appropriate solution. 
-  Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.



### Problem Statement

- Write a function that takes an array of characters and reverses the words order.
- Please note that, single word should not be reversed!
- Please take a look at the empty function and test code below:

```js
function reverseWords(message) {
	// write your code here
}
 // You can write additional helper functions as well.

 /* Tests */
let desc = 'Don\'t reverse single word';
let input = 'Clarusway'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'Clarusway';
assertEqual(actual, expected, desc);

desc = 'Inspring Quote #1';
input = 'days. big make things Little'.split('');
reverseWords(input);
actual = input.join('');
expected = 'Little things make big days.';
assertEqual(actual, expected, desc);

desc = 'Inspring Quote #2';
input = "impossible. mean not does hard but hard, be to going It’s".split('');
reverseWords(input);
actual = input.join('');
expected = "It’s going to be hard, but hard does not mean impossible.";
assertEqual(actual, expected, desc);

desc = 'Inspring Quote #3';
input = "done. you’re when Stop tired. you’re when stop Don’t".split('');
reverseWords(input);
actual = input.join('');
expected = "Don’t stop when you’re tired. Stop when you’re done.";
assertEqual(actual, expected, desc);
function assertEqual(a, b, desc) {
if (a === b) {
    console.log(`${desc} ... PASS`);
}else {
    console.log(`${desc} ... FAIL: ${a} ≠ ${b}`);
	}
}
```

⌛ Happy Coding ✍

