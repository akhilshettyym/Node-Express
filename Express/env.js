// Manual validation of Environment variables
// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// Validation of env variables using ZOD
import { z, ZodError } from 'zod';


const portSchema = z.coerce.number().min(1).max(6900).default(3000);
export const PORT = portSchema.parse(process.env.PORT);

// const ageSchema = z.number().min(18).max(60).int();
// const userAge = 19;

// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);

// SAFE PARSE
// const { data, error, success } = ageSchema.safeParse(userAge);
// console.log(data);
// console.log(error);
// console.log(success);

// try {
//     const parsedUserAge = ageSchema.parse(userAge);
//     console.log(parsedUserAge);
// } catch(error) {
//     if(error instanceof ZodError) {
//         // Instance is JS operator used to check if an object is an instance of a specific class or constructor
//         console.log(error.issues[0].message);
//     } else {
//         console.log("Unexpected error : ", error);
//     }
// }