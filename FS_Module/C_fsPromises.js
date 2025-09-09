/* Usage of fs.promises - 
Use import with fs/promises as in 
const fs = require("fs/promises"), Now we can just use fs...
 */

const fs = require("fs");
const path = require("path");

const fileName = "c_fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// .then() ensures clear chaining of multiple/asynchronous operations.
// catch() centralizes error handling, making it easy to debug and manage failures.
const file = __dirname;
fs.promises
    .readdir(file)
    .then((data) => console.log(data))
    .catch((err) => console.log(data));

const filePath1 = __dirname;

fs.promises
    .readdir(filePath1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

/* Create (Write a file): fs.promises.writeFile
Create or overwrites a file with specified content.
The writeFile() method writes data to a file asynchronously.
If the file does not exist, it is created.
If it exists, its content is replaced.

Syntax: fs.promises.writeFile(path, data, options).then().catch();
- path: path to the file.
- data: Content to write.
- Options: Encoding (útf-8), flags, etc. (optional). */
fs.promises.writeFile(filePath, "This is the initial data",
    "utf-8")
    .then(console.log("File created successfully !"))
    .catch((err) => console.log(err));

/* Read (Read a file): readFile()
The readFile() method reads data from a file.
It can return the data as a Buffer or string based on the encoding provided.

Syntax: fs.promises.readFile(path, options).then(data)=>...).catch(err => ...);
- path: Path to the file.
- Options: Encoding (útf-8) or no encoding for binary data.
*/
fs.promises
.readFile(filePath, "utf-8")
.then((data) => console.log(data))
.catch((err) => console.log("Error reading | file:", err));

// Append into a file, Adds to the next line.
fs.promises.appendFile(filePath, "\nThis is updated data",
    "utf-8")
    .then(console.log("File created successfully !"))
    .catch((err) => console.log(err));


// Unlink or deleting a created file
// fs.promises
// .unlink(filePath)
// .then(console.log("File deleted successfully !"))
// .catch((err) => console.log("Error deleting file:", err));