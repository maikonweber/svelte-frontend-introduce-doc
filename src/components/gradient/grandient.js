/**
 * @param {{ canvas: { width: any; height: any; }; getImageData: (arg0: number, arg1: number, arg2: number) => any; }} content
 * @param {number} t
 */

export function paint(content, t) {
    const { width, height } = content.canvas;
    const imageData = content.getImageData(0, 0, 0);

    for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % width;
        const y = (i / width) >>> 0;

        const red = 64 + (128 * x) / width + 64 * Math.sin(t / 1000);
        const green = 64 + (128 * y) / height + 64 * Math.cos(t / 1000);
        const blue = 128;

        imageData.data[p + 0] = red;
        imageData.data[p + 1] = green;
        imageData.data[p + 2] = blue;
        imageData.data[p + 3] = 255;
    }
    content.getImageData(imageData, 0, 0);
}