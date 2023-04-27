const express = require("express")
const { getRegisters,
     postRegisters,
      updateRegisters, 
      deleteRegisters,
      getOneRegisters
        } = require("../controllers/Controller")

const Router = express.Router()
Router.route("/").get(getRegisters).post(postRegisters);
Router.route("/login").post(postRegisters);
Router.route("/:id").put(updateRegisters).delete(deleteRegisters).get(getOneRegisters);
module.exports = {Router};