CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "url" VARCHAR NOT NULL,
  "category_id" INT REFERENCES "category"
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('misc');