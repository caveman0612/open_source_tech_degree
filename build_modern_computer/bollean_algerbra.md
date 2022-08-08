# BOOLEAN LAWS

### COMMUTATIVE LAWS

(x AND y ) = (y AND x)
(x OR y) = (y OR x)

### ASSOCIATIVE LAWS

(x AND (y AND z)) = ((x AND y) AND z)
(x OR (y OR z)) = ((x OR y) OR z)

### DISTRBUTIVE LAWS

(x AND (y OR z)) = (x AND y) OR (x AND z)
(x OR (y AND z)) = (x OR y) AND (x OR z)

### De Morgan LAWS

NOT(x AND y) = NOT(x) OR NOT(y)
NOT(x OR y) = NOT(x) AND NOT(y)

### IDEMPOTENCE LAW

NOT(x) AND NOT(x) = NOT(x)
NOT(x and x) = NOT(x)

### DOUBLE NEEGATION

NOT(NOT(y)) = y

# table to function

| x | y | z | f |
| - | - | - | - |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |  (NOT(x) AND NOT(y) AND Z) OR
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |  (NOT(X) AND Y AND Z) OR
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |  (X AND Y AND NOT(z)) OR
| 1 | 1 | 1 | 1 |  (X AND Y AND Z)

# OTHER CONVERSON

x OR y = NOT(NOT(x) AND NOT(y))

# NAND GATE

| x | y | NAND |
| - | - | - |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

X NAND y = NOT(x AND y)

==NOT(x) = x NAND x==

x AND y = NOT(x NAND y)
==x AND y = (x NAND y) NAND (x NAND y)==

x OR y = NOT(NOT(x) AND NOT(y))
x OR y = NOT((x NAND x) AND (y NAND y))
==x OR y = (((x NAND x) NAND (y NAND y)) NAND ((x NAND x) NAND (y NAND y))) NAND (((x NAND x) NAND (y NAND y)) NAND ((x NAND x) NAND (y NAND y)))==
