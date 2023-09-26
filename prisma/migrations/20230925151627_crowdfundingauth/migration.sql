-- CreateTable
CREATE TABLE "crowdModel" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "token" TEXT,
    "verified" BOOLEAN,
    "secretKey" TEXT,
    "profile" JSONB,
    "abeg" JSONB,

    CONSTRAINT "crowdModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "crowdModel_email_key" ON "crowdModel"("email");
