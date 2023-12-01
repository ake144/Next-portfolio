-- CreateTable
CREATE TABLE "blogPosts" (
    "id" BIGSERIAL NOT NULL,
    "topic" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(200) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "blogPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Porojects" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(244) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(100),
    "image" TEXT NOT NULL,

    CONSTRAINT "Porojects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogPosts_id_key" ON "blogPosts"("id");
