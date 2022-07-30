INSERT INTO department (name)
VALUES
    ('Finance'),
    ('Legal'),
    ('Art'),
    ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Financial Advisor', '130000', 1),
    ('Accountant', '120000', 1),
    ('Legal Team Lead', '180000', 2),
    ('Lawyer', '150000', 2),
    ('Art Director', '100000', 3),
    ('Artist', '100000', 3),
    ('Graphic Designer', '100000', 3),
    ('Web Designer', '150000', 3),
    ('Advertising Lead', '100000', 4),
    ('Social Media Strategist', '100000', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Frank', 'Okay', 1, NULL),
    ('John', 'Doe', 2, 1),
    ('Mark', 'Spark', 2, 1),
    ('Angel', 'Green', 3, NULL),
    ('Lisa', 'Lou', 4, 3),
    ('Anike', 'Smith', 4, 3),
    ('Autumn', 'Summer', 5, NULL),
    ('Ben', 'Brown', 6, 5),
    ('Dina', 'Saur', 6, 5),
    ('Keith', 'White', 7, 5),
    ('Kelly', 'Wacker', 8, 5),
    ('Ciara', 'Klein', 9, NULL),
    ('Max', 'Frank', 10, 9);
