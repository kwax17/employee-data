DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  departmemt_id INT,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  CONSTRAINT fk_department FOREIGN KEY (role_id) REFERENCES department(id) ON DELETE SET NULL
);