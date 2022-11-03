const Judul = document.querySelector('h1');
const Tentang = document.getElementById('tentang');
const Pendidikan = document.getElementById('pendidikan');
const myBtn1 = document.getElementById('btn1');
const myBtn2 = document.getElementById('btn2');
const myBtn3 = document.getElementById('btn3');
const myImg = document.querySelector('div', 'img');    

    function ubah(){
        Judul.innerHTML="Hanif Putra Agusta";
        Tentang.innerHTML="Saya mahasiswa aktif Teknik Informatika ITERA semester 5 dengan kemampuan UI/UX dengan menggunakan figma, bahasa pemrograman yang telah dipelajari C++, PYTHON.";
        Pendidikan.innerHTML=`
        <h3 >Riwayat pendidikan</h3>
        <table id="riwayat" border="2px">
          <tr>
            <th rowspan="2">No</th>
            <th rowspan="2">Nama Sekolah / Universitas</th>
            <th rowspan="2">Lokasi</th>
            <th colspan="2">waktu</th>
          </tr>
          <tr>
            <th>mulai</th>
            <th>selesai</th>
          </tr>
          <tr>
            <td>1</td>
            <td>SMPN 1 Bengkulu Selatan</td>
            <td>Bengkulu Selatan</td>
            <td>2014</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SMAS TRI SUKSES NATAR</td>
            <td>Lampung Selatan</td>
            <td>2017</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Institut Teknologi Sumatera</td>
            <td>Lampung Selatan</td>
            <td>2020</td>
            <td>selesai</td>
          </tr>
        </table>
      </div>
  `
    }

    function photo(){
        myImg.innerHTML='<img src="fotohanif.jpg" alt="footo saya" title="saya">';
    }
    
    function gaya(){
        var styles = `html{margin: 0;padding: 0;}
        body{
            background-color:blue;
        }
        img{
            width: 100px;
        };`
    
        var styleSheet = document.querySelector('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }


    myBtn1.addEventListener("click", ubah);
    myBtn2.addEventListener("click", photo);
    myBtn3.addEventListener("click", gaya);