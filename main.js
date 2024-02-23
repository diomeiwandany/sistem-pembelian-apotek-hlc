let dbUser = [
    {
        username: 'reza',
        fullName: "Reza Arga",
        itemBuy: [],
    },
    {
        username: 'rizki',
        fullName: "Rizki Dwi Santoso",
        itemBuy: [],
    },
    {
        username: 'bima',
        fullName: "Bima Khansa",
        itemBuy: [],
    },
    {
        username: 'dio',
        fullName: "Dio Meiwandany",
        itemBuy: [],
    }
]

let dbStockObat = [
    ["PARACETAMOL", 50],
    ["IBUPROFEN", 30],
    ["OBH", 70],
    ["TOLAK ANGIN", 100],
    ["HANSAPLAST", 250],
]

function addUser(addUserName, addFullName) {
    for (let i = 0; i < dbUser.length; i++) {
        let perUser = dbUser[i];
        console.log(perUser.username);
        if (addUserName === perUser.username) {
            return `Username tersebut sudah tersedia, mohon diganti`;
        }
        else {
            dbUser.push(
                {
                    username: addUserName,
                    fullName: addFullName,
                    itemBuy: [],
                }
            )
            // console.log(dbUser); // FOR ANALYSIS PURPOSE
            return `User ${addUserName} dengan Nama Lengkap ${addFullName} sudah berhasil dibuat. Selamat belanja!`
        }
    }
}

// console.log(addUser("DUAR", "DUAR NMAX")); // FOR ANALYSIS PURPOSE

function beliObat(userName, namaObat, jumlahObat) {
    result = "";
    for (let i = 0; i < dbUser.length; i++) {
        // console.log(dbUser[i].username);
        let perUser = dbUser[i];
        // console.log(userName, "===", perUser.username);
        if ((userName !== perUser.username) || (!userName)) {
            result = `Username tidak terdaftar atau tidak berlaku. Coba lagi!`;
        }
        else {
            let listBelanja = [];
            let todayDate = new Date().toLocaleDateString();

            listBelanja.push(namaObat, jumlahObat, todayDate);
            perUser.itemBuy.push(listBelanja);
            listBelanja = [];

            for (let j = 0; j < dbStockObat.length; j++) {
                let namaObatStock = dbStockObat[j][0];
                if (namaObatStock === namaObat) {
                    dbStockObat[j][1] -= jumlahObat;
                }
            }

            result = `Belanja ${perUser.username} anda berhasil. Berikut barang belanjaan anda: Nama Obat: ${namaObat} | Jumlah: ${jumlahObat} | Tanggal: ${todayDate} (Format: mm/dd/yyyy)`
            i = dbUser.length;
        }
    }
    return result;
}
// console.log(beliObat("dio", "PARACETAMOL", 20)); // FOR ANALYSIS PURPOSE

// Delete History past 30 Days
// MASIH NGULIK, KALEM