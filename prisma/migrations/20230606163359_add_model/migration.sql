-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "desa" TEXT NOT NULL,
    "kode_pos" TEXT NOT NULL,
    "alamat_kantor" TEXT NOT NULL,

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "anak_ke" TEXT NOT NULL,
    "jumlah_saudara" TEXT NOT NULL,
    "pendidikan" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "kondisi" TEXT NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "pegawai" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "akun_email_key" ON "akun"("email");

-- CreateIndex
CREATE UNIQUE INDEX "data_nik_key" ON "data"("nik");
