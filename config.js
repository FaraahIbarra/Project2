let config = {
    local: {
        mysql: {
            url: process.env.DB_URL
        },
        apiKeys: {

        }
    },
    prod: {
        mysql: {
            url: process.env.JAWSDB.URL
        },
        apiKeys: {

        }
    }
};

module.exports = config[process.env.APP_ENV || "local"];