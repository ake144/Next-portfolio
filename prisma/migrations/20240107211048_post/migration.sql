/*
  Warnings:

  - You are about to drop the `Porojects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `blogPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Porojects";

-- DropTable
DROP TABLE "blogPosts";

-- CreateTable
CREATE TABLE "akeja_blogpost" (
    "id" SERIAL NOT NULL,
    "topic" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(200) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "akeja_blogpost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akeja_react" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(244) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(100) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "akeja_react_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "akeja_blogpost_id_key" ON "akeja_blogpost"("id");
