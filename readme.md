Sameify jQuery Plugin
=====================
---------------------
Makes selected elements at least the height of the tallest element in the group
-------------------------------------------------------------------------------
Helps to make items with different amounts of text look uniform even when lines wrap causing some elements to have more lines, thus making them taller.

Before Sameify:
![Screenshot of before](./images/before.jpg)
----------

After Sameify:
![Screenshot of after](./images/after.jpg)
----------

Incorporates debounce so that it doesn't fire a million times if the browser is resized.

Usage:
Import script - `<script type="text/javascript" src="./sameify.min.js"></script>`
Sameify your elements - `$('.shared-class').sameify();`