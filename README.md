# ts-express-vue-mocha

## Docker Developmnent Environment
Docker will launch 3 seperate services that depend on eachother (Express, Vue, Postgres). Run `npm run docker` to start them all concurrently.

`.env` file should include:
```
APP_PORT
DATABASE_URL
```