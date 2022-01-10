## 1、查看设备

ffmpeg -list_devices true -f dshow -i dummy     （） 



## 2、cmd中输入下面语句并回车--开启摄像头（USB2.0 VGA UVC WebCam为摄像头名称）

> ffplay -f dshow -i video="USB2.0 VGA UVC WebCam"  
>
> 或者
>
> ffplay -f vfwcap -i 0



## 3、cmd中输入下面语句即可查询摄像头信息

> ffmpeg -list_options true -f dshow -i video="USB2.0 VGA UVC WebCam" 





## 4、MP4推流 video1.mp4  =====> rtmp://127.0.0.1:1935/live/1234

 ffmpeg.exe -re -i video1.mp4 -vcodec libx264 -acodec aac -f flv rtmp://127.0.0.1:1935/live/1234

## 4.1、MP4拉流

ffplay.exe -i rtmp://127.0.0.1:1935/live/1234



## 5、摄像头推流

ffmpeg -f dshow -i video="USB2.0 VGA UVC WebCam" -f dshow -i audio="麦克风 (Realtek(R) Audio)" -pix_fmt yuv420p -vcodec libx264 -g 19 -s 1280x720 -r 15 -q 10 -ar 44100 -ac 2 -tune zerolatency -preset ultrafast -f flv rtmp://127.0.0.1:1935/live/1234

