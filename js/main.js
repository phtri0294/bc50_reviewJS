// <!-- ==================================== -->
// <!-- Bài tập 1: Tính tiền lương nhân viên -->
document.getElementById('btnTinhTienLuong').onclick = function () {
    // INPUT: luong1Ngay; soNgayLam
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;

    // Check input
    console.log('Lương 1 ngày: ', luong1Ngay);
    console.log('Số ngày làm: ', soNgayLam);

    // OUTPUT: ketQuaTienLuong
    var ketQuaTienLuong = "";

    // PROGRESS
    ketQuaTienLuong = luong1Ngay * soNgayLam;

    // fomat VND
    var currentformat = new Intl.NumberFormat("vn-VN");

    // USER DISPLAY:
    document.getElementById('tienLuong').innerHTML = currentformat.format(ketQuaTienLuong) + ' VND';
};


// <!-- ==================================== -->
// <!-- Bài tập 2: Tính giá trị trung bình -->
document.getElementById('btnTinhTrungBinh').onclick = function () {
    // INPUT: giaTri1; giaTri2; giaTri3; giaTri4; giaTri5
    var giaTri1 = document.getElementById('giaTri1').value * 1;
    var giaTri2 = document.getElementById('giaTri2').value * 1;
    var giaTri3 = document.getElementById('giaTri3').value * 1;
    var giaTri4 = document.getElementById('giaTri4').value * 1;
    var giaTri5 = document.getElementById('giaTri5').value * 1;

    // Check input
    // console.log('Giá trị 1: ', giaTri1);
    // console.log('Giá trị 2: ', giaTri2);
    // console.log('Giá trị 3: ', giaTri3);
    // console.log('Giá trị 4: ', giaTri4);
    // console.log('Giá trị 5: ', giaTri5);

    // OUTPUT: ketQuaTrungBinh
    var ketQuaTrungBinh = "";

    // PROGRESS
    ketQuaTrungBinh = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5;

    // USER DISPLAY:
    document.getElementById('trungBinh').innerHTML = ketQuaTrungBinh;
};


// <!-- ==================================== -->
// <!-- Bài tập 3: Quy đổi tiền -->
document.getElementById('btnQuyDoi').onclick = function () {
    // INPUT: soLuongUSD; USDtoVND
    var soLuongUSD = document.getElementById('soLuongUSD').value;

    const USDtoVND = 23500;

    // Check input
    // console.log('Số lượng USD: ', soLuongUSD);

    // OUTPUT: ketQuaQuyDoi
    var ketQuaQuyDoi = "";

    // PROGRESS
    ketQuaQuyDoi = soLuongUSD * USDtoVND;

    // fomat VND
    var currentformat = new Intl.NumberFormat("vn-VN");

    // USER DISPLAY:
    document.getElementById('quyDoi').innerHTML = currentformat.format(ketQuaQuyDoi) + ' VND';
};


// <!-- ==================================== -->
// <!-- Bài tập 4: Tính diện tích, chu vi hình chữ nhật -->
document.getElementById('btnTinhToan').onclick = function () {
    // INPUT: chieuDai; chieuRong
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;

    // Check input
    // console.log('Chiều dài: ', chieuDai);
    // console.log('Chiều rộng: ', chieuRong);

    // OUTPUT: dienTich; chuVi
    var dienTich = "";
    var chuVi = "";

    // PROGRESS
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;

    // USER DISPLAY:
    document.getElementById('dienTich').innerHTML = 'Diện tích: ' + dienTich + ' m&#178';
    document.getElementById('chuVi').innerHTML = 'Chu vi: ' + chuVi + ' m';
};


// <!-- ==================================== -->
// <!-- Bài tập 5: Tính tổng 2 ký số -->
document.getElementById('btnTinhTong').onclick = function () {
    // INPUT: soNguyenDuong; hangChuc; hangDonVi
    var soNguyenDuong = document.getElementById('soNguyenDuong').value * 1;

    var hangChuc = '';
    var hangDonVi = '';

    // Check input
    // console.log('Số nguyên dương 2 chữ số: ', soNguyenDuong);

    // OUTPUT: tinhTong2KySo; 
    var tinhTong2KySo = "";

    // PROGRESS
    hangDonVi = soNguyenDuong % 10;
    hangChuc = (soNguyenDuong - hangDonVi) / 10;
    tinhTong2KySo = hangChuc+hangDonVi;

    // USER DISPLAY:
    document.getElementById('tinhTong2KySo').innerHTML = 'Tổng 2 ký số: ' + tinhTong2KySo;
};