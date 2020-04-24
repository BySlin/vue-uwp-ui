import * as stackBlurCanvas from "stackblur-canvas";
import * as tinycolor2 from "tinycolor2";

export default function generateAcrylicTexture(
  image,
  tintColor = "#fff",
  tintOpacity = 0.4,
  blurSize = 24,
  callback = () => {}
) {
  if (!image) return "none";
  const id = `react-uwp-AcrylicTexture-${tintColor}-${tintOpacity}`;
  let canvas = document.getElementById(id);
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = id;
    document.body.appendChild(canvas);
  }
  canvas.style.display = "none";
  const context = canvas.getContext("2d");
  const imageNode = new Image();
  imageNode.crossOrigin = "Anonymous";
  imageNode.onload = () => {
    let { naturalWidth, naturalHeight } = imageNode;
    if (naturalWidth > 1000) {
      naturalHeight = (naturalHeight / naturalWidth) * 1000;
      naturalWidth = 1000;
    }
    if (naturalHeight > 1000) {
      naturalWidth = (naturalWidth / naturalHeight) * 1000;
      naturalHeight = 1000;
    }

    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
    context.drawImage(imageNode, 0, 0, naturalWidth, naturalHeight);

    stackBlurCanvas.canvasRGBA(
      canvas,
      0,
      0,
      naturalWidth,
      naturalHeight,
      blurSize
    );

    context.fillStyle = tinycolor2(tintColor)
      .setAlpha(tintOpacity)
      .toRgbString();
    context.fillRect(0, 0, naturalWidth, naturalHeight);

    // const noiseWidth = 40;
    // const noiseHeight = 40;
    // const noiseImageDate = generateNoise(canvas, context, noiseWidth, noiseHeight, noiseSize, noiseOpacity);

    if (HTMLCanvasElement.prototype.toBlob) {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        callback(url);
      });
    } else if (HTMLCanvasElement.prototype.msToBlob) {
      const blob = canvas.msToBlob();
      const url = URL.createObjectURL(blob);
      callback(url);
    } else {
      callback(canvas.toDataURL("image/jpg"));
    }
  };
  imageNode.src = image;
}

export function generateNoise(
  canvas,
  context,
  width,
  height,
  noiseSize,
  opacity
) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let numb = Math.floor(Math.random() * 60);
      context.fillStyle = `rgba(${numb}, ${numb}, ${numb}, ${opacity})`;
      context.fillRect(x, y, noiseSize, noiseSize);
    }
  }

  return context.getImageData(0, 0, width, height);
}
