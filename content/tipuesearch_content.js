var tipuesearch = {"pages": [{'title': 'about', 'text': 'https://github.com/Linjiahong41223125/cp2023 \n https://linjiahong41223125.github.io/cp2023/content/index.html \n https://github.com/FGH41223111/cp2023_ag6 \n https://fgh41223111.github.io/cp2023_ag6/content/index.html \n', 'tags': '', 'url': 'about.html'}, {'title': 'w2-w4', 'text': '網路設定 \n replit \n github \n 近端 \n 遠端。等設定 \n', 'tags': '', 'url': 'w2-w4.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu\n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit\n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\xa0\xa0\n// 主函式\nint main() {\n\xa0\xa0\xa0\xa0// Start a Gnuplot process using popen\n\xa0\xa0\xa0\xa0FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n\xa0\xa0\xa0\xa0if (!gnuplotPipe) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Failed to start Gnuplot.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Use Gnuplot plotting commands, specify font and output as PNG\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "plot sin(x)");\n\xa0\xa0\xa0\xa0// Close popen\n\xa0\xa0\xa0\xa0pclose(gnuplotPipe);\n\xa0\xa0\n\xa0\xa0\xa0\xa0return 0;\n}\n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '台灣國旗 程式如下 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n// width 3: height 2\nint width = 1200;\n// 國旗長寬比為 3:2\nint height = (int)(width*2.0 / 3.0);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_roc_flag(img);\n\nFILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\n// gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n// 由於中央白日圓形的半徑為青天寬度的 1/8\n// 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n// 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\nint sun_radius = (int)(width/8);\n// 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\nint white_circle_dia = sun_radius;\n// 中央藍色圓形半徑為中央白日的 1又 2/15\nint blue_circle_dia = white_circle_dia + white_circle_dia*2/15;\n// 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n// 根據畫布大小塗上紅色長方形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n// 青天面積為整面國旗的 1/4, 也是採用長方形塗色\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n// 先設法以填色畫出六個白色堆疊菱形\ndraw_white_sun(img, center_x, center_y, sun_radius, white);\n// 利用一個藍色大圓與白色小圓畫出藍色環狀\ngdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\ngdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n// M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n// 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\nfloat deg = M_PI/180;\n// 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n// 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\nfloat sr = sun_radius/tan(75*deg);\nint ax, ay, bx, by, dx, dy, ex, ey;\ngdPoint points[4];\n/* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// AB\ngdImageLine(img, ax, ay, bx, by, color);\n// BE\ngdImageLine(img, bx, by, ex, ey, color);\n// ED\ngdImageLine(img, ex, ey, dx, dy, color);\n// DA\ngdImageLine(img, dx, dy, ax, ay, color);\n*/\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\nfor (int i=1;i<=6;i++){\n// A\npoints[0].x = ax+sun_radius*sin(30*deg*i);\npoints[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n// B\npoints[1].x = bx+sr-sr*cos(30*deg*i);\npoints[1].y = by-sr*sin(30*deg*i);\n// E\npoints[2].x = ex-sun_radius*sin(30*deg*i);\npoints[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n// D\npoints[3].x = dx-(sr-sr*cos(30*deg*i));\npoints[3].y = dy+sr*sin(30*deg*i);\n// 對菱形區域範圍塗色\ngdImageFilledPolygon(img, points, 4, color);\n// 在菱形區域外圍畫線, 明確界定菱形範圍\ngdImagePolygon(img, points, 4, color);\n}\n} \n \n \n 美國國旗 \n 程式如下 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\nint width = 800;\nint height = (int)(width / 1.9);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_usa_flag(img);\n\nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时出错。\\n");\nreturn 1;\n}\n\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 国旗颜色\nred = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\nblue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\nint stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // 星星大小\n\nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}\n\ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\nint star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\nint star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\nint star_start_x = (int)(0.125 * height); // 星星的起始X位置\nint star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n// 计算2、4、6和8排星星的偏移量\nint offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\nfor (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x + offset_x;\n\n// 旋转角度（以弧度为单位）\ndouble rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\nint y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white, rotation_angle);\n}\n}\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];\n\nfor (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}\n\n// 用指定的颜色填充星星\ngdImageFilledPolygon(img, points, 10, color);\n} \n \n \n 日本國旗 \n 程式如下 \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\xa0\nint main() {\n\xa0\xa0\xa0\xa0int originalWidth = 1200;\n\xa0\xa0\xa0\xa0int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n\xa0\xa0\xa0\xa0gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(img, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_japan_flag(img);\n\xa0\n\xa0\xa0\xa0\xa0// 新的宽度和高度以适应 "images" 文件夹\n\xa0\xa0\xa0\xa0int newWidth = 600;\n\xa0\xa0\xa0\xa0int newHeight = (int)(newWidth * 2.0 / 3.0);\n\xa0\n\xa0\xa0\xa0\xa0// 创建新图像并进行缩放\n\xa0\xa0\xa0\xa0gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(resizedImage, 0);\n\xa0\xa0\xa0\xa0gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\xa0\n\xa0\xa0FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n\xa0\xa0\xa0\xa0if (outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Error opening the output file.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0gdImagePng(resizedImage, outputFile);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(img);\n\xa0\xa0\xa0\xa0gdImageDestroy(resizedImage);\n\xa0\n\xa0\xa0\xa0\xa0return 0;\n}\n\xa0\nvoid draw_japan_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int height = gdImageSY(img);\n\xa0\n\xa0\xa0\xa0\xa0// 创建一个白色背景\n\xa0\xa0\xa0\xa0int white = gdImageColorAllocate(img, 255, 255, 255);\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\xa0\n\xa0\xa0\xa0\xa0// 绘制红色圆圈（太阳）\n\xa0\xa0\xa0\xa0int red = gdImageColorAllocate(img, 255, 0, 0);\n\xa0\xa0\xa0\xa0int center_x = width / 2;\n\xa0\xa0\xa0\xa0int center_y = height / 2;\n\xa0\xa0\xa0\xa0int radius = (int)((width * 2) / 3);\n\xa0\xa0\xa0\xa0draw_red_sun(img, center_x, center_y, radius, red);\n}\n\xa0\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n\xa0\xa0// 減小 size 的值,例如將他的值減半\n\xa0\xa0size = size / 2;\n\xa0\xa0\xa0\xa0gdImageArc(img, x, y, size, size, 0, 360, color);\n\xa0\xa0\xa0\xa0gdImageFillToBorder(img, x, y, color, color);\n}\n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w9', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe . \n', 'tags': '', 'url': 'w9.html'}, {'title': 'W13', 'text': '\u3000\u3000對於這禮拜的學習是"無"，由於這禮拜我請假所以沒學到這卻給了我更多的思考，我需要甚麼?說實在話我是普通機械科畢業，甚麼?說實在話我是普通機械科畢業，電腦對我來說根本是不同領域的世界，我既不懂任何網路協定也無法想像虛擬的網路世界，我真的需要嗎? \n \u3000\u3000答案是"我需要"如果想像不到那就從最激出的開始一步一步慢慢理解，就像嬰兒剛出生慢慢了解世界，且對她有所想像。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W16', 'text': '心得: 現在的課程對我來說完全的陌生，現在我還是有許多的電腦軟體知識不會，而向前的速度快到把我拋到後頭，但還是慶幸在考試時我不是什麼題目都看不懂，起碼筆試是這樣，今後還有漫長的知識要學習。 \n', 'tags': '', 'url': 'W16.html'}, {'title': 'file', 'text': '檔案總攬\xa0 \n 必備三個檔案: \n tinyc.7z \xa0 ( Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot) \n python3114_git_putty.7z \xa0 (將近端 cmsimde 啟動並改版後推向 Github 所需的檔案) \n w11_1a.7z \xa0 ( 網路設定檔案) \n \n 請下載進各自USB中。 \n tcc_w_gd_raylib_SDL2.7z \xa0(新版tcc) \n Run-Away_C_SDL2_game.7z \xa0(GAME) \n roc_list_coord_flag.7z \xa0(w15測驗題目) \n', 'tags': '', 'url': 'file.html'}, {'title': 'brython', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python的平衡介紹 \n 縮排（Python採用4個Spaces縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函數式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 開放 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息時間 \n 曾經 \n 類別 \n 此頁面示範如何在同一頁面下加入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定分割 .py 檔案放入 downloads/py 目錄中引用。 \n 也所有即將對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時交叉 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</> 腳本 \n 從1累加到100： \n 1加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1加到100 cango_三_齒輪 BS蛇 人工智能俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': 'brython.html'}]};