/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?

//Task 1: Generate Attendee Badge

function generateBadge(name, role) {
  // Capitalize the first letter of role and keep the rest lowercase
  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  return `Name: ${name}, Role: ${formattedRole}`;
}


//Task 2: Calculate Event Cost

function calculateEventCost(numAttendees, costPerAttendee) {
  let total = numAttendees * costPerAttendee;
  if (numAttendees > 100) {
    total = total * 0.9; // Apply 10% discount
  }
  return total;
}


//Task 3: Validate Email

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
/*Input: email (string)

Output: Boolean (true/false)

Collaborative Steps
Design Phase
Brainstorming: Clarify inputs (parameters) and expected outputs (return value) for each function.

Roles:

Pseudocode Writer drafts logic steps (see commented steps in code).

Initial Coder translates to code.

Testers/Debuggers write and review test cases.

Implementation Phase
Work together to write and refine functions.

Ensure use of parameters and return statements for clarity and reuse.

Testing Phase
Members provide test cases:*/


// Test Task 1
console.log(generateBadge("Alice", "speaker")); // "Name: Alice, Role: Speaker"
console.log(generateBadge("Bob", "attendee"));  // "Name: Bob, Role: Attendee"
console.log(generateBadge("Maya", "ORGANIZER")); // "Name: Maya, Role: Organizer"

// Test Task 2
console.log(calculateEventCost(120, 25)); // 2700
console.log(calculateEventCost(100, 25)); // 2500
console.log(calculateEventCost(101, 25)); // 2272.5

// Test Task 3
console.log(isValidEmail("alice@example.com")); // true
console.log(isValidEmail("bobexample.com"));    // false
console.log(isValidEmail("maya@org"));          // false

/*Presentation Phase
Present functions, describe choices, detail the team's workflow.

Discuss challenges, decisions for code formatting, and handling edge cases.*/