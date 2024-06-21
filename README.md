# movie-library

## Deploy locally under dev mode

1. Download and install the following.

- [Node.js](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

2. Add the following content inside `.env` file.

```sh
DATABASE_URL=mongodb://localhost/mybrary
```

2. Execute the following.

```sh
git clone https://github.com/lakbot/movie-library
cd movie-library
npm install
npm run devStart
```