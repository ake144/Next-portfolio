/*
  Warnings:

  - You are about to drop the column `name` on the `akeja_react` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `akeja_react` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `topic` to the `akeja_react` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "akeja_react" DROP COLUMN "name",
ADD COLUMN     "topic" VARCHAR(255) NOT NULL,
ALTER COLUMN "link" SET DATA TYPE VARCHAR(200);

-- CreateIndex
CREATE UNIQUE INDEX "akeja_react_id_key" ON "akeja_react"("id");
