const express = require("express");
const path = require("path");
const { mongooseConnect } = require("./config/dbConnection");
const loggerReqRes = require("./middlewares/loggerReqRes");
const staticRouter = require("./routes/staticRoutes");
const userRoute = require("./routes/UserRoute");
const cookieParser = require("cookie-parser");
const { authenticateUser, checkAuthenticationOnly } = require("./middlewares/authenticateUser");
const urlRoute = require("./routes/urlRoute");

const PORT = 8000;
const app = express();

// Define gloabl variables using app.locals
app.locals.appName = "Authentication";
app.locals.footerText = "Copyright 2025";

// Configuration for views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// DB Connection
mongooseConnect("mongodb://127.0.0.1:27017/authentication")
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error", err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerReqRes("log.txt"));
app.use(cookieParser());

// Routes
app.use("/url", authenticateUser, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuthenticationOnly, staticRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
