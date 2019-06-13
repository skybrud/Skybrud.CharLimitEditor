Skybrud.CharLimitEditor
=======================

## Installation

1. [**NuGet Package**][NuGetPackage]  
Install this NuGet package in your Visual Studio project. Makes updating easy.

1. [**ZIP file**][GitHubRelease]  
Grab a ZIP file of the latest release; unzip and move the contents to the root directory of your web application.

## Screenshots

The property editor will inform users on how close the current value is to reaching the limit:

![image](https://user-images.githubusercontent.com/3634580/59429036-2507c380-8ddf-11e9-8627-3fca79df7392.png)

Depending the configuration of the property editor, users may be able to exceed the limit, in which case the character count switches to a darker red color:

![image](https://user-images.githubusercontent.com/3634580/59429028-20dba600-8ddf-11e9-8738-432979bd2ddc.png)

As mentioned above, the property editor can be configured to allow exceeding the character limit. It can also be configured to either be singleline (`<input />`) or multiline (`<textarea></textarea>`).

![image](https://user-images.githubusercontent.com/3634580/59429085-41a3fb80-8ddf-11e9-92cd-005b64822548.png)





[NuGetPackage]: https://www.nuget.org/packages/Skybrud.CharLimitEditor
[GitHubRelease]: https://github.com/skybrud/Skybrud.CharLimitEditor
