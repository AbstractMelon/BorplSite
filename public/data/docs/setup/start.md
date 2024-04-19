## Introduction
Welcome to the tutorial on creating your first plugin! In this tutorial, we'll walk through the steps to create a simple plugin using BepInEx.

## Requirements
- IDE (Integrated Development Environment) - We recommend Visual Studio 2022.
- .NET 6 or newer (not .NET 8).
- Basic knowledge of command prompt.

## Step 1: Installing IDE
First, install an IDE such as Visual Studio 2022.

## Step 2: Downloading Dotnet
Download and install .NET 6 or newer, avoiding .NET 8 as it won't work.

## Step 3: Setting up BepInEx
Open your command prompt and run the following command:

`dotnet new -i BepInEx.Templates --nuget-source https://nuget.bepinex.dev/v3/index.json`

## Step 4: Creating Plugin
Create a new plugin using the following command:

`dotnet new bepinex5plugin -n MyFirstBoplPlugin -T net46 -U 2019.4.5`

## Step 5: Modifying Plugin
Open the generated files in your IDE and make necessary modifications as instructed.

## Step 6: Adding References
Add references by right-clicking on the project, selecting "Add", then "Add Assembly Reference", and selecting the required files.

## Step 7: Building Plugin
Build your plugin into a .dll file by going to "Build" -> "Build Solution".

## Step 8: Finalizing
Locate the .dll file in the project folder (Bin\Debug\net46) and use it as your plugin.

## Conclusion
Congratulations! You've created your first plugin. Have fun exploring and customizing it further!