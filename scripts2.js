// alert("Xin chào các bạn đến với khóa học JavaScript cơ bản!");
// var res = confirm("Bạn có đồng ý tiếp tục không?");
// console.log(res);

// var res = prompt("Nhập n");
// console.log(res);

// setTimeout(function() {
//     console.log("Hello after 3 seconds");
// }, 3000);

// setInterval(function() {
//     console.log("Hello every 2 seconds");
// }, 2000);

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.indexOf("Nam")); // 18
// console.log(myString.indexOf("Tuấn")); // -1
// console.log(myString.indexOf("Tôi")); // 23
// console.log(myString.indexOf("tuổi")); // 38

// console.log(myString.lastIndexOf("Nam")); 
// console.log(myString.lastIndexOf("Tuấn"));
// console.log(myString.lastIndexOf("Tôi"));
// console.log(myString.lastIndexOf("tuổi"));

// var number = 5;
// switch (number) {
//     case 0:
//         console.log("number = 0");
//         break;
//     case 1:
//         console.log("number = 1");
//         break;
//     default:
//         console.log("khong thoa man");
//         break;
// }

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(`Hàng ${i} Cột ${j}`);
//     }
// }

// var infoUser = {
//     name: "ThongLV",
//     age: 18
// };

// for (var key in infoUser) {
//     console.log(`${key} : ${infoUser[key]}`);
// }

//var list = ["HTML5", "CSS3", "JavaScript", "ReactJS"];

// console.log(list);
// console.log(list.length);

// for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// for (var item of list) {
//     console.log(item);
// }

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// var list = ["HTML5", "CSS3", "JavaScript", "ReactJS"];
// var i = 0;
// while (i < list.length) {
//     console.log(list[i]);
//     i++;
// }

// var i = 20;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// for (var i = 1; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         console.log("Vong lap bi dung.");
//         break;
//     }   
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// function tong()
// {
//     console.log(arguments);
//     let tong = 0;
//     for (const item of arguments) {
//         tong += item;
//     }
//     return tong;
// }
//     var ketQua = tong(10,20,30,40, 50, 60);
//     console.log(ketQua);

// var tong = function()
// {
//     console.log(arguments);
//     let tong = 0;
//     for (const item of arguments) {
//         tong += item;
//     }
//     return tong;
// }
//     var ketQua = tong(10,20,30,40, 50, 60);
//     console.log(ketQua);

//VD1:
// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tongsoChan = (array) => {
//     let tong = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             tong += array[i];
//         }
//     }
//     return tong;
// }

// const ketQua = tongsoChan(mang);
// console.log(ketQua);

//VD2:
// const bieuThuc = (n) => {
//     let result = 0;

//     for (let i = 1; i <= n; i++) {
//         result += i/n;
//     }
//     return result;
// }
// let n;
// do {
//     n = parseInt(prompt("Nhập số n: ")); 
//     console.log(n);
//     if (n <= 0) {
//         console.log("Vui lòng nhập số lớn hơn 0");
        
//     }else {
//         const result = bieuThuc(n);
//         console.log(result);
//     }
// } while (n <= 0);

//Try-Catch
//const a = 10;
// try {
//     console.log("a = " + a);
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("Khối finally luôn được thực thi");
// }

//VD array nang cao
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let sum = 0;
    // numbers.forEach((item) => {
    //     sum += item;
    //     console.log(item);
    // });
    // console.log(sum);
    
    const monHoc = [
        { 
          ten: "Toan",
          diem: 8.6 
        },
        { 
          ten: "Ly",
          diem: 9.2
        },
        { 
          ten: "Hoa",
          diem: 8.5
        },
        { 
          ten: "Tin",
          diem: 7.8 
        },
        { 
          ten: "Tin",
          diem: 8 
        },
    ]

    // const hocSinhGioi = monHoc.every((item) => {
    //     return item.diem >= 8;
    // });

    // if (hocSinhGioi === true) {
    //     console.log("Học sinh giỏi");
    // } else {
    //     console.log("Học sinh không giỏi");
    // }

    // const oLaiLop = monHoc.some((item) => {
    //     return item.diem < 4;
    // });

    // if (oLaiLop === true) {
    //     console.log("Học sinh ở lại lớp");
    // } else {
    //     console.log("Học sinh không ở lại lớp");
    // }

    // const monTin = monHoc.find((item) => {
    //     return item.ten === "Tin";
    // });

    // console.log(monTin);
    // console.log(monTin.diem);

    // const monSinh = monHoc.find((item) => {
    //     return item.ten === "Sinh";
    // });

    // console.log(monSinh);

    // const monTin = monHoc.filter((item) => {
    //     return item.ten === "Tin";
    // });

    // console.log(monTin);

    // console.log(monHoc);

    // const mangMoi = monHoc.map((item) => {
    //     return item;
    // });

    // console.log(mangMoi);

    // const numbers = [1, 2, 3, 4];

    // const sum = numbers.reduce((total, item) => {
    //     console.log(total);
    //     console.log(item);
    //     console.log("----");
    //     return total + item;
    // }, 5);
    // console.log(sum);
    