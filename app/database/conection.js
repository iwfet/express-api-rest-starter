import { Sequelize } from "@sequelize/core";
import configUrl from '../infra/database'


class Database {
   constructor(url) {
    this.sequelize = new Sequelize(url, {
      pool: {
        max: 10,
        min: 0,
        idle: 10000,
        adquirir: 30000,
        evict: 2000,
      },
      // utilizar este parametro apenas para conectar no heroku db
      dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
      logging: false,  
    });  
  }

  async getConetion() {
    try {
        await this.sequelize.authenticate();
        console.info("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error)
        throw new Error("Unable to connect to the database:", error)
    }
  }
  getDb(){
    return this.sequelize
  }
  async closeConetion(){
    try {
      await this.sequelize.close();
    } catch (error) {
        throw new Error("Unable to connect to the database:", error)
    }

  }
}

export const database = new Database(configUrl.url)