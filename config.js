module.exports = {
    type: "mysql",
    hostname: "localhost",
    login: "m1311_shortener",
    password: "ShortPass1",
    database: "m1311_shortenerdb",
    port: 3306,
    logFilePath: "./logs/logs.txt",
    testRoutes: ["/api/v1/urls/"]
};
