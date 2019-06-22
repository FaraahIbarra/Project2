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

        },
        apiKeys: {

        }
    }
};

module.exports = config[process.evn.APP_ENV || "local"];