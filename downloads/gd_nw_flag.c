#include <stdio.h>
#include <gd.h>
#include <math.h>

// 函数声明
void draw_norway_flag(gdImagePtr img);

int main() {
    // 原始图像尺寸
    int originalWidth = 1200;
    int originalHeight = (int)(originalWidth * 2.0 / 3.0);

    // 创建真彩色图像
    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);
    gdImageAlphaBlending(img, 0);

    // 在图像上绘制挪威国旗
    draw_norway_flag(img);

    // 适应 "images" 文件夹的新尺寸
    int newWidth = 600;
    int newHeight = (int)(newWidth * 2.0 / 3.0);

    // 创建新图像并将原始图像调整大小以适应
    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);
    gdImageAlphaBlending(resizedImage, 0);
    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);

    // 将调整大小后的图像保存为PNG文件
    FILE *outputFile = fopen("./norway_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "无法打开输出文件。\n");
        return 1;
    }
    gdImagePng(resizedImage, outputFile);
    fclose(outputFile);

    // 销毁图像以释放内存
    gdImageDestroy(img);
    gdImageDestroy(resizedImage);

    return 0;
}

// 函数绘制挪威国旗
void draw_norway_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 红色背景
    int red = gdImageColorAllocate(img, 186, 12, 47);
    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, red);

    // 白色十字
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int crossWidth = width / 6;
    int crossHeight = height / 3;

    // 垂直臂
    gdImageFilledRectangle(img, (width - crossWidth) / 2, 0, (width + crossWidth) / 2, height - 1, white);
    // 水平臂
    gdImageFilledRectangle(img, 0, (height - crossHeight) / 2, width - 1, (height + crossHeight) / 2, white);
}
