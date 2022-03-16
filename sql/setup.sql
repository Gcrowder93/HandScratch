DROP TABLE IF EXISTS discs;

CREATE TABLE discs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    flight TEXT NOT NULL,
    price SMALLINT
    {/* flight(turn or fade), price(number) */}
);

CREATE TABLE drinks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    temp TEXT NOT NULL,
    alcoholic TEXT NOT NULL
    {/* temp(hot or cold), alcoholic(yes or no) */}
);

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    rating SMALLINT
    {/* name, rating(number) */}
);

CREATE TABLE pets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    age SMALLINT
    {/* name, age(number) */}
);

CREATE TABLE pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type TEXT NOT NULL,
    doesEvolve TEXT NOT NULL
    {/* type, doesEvolve(yes or no) */}
);