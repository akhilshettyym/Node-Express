/* fs.writeFileSync() : Writes data to a file. If the file does not exists, it will be created. 
If the file exists, it overwrites the content.
Syntax : fs.writeFilesync(filePath, data, options);
- filePath : The file path to write to.
- data : The content to write to the file.
- options : Optional. Includes encoding ('utf8'), mode, or flags. */
console.log("-------------------------------------------------------------------------------");
const fs = require('fs');
const path = require('path');

const fileName = "a_syncfs.txt";
const filePath = path.join(__dirname, fileName)
const writeFile = fs.writeFileSync(filePath, "This is the first comment, updated", 'utf-8');

console.log("Directory " + __dirname);
console.log("Writing into file ..." + writeFile);
console.log("-------------------------------------------------------------------------------");

/* fs.readFileSync() : Reads a file's content and returns it as a string or Buffer.
Syntax : const data = fs.readFileSync(filePath, options);
- filePath : Path of the file to read.
- options : Optional. Encoding ('utf8') to get data as a string.

Use .toString() if working with binary data (Buffer) : e.f., if you need both the raw binary data and its string representaion. */
const data = fs.readFileSync(filePath, 'utf-8')
console.log("Printing data : " + data);
console.log("-------------------------------------------------------------------------------");

/*  fs.appendFileSync() : Appends data to a file. If the file does not exists, it creates the file.
Syntax : fs.appendFileSync(filePath, data, options);
- filePath : File path to append to.
- data : Content to add to the file.
- Options : Optional. Encoding options ('utf-8). */
const appendFile = fs.appendFileSync(filePath, '\nAppending into a file', 'utf-8');
console.log("Appending into a file... : " + appendFile);
console.log("-------------------------------------------------------------------------------");

/* Rename file (fs.renameSync) : Renames a file from one name to another.
Syntax : fs.renameSync(oldPath, newPath);
- oldPath : Current file path.
- newPath : New file path or name. */
const newUpdatedFile = "a_UpdatedSyncfs.txt";
const newFilePath = path.join(__dirname, newUpdatedFile);
const renameFile = fs.renameSync(filePath, newFilePath);
console.log("Renaming file :" + renameFile);
console.log("-------------------------------------------------------------------------------");

/* Delete File (fs.unlinkSync()) : Deletes a file by its path.
Syntax : fs.unlinkSync(filePath);
- filePath : The path of the file to delete. */

// const unlink = fs.unlinkSync(filePath);
// console.log("Unlinking file ..." + unlink);
// console.log("-------------------------------------------------------------------------------");