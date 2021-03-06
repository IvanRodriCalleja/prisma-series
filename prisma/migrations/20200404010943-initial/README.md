# Migration `20200404010943-initial`

This migration has been generated by irodriguezagentero at 4/4/2020, 1:09:43 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Serie" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL,
    "language" text  NOT NULL ,
    "title" text  NOT NULL ,
    "updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Actor" (
    "id" SERIAL,
    "name" text  NOT NULL ,
    "serieId" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Image" (
    "actorId" integer   ,
    "characterId" integer   ,
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "episodeId" integer   ,
    "id" SERIAL,
    "medium" text  NOT NULL ,
    "original" text  NOT NULL ,
    "serieId" integer   ,
    "updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Character" (
    "actorId" integer  NOT NULL ,
    "id" SERIAL,
    "name" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Season" (
    "id" SERIAL,
    "seasonNumber" integer  NOT NULL ,
    "serieId" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Episode" (
    "id" SERIAL,
    "seasonId" integer  NOT NULL ,
    "title" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE  INDEX "Actor.serieId" ON "public"."Actor"("serieId")

CREATE  INDEX "Image.serieId" ON "public"."Image"("serieId")

CREATE  INDEX "Image.actorId" ON "public"."Image"("actorId")

CREATE  INDEX "Image.characterId" ON "public"."Image"("characterId")

CREATE  INDEX "Image.episodeId" ON "public"."Image"("episodeId")

CREATE UNIQUE INDEX "Image_serieId" ON "public"."Image"("serieId")

CREATE UNIQUE INDEX "Image_actorId" ON "public"."Image"("actorId")

CREATE UNIQUE INDEX "Image_characterId" ON "public"."Image"("characterId")

CREATE UNIQUE INDEX "Image_episodeId" ON "public"."Image"("episodeId")

CREATE  INDEX "Character.actorId" ON "public"."Character"("actorId")

CREATE UNIQUE INDEX "Character_actorId" ON "public"."Character"("actorId")

CREATE  INDEX "Season.serieId" ON "public"."Season"("serieId")

CREATE  INDEX "Episode.seasonId" ON "public"."Episode"("seasonId")

ALTER TABLE "public"."Actor" ADD FOREIGN KEY ("serieId")REFERENCES "public"."Serie"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Image" ADD FOREIGN KEY ("serieId")REFERENCES "public"."Serie"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Image" ADD FOREIGN KEY ("actorId")REFERENCES "public"."Actor"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Image" ADD FOREIGN KEY ("characterId")REFERENCES "public"."Character"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Image" ADD FOREIGN KEY ("episodeId")REFERENCES "public"."Episode"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Character" ADD FOREIGN KEY ("actorId")REFERENCES "public"."Actor"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Season" ADD FOREIGN KEY ("serieId")REFERENCES "public"."Serie"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Episode" ADD FOREIGN KEY ("seasonId")REFERENCES "public"."Season"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200404010943-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,94 @@
+datasource db {
+    provider = "postgresql"
+    url      = env("DATABASE_URL")
+}
+
+generator client {
+    provider = "prisma-client-js"
+}
+
+// model Post {
+//   id        Int      @default(autoincrement()) @id
+//   createdAt DateTime @default(now())
+//   title     String
+//   content   String?
+//   published Boolean  @default(false)
+//   author    User     @relation(fields: [authorId], references: [id])
+//   authorId  Int         @@index([authorId], name: "authorId")
+// }
+
+// model Profile {
+//   id   Int      @default(autoincrement()) @id
+//   bio  String?
+//   user User     @relation(fields: [userId], references: [id])
+//   userId Int    @unique
+// }
+
+// model User {
+//   id      Int      @default(autoincrement()) @id
+//   email   String   @unique
+//   name    String?
+//   Post    Post[]
+//   Profile Profile?
+// }
+
+
+model Serie {
+    id              Int             @id @default(autoincrement())
+    title           String
+    language        String
+    createdAt       DateTime        @default(now())
+    updatedAt       DateTime        @updatedAt
+    image           Image  
+    actors          Actor[]
+    seasons         Season[]
+}
+
+model Actor {
+    id              Int             @id @default(autoincrement())
+    name            String
+    image           Image 
+    serie           Serie           @relation(fields: [serieId], references: [id])
+    serieId         Int             @@index([serieId])
+    character       Character
+}
+
+model Image {
+    id              Int             @id @default(autoincrement())
+    createdAt       DateTime        @default(now())
+    updatedAt       DateTime        @updatedAt
+    medium          String
+    original        String
+    serie           Serie?          @relation(fields: [serieId], references: [id])
+    serieId         Int?            @@index([serieId])
+    actor           Actor?          @relation(fields: [actorId], references: [id])
+    actorId         Int?            @@index([actorId])
+    character       Character?      @relation(fields: [characterId], references: [id])
+    characterId     Int?            @@index([characterId])
+    episode         Episode?        @relation(fields: [episodeId], references: [id])
+    episodeId       Int?            @@index([episodeId])
+}
+
+model Character {
+    id              Int             @id @default(autoincrement())
+    name            String
+    image           Image
+    actor           Actor           @relation(fields: [actorId], references: [id])
+    actorId         Int             @@index([actorId])
+}
+
+model Season {
+    id              Int             @id @default(autoincrement())
+    seasonNumber    Int
+    serie           Serie           @relation(fields: [serieId], references: [id])
+    serieId         Int             @@index([serieId])
+    episodes        Episode[]
+}
+
+model Episode {
+    id              Int             @id @default(autoincrement())
+    title           String
+    image           Image
+    season          Season          @relation(fields: [seasonId], references: [id])
+    seasonId        Int             @@index([seasonId])
+}
```


