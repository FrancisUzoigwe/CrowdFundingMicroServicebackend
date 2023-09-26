/*
  Warnings:

  - Made the column `email` on table `crowdModel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "crowdModel" ADD COLUMN     "abeg" JSONB,
ADD COLUMN     "profile" JSONB,
ADD COLUMN     "secretKey" TEXT,
ADD COLUMN     "token" TEXT,
ADD COLUMN     "verified" BOOLEAN,
ALTER COLUMN "email" SET NOT NULL;
