/* Exception Handling: 

try - where exceptions can occur
catch - where you handle the exception
finally where the code will always execute regardless of the result of the try-catch block
throw - a statement that explicitly throws an exception. 
*/

class Exception {

    static validate(number: number): void {

        if(number < 0) {
            throw new Error("Number must be positive");
        }
    }

    static main(): void {
        try {
              this.validate(1);

        }
        catch (e: any) {
            console.log("Got an exception: " + e.message);
        }

        try {
            const number = [1, 2, 3, 4, 5]; 
            console.log(number[9].toString());
            console.log("Accessed index exist so you are seeing this message"); /*This message 
            is only printed if above line is executed successfully,  if there is an error in above
            line then this message will not be printed and control will be transferred to catch block */
        }
        catch (e: any) {
            console.log(`An error occured in the array index: ${e.message}`);
        }

        try {
            const a = 10;
            const b = 20;
            const c = a / b;
        } catch (e: any) {
            console.log("An error occurred: " + e.message);
        } finally {
            console.log(" This block will always execute regardless of the result of the try-catch block");
        }
    }
}


Exception.main()