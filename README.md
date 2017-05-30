# CanvasCameraDemo
A sample Apache Cordova application that uses the canvas camera plugin.

## Supported Platforms
- iOS
- Android

## Dependencies
- Git 
- NodeJS
- Apache Cordova
- Android Studio and SDK and/or Xcode and iOS SDK

## Installation
### Clone the repository :
```bash
git clone https://github.com/VirtuoWorks/CanvasCameraDemo.git
# goto CanvasCameraDemo directory
cd CanvasCameraDemo
```
### Add platforms :
*Any operating system*
```bash
cordova platform add android
```
*MacOS only*
```bash
cordova platform add ios
```
###Install Canvas Camera plugin :
```bash
cordova plugin add https://github.com/VirtuoWorks/CanvasCameraPlugin.git && cordova prepare
```
###Start the application :
*Any operating system*
```bash
cordova run android
```
*MacOS only*
```bash
cordova run ios
```

## License

This software is released under the [MIT License](LICENSE).