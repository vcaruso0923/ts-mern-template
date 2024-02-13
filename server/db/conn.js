const {MongoClient} = require('mongodb')

const Db = process.env.ATLAS_URI || 'mongodb://localhost/ts-mern-template-db'

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
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
