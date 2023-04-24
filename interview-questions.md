# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

______________________________________________________________________________________

1. What is git? What is the difference between git and Github?

Your answer: Git is a software created to make sharing coding practices/products easier and Github is one of many platforms that Git is utilized on.

Researched answer: 
-Git is a version control system. This helps track changes made in code, offers the capability of branches, ensures faster/more efficient ways to manage coding in projects of alls sizes. Git also features the capability of having multiple branches that are not connected to one another, so modifying/deleting one branch will not affect another.(https://git-scm.com/)
-GitHub is a developer platform that is open source, allows developers to build projects, edit them and share them. It also offers resources such as "how-to" guides, templates for different languages and extensions to download to assist users. A project can be made public or private. For a profile, you can receive access to more features and applications if you pay a monthly fee on a tiered pricing scale, however there is a free version. A user's profile will track commits, pushes ando other contributions made. A profile also has a "feed" that shows their activity in repositories and contributions, followers, and most actively used repositories.

2. Which JavaScript operators will return a Boolean value?

Your answer: = , ===, /=, >=, <=. 

Researched answer: Answer also includes || and &&. 
    -Researched and summarized from "https://www.w3schools.com/js/js_booleans.asp"
    - Boolean values dictate whether a variable or expression is true/false. They are utilized in comparison and conditionals statements that allow the output to show if the expression/variable entered is true or false. True or false can look like 1 === 1 (true) or 2 > 105(false). If an boolean variable has a value, it is true and if it does not have a value it is false (w3schools.com/js/js_booleans.asp). Boolean will also return false if it is undefined, Nan, Null, 0, or -0.(https://www.tutorialsteacher.com/javascript/javascript-boolean)

3. What is the difference between an array's index and its value?

Your answer: An array's value is stored in a single variable, so it will be an entire index.
    Example. ["computer", "cat", "dinner", "trees"]
        Index:   0          1        2         3
    In a regular string, each character of the value would be it's own index.
    Example: ("puppies)
    Index: 6- 0/p, 1/u, 2/p, etc.
   

Researched answer: 
-"The index of a value in an array, is that value's location within an array" (https://problemsolvingwithpython.com/05-NumPy-and-Arrays/05.05-Array-Indexing/#:~:text=The%20index%20of%20a%20value,in%20the%20code%20section%20below.&text=The%20array%20above%20contains%20three%20values%3A%202%20%2C%204%20and%206%20.) Each element in the array list can be accessed through indexing. Essentially, the index is the address of a value. Since array values are arranged like a list, the index will give you the location of a value on that list.



4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: An array is like a list of values where the index is associated to the value. A string has values where the index is each character (including spaces) within that string. ex. An array looks like: ["cats", "dogs", "birds", "fish"]. Each value in the quotation marks indexes as a number. A string looks like: "cats, dogs, birds, fish". Each value placeholder is indexed. So cat === 0123, etc.

They look similiar in grouping. Both need an int to begin the function.

Researched answer: Researched from (https://stackoverflow.com/questions/21808687/whats-the-difference-between-a-string-and-an-array-of-characters-in-javascript)

-Arrays make it so that data of any type can be stored in the individual values where the index finds value of each element within the array (Javascript Array Notes). These appear in the format of an "ordered list". The data is written into an element which is then given a value.

-Strings appear to similar, but have data that are called characters and they have to be wrapped in quotation marks. The index value of a string begins at the first character, including spaces.

-Both arrays and strings need to be "wrapped"; arrays have [] brackets and strings are in "". Both arrays and strings can be combined, using the .concat built-in method


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Proper pair programming techniques include: Good communication between the navigator and driver. If something is not understood, a question should be raised so that everyone is in understanding of what is being relayed. A driver does not navigate and a navigator does not drive. One person should be coding (the driver) as to not conflict with the coding results and mitigates any levels of confusion on both ends. Pairs should switch roles frequently so that strengths and weaknesses in each role can be practiced. Both pairs should be respective of their backgrounds, background noise, have the camera on, have a chat box of some type enabled. If there are tensions about the direction of a project, it is ideal to take a break and come back to the project. If one method by the navigator isnt' in favor with the driver, it's proper to allow the navigator to see it through first, before allowing the driver to make changes.

Researched answer: Researched from "https://duckly.com/blog/7-tips-for-successful-pair-programming/"

-Pair programming techniques start with discussing the upcoming project/work/assignment with each other prior to doing any work. This allows everyone to be on track with potential interruptions/distractions, ensures everyone is on the same page from the beginning and gives the opportunity for braintstorming. Length of the session should also be discussed. 
-Knowing boundaries when speaking to your pair programming partner is also a good technique. Micro-managing, being overly assertive, or a one-way listener can put unnecessary stress on your partner. Practice patience, focusing skills and avoid distractions that might take away your time from the project. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: A built-in method that is a function that uses another function as an argument (LEARN Academy syllabus notes). This is when a function is assigned to a variable.

2. Jest: Is a testing framework that is open source and was created by Facebook. It's purpose is to test out Javascript code before implementing it. Pieces of code called are put into files called dependencies. Yarn is a package manager that allows the user to manage dependecy files since there are so many of them. 

3. Objects: A javascript datatype. This contains key:value pairs. These are stored in {}. "The key is a data type of symbol and the value is any valid data type in Javascript" (https://github.com/learn-academy-2023-charlie/Syllabus/blob/main/javascript/objects.md) These can also be an index in an array (https://github.com/learn-academy-2023-charlie/Syllabus/blob/main/javascript/objects.md) Objects usually reflect a 'real-world entity' such as a name, business, etc. (https://javascript.info/object-methods)

4. Method:When a function belongs to an object. "To access an object, a method can use "this" keyword. (https://javascript.info/object-methods)

5. Classes: Classes were created to provide an easier/more efficient way to build around object-oriented programming (https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/). They contain data and behavior. They have their own scope, are reusable, can store any kind of data and require a captial letter at the beginning. 
