const jimp = require("jimp");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const image_to_buffer = async (url) => {
  return new Promise(async (resolve, reject) => {
    await jimp.read(url, async (err, images) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      images.resize(400, 400);
      images.getBuffer(jimp.MIME_PNG, (err, buffer) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(buffer);
      });
    });
  });
};
const compare_img = async (url1, url2) => {
  try {
    console.log("started comparing 2 images");
    const img1buffer = await image_to_buffer(url1);
    console.log(img1buffer);
    const img2buffer = await image_to_buffer(url2);
    console.log("place 2");
    const img1 = PNG.sync.read(img1buffer);
    const img2 = PNG.sync.read(img2buffer);
    const { width, height } = img1;
    const diff = new PNG({ width, height });
    const difference = await pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      width,
      height,
      { threshold: 0.1 }
    );
    const compatibatible = 100 - (difference * 100) / (width * height);
    if (compatibatible > 90) console.log("compatible =" + compatibatible);
    else console.log(compatibatible);
  } catch (error) {
    // console.log(new Error("couldnt compare"));
    console.log(error);
  }
};
compare_img("./images/img1.png", "./images/img1.png");
