document.getElementById("reportForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const location = document.getElementById("location").value;
    const issue = document.getElementById("issue").value;
  
    if (!location || !issue) {
      alert("Mohon lengkapi semua kolom!");
      return;
    }
  
    // Kirim data ke Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbxFnwSJ2Dfm-OZNQSAyUwOk--SM3dGmDL9Dhd9BirX6XfckQt19uq8Sx2857_t74Eua/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lokasi: location,
        masalah: issue
      }),
    });
  
    // Tampilkan konfirmasi
    document.getElementById("result").textContent =
      `✅ Laporan berhasil dikirim untuk: ${location}. Terima kasih atas kontribusimu!`;
  
    // Reset form
    document.getElementById("reportForm").reset();
  });
  