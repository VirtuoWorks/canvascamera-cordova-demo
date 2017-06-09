[![Codacy Badge][codacy-image]][codacy-url]

# Cordova CanvasCamera Plugin Demo

A sample Apache Cordova application that uses the CanvasCamera plugin.

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

### Install Canvas Camera plugin :

```bash
cordova plugin add https://github.com/VirtuoWorks/CanvasCameraPlugin.git && cordova prepare
```

### Start the application :

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

[codacy-image]: https://api.codacy.com/project/badge/Grade/e507ea2658364d0cb23918c87b2d1158
[codacy-url]: https://www.codacy.com/app/VirtuoWorks/CanvasCameraDemo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=VirtuoWorks/CanvasCameraDemo&amp;utm_campaign=Badge_Grade
