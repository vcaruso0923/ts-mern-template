import {MongoClient} from 'mongodb'

const Db = process.env.ATLAS_URI

const client = new MongoClient(Db || '')

let _db

export const dbo = {
    connectToServer: async function (callback) {
        try {
            await client.connect()
        } catch (e) {
            console.error(e)
        }

        _db = client.db('ts-mern-template-db')

        return _db === undefined ? false : true
    },
    getDb: function () {
        return _db
    }
}
