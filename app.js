import express, { request, response } from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((request, response) => {
  response.send("Hello employees!");
});
app.route("/employees").get((request, response) => {
  response.send(employees);
});

app.route("/employees/random").get((request, response) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  response.send(employees[randomIndex]);
});
app.route("/employees/:id").get((request, response) => {
  const { id } = request.params;
  const employee = employees.find((e) => e.id === +id);
  if (!employee) {
    return response.status(404).send("employ not find");
  }
  response.send(employee);
});
