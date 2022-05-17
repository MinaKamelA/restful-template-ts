import ConfigStore from 'configstore';
import pkg from '../../package.json';

class SchemaManager {
    config: ConfigStore;
    constructor() {
        this.config = new ConfigStore(pkg.name);
    }

    setNumberOfTables(number: String) {
        this.config.set('numberOfTables', number);
        return number;
    }

    getNumberOfTables() {
        const number = this.config.get('numberOfTables');
        if(!number) {
            throw new Error('Number Of Tables is not set');
        }
        return number;
    }

    enterTablesNames(tablesNames: String[]) {
        this.config.set('tablesNames', tablesNames);
        return tablesNames;
    }

    showTablesNames() {
        const tablesNames = this.config.get('tablesNames');
        if(!tablesNames) {
            throw new Error('Tables Names are not set');
        }
        return tablesNames;
    }
}

export default SchemaManager;