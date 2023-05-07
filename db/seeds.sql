INSERT INTO department (name)
VALUES ("product"),
       ("sales"),
       ("marketing"),
       ("engineering");
       
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 250000, 1),
       ("Sales Manager", 125000, 2),
       ("Lead Developer", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Smith", 2),
       ("Sally", "Gordon", 1, 2),
       ("Miles", "Jordan", 3, 1);