-- CreateTable
CREATE TABLE "crowdAuthModel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "secretKey" TEXT NOT NULL,
    "profile" JSONB NOT NULL,
    "abeg" JSONB NOT NULL,

    CONSTRAINT "crowdAuthModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "crowdAuthModel_email_key" ON "crowdAuthModel"("email");
