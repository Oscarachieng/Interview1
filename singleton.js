class Database {
  static count = 0;
  constructor(connectionString) {
      this.connectionString = connectionString
  }

  static getInstance(connectionString) {
    if (!this.instance) {
      this.count = this.count + 1
      console.log(this.count)
      this.instance = new Database(connectionString);
    }

    return this.instance;
  }
}

let connection1 = Database.getInstance('postgresqldb1');
let connection2 = Database.getInstance('postgresqldb2');

//the connections are the same
console.log("connection1: "+connection1.connectionString);
console.log("connection2: "+connection2.connectionString);
