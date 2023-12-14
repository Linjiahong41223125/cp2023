var tipuesearch = {"pages": [{'title': 'about', 'text': 'https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'about.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'w6', 'text': '台灣國旗 \n 程式如下 \n #include <stdio.h> #include <gd.h> #include <math.h> \n void draw_roc_flag(gdImagePtr img); void draw_white_sun(gdImagePtr img, int x, int y, int size, int color); \n int main() {  // width 3: height 2  int width = 1200;  // 國旗長寬比為 3:2  int height = (int)(width*2.0 / 3.0); \n gdImagePtr img = gdImageCreateTrueColor(width, height);  gdImageAlphaBlending(img, 0); \n draw_roc_flag(img); \n FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");  if (outputFile == NULL) {  fprintf(stderr, "Error opening the output file.\\n");  return 1;  }  gdImagePngEx(img, outputFile, 9);  fclose(outputFile);  gdImageDestroy(img);  return 0; } \n void draw_roc_flag(gdImagePtr img) {  int width = gdImageSX(img);  int height = gdImageSY(img);  int red, white, blue;  // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處  int center_x = (int)(width/4);  int center_y = (int)(height/4);  // gdImageFilledEllipse 需以長寬方向的 diameter 作圖  // 由於中央白日圓形的半徑為青天寬度的 1/8  // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8  // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8  int sun_radius = (int)(width/8);  // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑  int white_circle_dia = sun_radius;  // 中央藍色圓形半徑為中央白日的 1又 2/15  int blue_circle_dia = white_circle_dia + white_circle_dia*2/15;  // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值  red = gdImageColorAllocate(img, 255, 0, 0); // 紅色  white = gdImageColorAllocate(img, 255, 255, 255); // 白色  blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色  // 根據畫布大小塗上紅色長方形區域  gdImageFilledRectangle(img, 0, 0, width, height, red);  // 青天面積為整面國旗的 1/4, 也是採用長方形塗色  gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);  // 先設法以填色畫出六個白色堆疊菱形  draw_white_sun(img, center_x, center_y, sun_radius, white);  // 利用一個藍色大圓與白色小圓畫出藍色環狀  gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);  gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white); \n } \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {  // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位  // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度  float deg = M_PI/180;  // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度  // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小  float sr = sun_radius/tan(75*deg);  int ax, ay, bx, by, dx, dy, ex, ey;  gdPoint points[4];  /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確  ax = center_x;  ay = center_y - sun_radius;  bx = center_x - sun_radius*tan(15*deg);  by = center_y;  ex = center_x;  ey = center_y + sun_radius;  dx = center_x + sun_radius*tan(15*deg);  dy = center_y;  // AB  gdImageLine(img, ax, ay, bx, by, color);  // BE  gdImageLine(img, bx, by, ex, ey, color);  // ED  gdImageLine(img, ex, ey, dx, dy, color);  // DA  gdImageLine(img, dx, dy, ax, ay, color);  */  ax = center_x;  ay = center_y - sun_radius;  bx = center_x - sun_radius*tan(15*deg);  by = center_y;  ex = center_x;  ey = center_y + sun_radius;  dx = center_x + sun_radius*tan(15*deg);  dy = center_y;  // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域  for (int i=1;i<=6;i++){  // A  points[0].x = ax+sun_radius*sin(30*deg*i);  points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);  // B  points[1].x = bx+sr-sr*cos(30*deg*i);  points[1].y = by-sr*sin(30*deg*i);  // E  points[2].x = ex-sun_radius*sin(30*deg*i);  points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));  // D  points[3].x = dx-(sr-sr*cos(30*deg*i));  points[3].y = dy+sr*sin(30*deg*i);  // 對菱形區域範圍塗色  gdImageFilledPolygon(img, points, 4, color);  // 在菱形區域外圍畫線, 明確界定菱形範圍  gdImagePolygon(img, points, 4, color);  } } \n \n 美國國旗 \n 程式如下 \n #include <stdio.h> #include <gd.h> #include <math.h> \n void draw_usa_flag(gdImagePtr img); void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle); \n int main() {  int width = 800;  int height = (int)(width / 1.9); \n gdImagePtr img = gdImageCreateTrueColor(width, height);  gdImageAlphaBlending(img, 0); \n draw_usa_flag(img); \n FILE *outputFile = fopen("./../images/usa_flag.png", "wb");  if (outputFile == NULL) {  fprintf(stderr, "打开输出文件时出错。\\n");  return 1;  } \n gdImagePngEx(img, outputFile, 9);  fclose(outputFile);  gdImageDestroy(img); \n return 0; } \n void draw_usa_flag(gdImagePtr img) {  int width = gdImageSX(img);  int height = gdImageSY(img);  int red, white, blue;  // 国旗颜色  red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹  white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹  blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形 \n int stripe_height = height / 13;  int stripe_width = width;  int star_size = (int)(0.0308 * height); // 星星大小 \n for (int y = 0; y < height; y += stripe_height) {  if (y / stripe_height % 2 == 0) {  gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);  } else {  gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);  }  } \n gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue); \n int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距  int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距  int star_start_x = (int)(0.125 * height); // 星星的起始X位置  int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置 \n for (int row = 0; row < 9; row++) {  int starsPerRow = (row % 2 == 0) ? 6 : 5; \n // 计算2、4、6和8排星星的偏移量  int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0; \n for (int star = 0; star < starsPerRow; star++) {  int x = star_start_x + star * star_spacing_x + offset_x; \n // 旋转角度（以弧度为单位）  double rotation_angle = M_PI / 5; // 忘記多少度的旋转 \n int y = star_start_y + row * star_spacing_y;  draw_star(img, x, y, star_size, white, rotation_angle);  }  } } \n void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {  gdPoint points[10]; \n for (int i = 0; i < 10; i++) {  double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;  int radius = (i % 2 == 0) ? size : size / 2;  points[i].x = x + radius * cos(angle);  points[i].y = y + radius * sin(angle);  } \n // 用指定的颜色填充星星  gdImageFilledPolygon(img, points, 10, color); } \n \n 日本國旗 \n 程式如下 \n \n \n \n \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_japan_flag(gdImagePtr img); \n void   draw_red_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   originalWidth = 1200; \n \xa0\xa0\xa0\xa0 int   originalHeight = ( int )(originalWidth * 2.0 / 3.0); \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_japan_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 // 新的宽度和高度以适应 "images" 文件夹 \n \xa0\xa0\xa0\xa0 int   newWidth = 600; \n \xa0\xa0\xa0\xa0 int   newHeight = ( int )(newWidth * 2.0 / 3.0); \n \xa0 \n \xa0\xa0\xa0\xa0 // 创建新图像并进行缩放 \n \xa0\xa0\xa0\xa0 gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(resizedImage, 0); \n \xa0\xa0\xa0\xa0 gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight); \n \xa0 \n \xa0\xa0 FILE   *outputFile =  fopen ( "./../images/japan_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePng(resizedImage, outputFile); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 gdImageDestroy(resizedImage); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n void   draw_japan_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0 \n \xa0\xa0\xa0\xa0 // 创建一个白色背景 \n \xa0\xa0\xa0\xa0 int   white = gdImageColorAllocate(img, 255, 255, 255); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white); \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色圆圈（太阳） \n \xa0\xa0\xa0\xa0 int   red = gdImageColorAllocate(img, 255, 0, 0); \n \xa0\xa0\xa0\xa0 int   center_x = width / 2; \n \xa0\xa0\xa0\xa0 int   center_y = height / 2; \n \xa0\xa0\xa0\xa0 int   radius = ( int )((width * 2) / 3); \n \xa0\xa0\xa0\xa0 draw_red_sun(img, center_x, center_y, radius, red); \n } \n \xa0 \n void   draw_red_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color) { \n \xa0\xa0 // 減小 size 的值,例如將他的值減半 \n \xa0\xa0 size = size / 2; \n \xa0\xa0\xa0\xa0 gdImageArc(img, x, y, size, size, 0, 360, color); \n \xa0\xa0\xa0\xa0 gdImageFillToBorder(img, x, y, color, color); \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'brython', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python的平衡介紹 \n 縮排（Python採用4個Spaces縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函數式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 開放 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息時間 \n 曾經 \n 類別 \n 此頁面示範如何在同一頁面下加入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定分割 .py 檔案放入 downloads/py 目錄中引用。 \n 也所有即將對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時交叉 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</> 腳本 \n 從1累加到100： \n 1加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1加到100 cango_三_齒輪 BS蛇 人工智能俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'brython.html'}]};