-- CreateTable
CREATE TABLE "Festa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "urlLocation" TEXT NOT NULL,
    "localDescription" TEXT NOT NULL,
    "musicStyle" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Festa_pkey" PRIMARY KEY ("id")
);
