[![Codacy Badge][codacy-image]][codacy-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]

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

The plugin is listed as a project dependency in the npm ```package.json``` file and Cordova ```config.xml``` file. 

When adding any platform, Cordova should install automatically the Canvas Camera plugin into the demo project.

You can check that the plugin has been properly installed by checking the ```\plugins\``` directory inside your project directory.

### Prepare the project :

```bash
cordova prepare
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

## If the plugin was not installed :

### Try to remove Canvas Camera plugin :

```bash
cordova plugin remove com.virtuoworks.cordova-plugin-canvascamera
```

### Try to install Canvas Camera plugin :

```bash
cordova plugin add https://github.com/VirtuoWorks/CanvasCameraPlugin.git && cordova prepare
```
*Notice :* This will not work after having prepared any platform while using npm >=5. The plugin is already installed as a project dependency (check your ```\plugins\``` directory). The latest npm dependency management system uses a ```package-lock.json``` file which will prevent you from installing the plugin again.

## License

This software is released under the [MIT License](LICENSE).

[codacy-image]: https://api.codacy.com/project/badge/Grade/e507ea2658364d0cb23918c87b2d1158
[codacy-url]: https://www.codacy.com/app/VirtuoWorks/CanvasCameraDemo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=VirtuoWorks/CanvasCameraDemo&amp;utm_campaign=Badge_Grade
[dependencyci-image]: https://dependencyci.com/github/VirtuoWorks/CanvasCameraDemo/badge
[dependencyci-url]: https://dependencyci.com/github/VirtuoWorks/CanvasCameraDemo