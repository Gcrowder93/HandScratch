DROP TABLE IF EXISTS discs;

CREATE TABLE discs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    {/* flight(turn or fade), price(number) */}
);

CREATE TABLE drinks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    {/* temp(hot or cold), alcoholic(yes or no) */}
);

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    {/* name, rating(number) */}
);

CREATE TABLE pets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    {/* name, age(number) */}
);

CREATE TABLE pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    {/* type, doesevolve(yes or no) */}
);