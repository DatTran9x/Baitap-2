// Các ô có thuộc tính position là absolute.
// Sử dụng các thuộc tính left và top để quy định vị trí cho các ô
// Dùng mảng 2 chiều để lưu giá trị của các ô



class XY(x,y){
    x;
    y;

}

function drawBoard(){
    for (let i = 0; i < 40; i++) {
        board += "<tr>"
        for (let j=0;j<40;j++){
            board += "<th>"+ XY(i,j) +"</th>"
        }
        board += "</tr>"
    }
}