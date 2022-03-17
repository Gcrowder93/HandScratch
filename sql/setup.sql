DROP TABLE IF EXISTS discs;

CREATE TABLE discs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    flight TEXT NOT NULL,
    price SMALLINT
);

DROP TABLE IF EXISTS drinks;

CREATE TABLE drinks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    temp TEXT NOT NULL,
    alcoholic BOOLEAN
    {/* temp(hot or cold), alcoholic(yes or no) */}
);

DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    rating SMALLINT
    {/* name, rating(number) */}
);

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    age SMALLINT
    {/* name, age(number) */}
);

DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type TEXT NOT NULL,
    doesEvolve TEXT NOT NULL
    {/* type, doesEvolve(yes or no) */}
);