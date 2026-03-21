// Variable declarations
let name = "Daisy";
let age = 22;
const birthYear = 2003;

// typeof operator
console.log(typeof name);    
console.log(typeof age);     
console.log(typeof true);    

// let vs const
let score = 100;
score = 150;

const PI = 3.14159;

console.log("===== Task 7.1: Variables=====");
// Exercise variables
let myName = "Daisy";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["nude", "black", "white"];
let todayDate = new Date();

// Console logs
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors:", favoriteColors);
console.log("Today's date:", todayDate);

console.log("===== Task 7.2 - Exercise 1: Number Operations =====");
// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

console.log("===== Task 7.2 - Exercise 2: String Operations =====");

let firstName = "Daisy";
let lastName = "Wairimu";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Daisy"));

console.log("===== Task 7.2 - Exercise 3: Comparison & Logical Operators=====");

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT


console.log("===== Challenge: Age Calculations=====");

let  Age = 22; // 
let currentYear = new Date().getFullYear();

let ageInDays = myAge * 365; // approximate
let ageInHours = ageInDays * 24;
let yearTurning100 = currentYear + (100 - myAge);

console.log("My age in days (approx):", ageInDays);
console.log("My age in hours (approx):", ageInHours);
console.log("The year I will turn 100:", yearTurning100);


console.log("===== Task 7.3: Functions =====");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test them in console
console.log(greet("Daisy"));   // Hello, Daisy!
console.log(add(5, 7));        // 12
console.log(multiply(3, 4));   // 12
console.log(divide(10, 2));    // 5
console.log(divide(5, 0));     // Cannot divide by zero


console.log("=====Exercise 2 =====");

// Area of rectangle
function calculateArea(width, height) {
    return width * height;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Check if number is even
function isEven(number) {
    return number % 2 === 0;
}

// Get initials
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

// Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test them
console.log(calculateArea(5, 10));       // 50
console.log(celsiusToFahrenheit(25));    // 77
console.log(isEven(4));                   // true
console.log(isEven(7));                   // false
console.log(getInitials("Daisy Wairimu")); // DW
console.log(reverseString("Daisy"));      // ysiaD


console.log("===== Exercise 3 =====");

// Default parameters
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetDefault());              // Hello, Guest!
console.log(greetDefault("Alice"));       // Hello, Alice!
console.log(greetDefault("Bob", "Hi"));   // Hi, Bob!

// Calculate Tip function
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(calculateTip(200));           // 30
console.log(calculateTip(200, 20));       // 40


console.log("===== Task 7.4: Control Flow=====");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test
console.log(getGrade(95)); // A
console.log(getGrade(75)); // C
console.log(getGrade(50)); // F

console.log("===== Exercise 2: Days=====");

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Test
console.log(getDayName(1)); // Monday
console.log(getDayName(5)); // Friday


console.log("===== Exercise 3: Loops =====");
 // For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count2 = 0;
while (count2 < 5) {
    console.log(count2);
    count2++;
}

// For...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}


console.log("===== Numbers 1 to 100 =====");

for (let i = 1; i <=100; i++) { console.log(i);}

console.log("===== Even Numbers 1 to 50=====");

for (let i =1; i<= 50; i++) {if (i % 2 === 0) {console.log(i);}}


console.log("===== FizzBuzz =====");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


console.log("===== Triangle of Stars =====");

for (let i = 1; i <= 5; i++) { console.log("*".repeat(i));}



//===== MINI PROJECT: CALCULATOR ===== 

// Add
function addcalc(a, b) {
    return a + b;
}

// Subtract
function subtract(a, b) {
    return a - b;
}

// Multiply
function multiplycalc(a, b) {
    return a * b;
}

// Divide
function dividecalc(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log("===== Calculator Tests =====");
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Cannot divide by zero
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8


//===== Task 8: ARRAYS -Exercise 1 =====

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start

console.log(fruits); 

// ===== Exercise 2 =====

const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(num => console.log(num * 2));

// map
const doubled = nums.map(num => num * 2);
console.log(doubled);

// filter
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);

// find
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

// reduce
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);

// includes
console.log(nums.includes(3)); // true


// ===== BUILD =====

const values = [2, -5, 12, 8, -1, 20];

// 1. Double all numbers
const doubledValues = values.map(num => num * 2);
console.log(doubledValues);

// 2. Remove negative numbers
const positiveValues = values.filter(num => num >= 0);
console.log(positiveValues);

// 3. First number greater than 10
const greaterThanTen = values.find(num => num > 10);
console.log(greaterThanTen);

// 4. Product of all numbers
const product = values.reduce((total, num) => total * num, 1);
console.log(product);


// Exercise 1 Object basics

// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log(person.firstName);         // Dot notation
console.log(person["lastName"]);       // Bracket notation
console.log(person.address.city);      // Nested

// Modifying properties
person.age = 31;
person.email = "john@example.com";     // Add new property
delete person.isStudent;               // Remove property



// EX.2 Object methods

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 7));  // 21


// EX.3 Object iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}




 // Task 8.3: Working with Real Data
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average Grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Any student grade > 90?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All students passing?", allPassing);




// Student Grade Management System
const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = Object.values(student.grades);
        const sum = grades.reduce((acc, g) => acc + g, 0);
        return +(sum / grades.length).toFixed(2);
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(s => s.grades[subject])
            .filter(g => g !== undefined);
        if (subjectGrades.length === 0) return null;
        const sum = subjectGrades.reduce((acc, g) => acc + g, 0);
        return +(sum / subjectGrades.length).toFixed(2);
    },

    // Get top performer (highest overall average)
    getTopStudent() {
        if (this.students.length === 0) return null;
        let topStudent = this.students[0];
        let topAvg = this.getStudentAverage(topStudent.name);

        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > topAvg) {
                topAvg = avg;
                topStudent = student;
            }
        }
        return topStudent.name;
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(s => this.getStudentAverage(s.name) < 70)
            .map(s => s.name);
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";
        const grades = student.grades;
        const average = this.getStudentAverage(name);
        let report = 'Report Card for ${name}:\n';
        for (const subject in grades) {
            const grade = grades[subject];
            report += '${subject}: ${grade} (${this.getLetterGrade(grade)})\n';
        }
        report += 'Average: ${average} (${this.getLetterGrade(average)})';
        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Alice Average:", gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log("Math Average:", gradeTracker.getSubjectAverage("math"));       // 75.67
console.log("Top Student:", gradeTracker.getTopStudent());                  // Alice
console.log("Struggling Students:", gradeTracker.getStrugglingStudents());  // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));





// Daily challenges..
console.log("=== Day 1: FizzBuzz ===");
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

console.log("=== Day 2: Reverse a String ===");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"


console.log("=== Day 3: Find Largest Number ===");
const numberss = [5, 2,  1, ];
function largestNumber(arr) {
    let max = arr[0];
    for (const num of arr) if (num > max) max = num;
    return max;
}
console.log(largestNumber(numbers)); // 5



console.log("=== Day 4: Remove Duplicates ===");
const dupArray = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(dupArray)); // [1,2,3,4,5]


console.log("=== Day 5: Palindrome Checker ===");
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\s]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true






    



