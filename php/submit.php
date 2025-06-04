<?php
$host = "localhost";
$user = "root";
$password = ""; // sesuaikan jika ada
$dbname = "rsvp_undangan";

// Buat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Tangkap data dari form
$nama = $_POST['name'];
$jumlah = $_POST['amount'];
$kehadiran = $_POST['attendance'];

// Sesuaikan format jumlah agar sesuai enum
if ($jumlah == '1') $jumlah_str = '1 orang';
elseif ($jumlah == '2') $jumlah_str = '2 orang';
else $jumlah_str = '3 orang';

// Sesuaikan format kehadiran agar sesuai enum
$kehadiran_str = $kehadiran == 'hadir' ? 'hadir' : 'tidak hadir';

// Simpan ke database
$sql = "INSERT INTO tamu (nama, jumlah, kehadiran) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nama, $jumlah_str, $kehadiran_str);

if ($stmt->execute()) {
    echo "<script>
        alert('Terima kasih atas konfirmasi kehadiran Anda!');
        window.location.href = '../index.html'; // naik 1 folder dari /php ke /
    </script>";
}

$stmt->close();
$conn->close();
?>
