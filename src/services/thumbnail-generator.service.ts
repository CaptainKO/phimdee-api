import ffmpeg = require("fluent-ffmpeg");
import { ReadStream, createReadStream } from "fs";
import { FFMPEG_PATH } from "src/environment";
import { read } from "fs";
import { cat } from "shelljs";
// const ffmpeg = FfmpegModule();
// ffmpeg
//   .setFfmpegPath(FFMPEG_PATH)
//   .setFfprobePath(FFMPEG_PATH);
export class ThumbnailGeneratorService {
  // ffmpeg = ffmpeg;
  videoFilters = ['fps=1/5', 'scale=-1:108', 'tile=5x5'];

  async generate(stream: ReadStream) {
    // this.fileCommand.ffprobe(function (err, data) {
    try {
      const fileName = await this.convertStreamToFile(createReadStream('i.mp4'));


      ffmpeg(fileName).ffprobe(function(err, data) {
        if (err)
          console.error('\nERROR[2]: ' + err);
        else
          console.log('\nMETADATA[2]: ' + JSON.stringify(data));
      });
      ffmpeg(fileName)
        // .input(stream)
        // .output("%f_streamable.mp4")
        // .format("mp4")
        // .outputOptions(["-movflags faststart", '-vf fps=1/5,scale=-1:108,tile=5x5'])
        .output("./src/public/images/out%d.jpg")
        // .size("108x?")
        .on("error", (e) => console.log(e))
        // .("data", () => console.log('called'))
        .run()
    } catch (err) {
      console.log('called')
      console.log(err)
    }
  }

  convertStreamToFile(stream: ReadStream) {
    return new Promise((res, rej) => {
      ffmpeg('i.mp4')
      // .input(stream)
      .format("mp4")
      .outputOptions("-movflags faststart")
      .output("streamable.mp4")
      .format("mp4")
        .on("end", () => res('%f_streamable.mp4'))
        .on("error", (err)=> {
          console.log('day', err)
        })
        // .("data", () => console.log('called'))
        .run()
    });
  }

  getVideoInfo(inputPath: string) {
    return new Promise((resolve, reject) => {
      return ffmpeg.ffprobe(inputPath, (error, videoInfo) => {
        if (error) {
          return reject(error);
        }

        const { duration, size } = videoInfo.format;

        return resolve({
          size,
          durationInSeconds: Math.floor(duration),
        });
      });
    });
  };
}

