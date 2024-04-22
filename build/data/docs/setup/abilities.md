## Introduction
In this guide, you will learn how to create a basic mod for Bopl Battle using Bepinex and HarmonyX. This guide will focus on changing a specific value in the game.

## Getting Started
**Before we begin, make sure you have the following:**

- Bopl Battle installed
- Bepinex installed
- An IDE for writing code (like Notepad++ or Visual Studio 2022)

## Writing Your Harmony Patch
In the plugin.cs, write the following code:

```
using HarmonyLib;

namespace YourModNamespace // This will be your modname
{
    [HarmonyPatch(typeof(TargetClass))]
    [HarmonyPatch("TargetMethod")]
    public static class YourPatchClass
    {
        public static void Postfix(ref int __result)
        {
            // Change the value of __result here
            __result = (Fix)newValue;
        }
    }
}
```