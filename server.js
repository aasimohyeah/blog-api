const app = require("./app");
const port = 7000;

const server = app.listen(port, () => {
  console.log(`App running on the port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION. Shutting down application...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); //0-success, 1-uncalled exception
  });
});
