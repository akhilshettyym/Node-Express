/* fs.writeFile() : Writes data to a file. If the file does not exists, it will be created. 
If the file exists, it overwrites the content.
Syntax : fs.writeFile(filePath, data, options, callback;
- filePath : The file path to write to.
- data : The content to write to the file.
- options : Optional. Includes encoding ('utf8'), mode, or flags.
- callback : A function with an err parameter. */
console.log("-------------------------------------------------------------------------------");
const fs = require('fs');
const path = require('path');

const fileName = "b_asyncfs.txt";
const filePath = path.join(__dirname, fileName)
const writeFile = fs.writeFile(filePath, "This is the first comment, updated", 'utf-8',
    (err) => {
        if (err) console.error(err);
        else console.log("File has been saved...");
    });

console.log("Directory " + __dirname);
console.log("Writing into file ..." + writeFile);
console.log("-------------------------------------------------------------------------------");

/* fs.readFile() : Reads the contents of a file asynchronously and returns the data as a buffer or string.
Syntax : const data = fs.readFile(filePath, options, callback);
- filePath : Path of the file to read.
- options : Optional. Encoding ('utf8') to get data as a string.
- callback : A function with an err parameters (err, data).

Use .toString() if working with binary data (Buffer) : e.f., if you need both the raw binary data and its string representaion. */
const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else console.log(data)
});
console.log("-------------------------------------------------------------------------------");

/*  fs.appendFile() : Appends data to a file. If the file does not exists, it creates the file.
Syntax : fs.appendFile(filePath, data, options, callback); */
const appendFile = fs.appendFile(filePath, '\nAppending into a file', 'utf-8', (err) => {
    if (err) console.error(err);
    else console.log("File has been updated...")
});
console.log("Appending into a file... : " + appendFile);
console.log("-------------------------------------------------------------------------------");

/* Delete File (fs.unlink()) : Deletes a file asynchronously.
Syntax : fs.unlink(filePath, callback);
- filePath : The path of the file to delete. */

// const unlink = fs.unlink(filePath, (err) => {
//     if(err) console.error(err);
//     else console.log("File has been deleted...")
// });
console.log("-------------------------------------------------------------------------------");