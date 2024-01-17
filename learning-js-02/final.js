// - Create a Contact Us page
//    - Name
//    - Email
//    - Phone Number
//    - Two Radio Buttons
//        - Home
// 	   - Business
//    - If Business is selected, Company Name
//    - Message Content
//    - Submit

// - After clicking on submit, use your JavaScript to the following after the user clicks submit
//    - Check all fields are not empty.
//    - Email address has an "@" and a ".com"
//    - Phone number has at least 10 numbers
//    - Home OR Business is selected
//         - If Business is selected, show Company Name input and require Company Name.
//    - If there is an error, show a p element explaining the error. (For instance, if name is missing, say Name is Missing)
//    - return an object with the following
//      {
//            name,
//            email,
//            phone,
//            category, (home/business)
//            company name,
//            message,
//      }
employees = ["Thomas", "Thomas", "Thomas", "arr", "arr"];

console.log(employees.filter((x) => x == "Thomas"));
