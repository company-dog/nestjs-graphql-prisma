CREATE TABLE "User" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name"  TEXT,
  "email" TEXT    NOT NULL UNIQUE
);
CREATE TABLE "Post" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "title"     TEXT    NOT NULL,
  "content"   TEXT,
  "published" BOOLEAN DEFAULT false,
  "authorId"  INTEGER REFERENCES "User"
(id)
);