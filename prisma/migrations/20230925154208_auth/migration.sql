/*
  Warnings:

  - You are about to drop the column `abeg` on the `crowdModel` table. All the data in the column will be lost.
  - You are about to drop the column `profile` on the `crowdModel` table. All the data in the column will be lost.
  - You are about to drop the column `secretKey` on the `crowdModel` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `crowdModel` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `crowdModel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "crowdModel" DROP COLUMN "abeg",
DROP COLUMN "profile",
DROP COLUMN "secretKey",
DROP COLUMN "token",
DROP COLUMN "verified";
