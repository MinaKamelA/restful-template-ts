import schema from '../commands/schema';
import commander from 'commander';

const program = new commander.Command();

program.command('set', 'set the number of tables (routes) in your schema').action(function() {
    schema.set();
    });

program.command('get', 'get the number of tables (routes) in your schema').action(function() {
    schema.get();
    });

program.command('show', 'show the tables (routes) in your schema').action(function() {
    schema.show();
    });

program.command('enter', 'enter the tables (routes) in your schema').action(function() {
    schema.enter();
    });
    
program.parse(process.argv);