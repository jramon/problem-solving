const Model = function (config) {
//implement
    for (const property in config) {
        const current = config[property];
        this[property] = current;
        console.log(`${property}: ${config[property]}`)
    }
    this.set = function (name, value) {
        this[name] = value
    }
    this.get = function (name) {
        //console.log("get " + this[name])
        if (this.has(name)) {
            return this[name];
        } else {
            throw new Error("person does not have the property " + name);
        }
    }
    this.has = function(name) {
        if (this.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }
}



function driver() {
    const person = new Model({ name: 'Ramon', age: 36 })
    person.set('address', 'New York' )
    person.get('address')
    person.has('address')

    // print Ramon here:
    console.log(person)
    console.log("GET " + person.get('hi'))
    console.log("HAS " + person.has('address'))
}

driver();