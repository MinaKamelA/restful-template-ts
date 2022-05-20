import SchemaManager from "../lib/SchemaManager";
import inquirer from "inquirer";
import colors from "colors";
import isRequired from "../utils/validation";

const schemaManager = new SchemaManager();
const schema = {
    async set(){
         const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'number',
                message: 'Enter the number of tables (routes) in your schema: '.green,
                validate: isRequired
            }
            ]); 
            const number = schemaManager.setNumberOfTables(input.number);
            if(number) {
                console.log('Number of tables (routes) in your schema is set to: '.bgGreen.black, number);
            }
        },
    get(){ console.log('hello from get'); },
    show(){ console.log('hello from show'); },
    enter(){ console.log('hello from enter'); }
}

export default schema;