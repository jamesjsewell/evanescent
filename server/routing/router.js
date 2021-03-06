const express = require("express")

// initializes main router
const apiRoutes = express.Router()

// import routes
const authRoutes = require("./routes/authRoutes.js")
const envRoutes = require("./routes/envRoutes.js")
const userProfileRoutes = require("./routes/userProfileRoutes.js")
const formValidationRoutes = require("./routes/formValidationRoutes.js")

// sets subroutes of the main api route
apiRoutes.use("/auth", authRoutes)
apiRoutes.use("/env", envRoutes)
apiRoutes.use("/user", userProfileRoutes)
apiRoutes.use("/forms", formValidationRoutes)

module.exports = apiRoutes
