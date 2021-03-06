# MaxDown - Markdown Editor

Maxdown is a simple markdown editor, using the [codemirror](http://codemirror.net)-engine. Simple design for easy writing without distraction. Markdown will be highlighted as you type. The whole project is [open-source](LICENSE). Feel free to contribute in any way you like.

- [Features](#features)
- [Changelog](#changelog)
- [Known Bugs](#known-bugs)
- [Contribution](#contribution)
- [Online demo](http://opoloo.github.io/maxdown)
- [Download latest release](https://github.com/opoloo/maxdown/releases)
- [Open new issue](https://github.com/opoloo/maxdown/issues/new)
- ~~[Official website](#)~~ (coming soon)

![current version](https://img.shields.io/badge/current_version-0.2.13-brightgreen.svg)
![latest update](https://img.shields.io/badge/latest_update-13._May_2015-brightgreen.svg)
![status](https://img.shields.io/badge/status-stable--beta-yellow.svg)

## Features

- Markdown Highlighting ([GFM-Style](https://help.github.com/articles/github-flavored-markdown/))
- Saving documents to localStorage
- Renaming documents
- Switch themes (light/dark)
- Jump to sections of your document using quick anchor links to headlines
- Fullscreen mode for distraction free environment
- Delete single/all documents from localStorage
- Keyboard Shortcuts
  - **CTRL+M** -> Toggle sidebar
  - **CTRL+ALT+N** -> New document
  - **CTRL+ALT+F** -> Toggle fullscreen
- Even more. I don't know. I'm just the developer :) Cheers. RTFM
- This list may not be up to date all the time...

## Changelog

- v0.2.13 (13. May 2015)
  - Adjusted custom scrollbar styling
- v0.2.12 (5. May 2015)
  - Fixed chrome bug caused by navigator.mozApps
- v0.2.11 (4. May [Star Wars Day <3])
  - Added firefox app manifesto
  - Added button to install Maxdown on FirefoxOS/Firefox browser
- v0.2.10 (30. April)
  - Set focus to document when selected from sidebar
  - Fixed headline scroll-to function
  - Added placeholder if editor is empty
- v0.2.9 (28. April 2015)
  - Added perfect-scrollbar
  - Customized body/documents scrollbars
- v0.2.8 (24. April 2015)
  - Added new favicons (standard + saving icon)
  - Removed saving indicator
- v0.2.7 (20. April 2015)
  - Added favicon
  - Changing favicons while saving
  - Remember theme
- v0.2.6 (16. April 2015)
  - Added fullscreen mode
  - New editor styles for links/images
  - Increased saving animation duration
  - Added mousetrap for keyboard shortcuts
  - Added keyboard shortcut for sidebar (CTRL+M)
  - Added keyboard shortcut for new document (CTRL+ALT+N)
  - Added keyboard shortcut for fullscreen (CTRL+ALT+F)
  - Added new iconfont (replaced all icons)
  - Sidebar style polish
  - Close sidebar when adding a new document
- v0.2.5 (15. April 2015)
  - Colorized cursor + selected text
  - Fixed autosave bug
  - Removed top navbar
  - Re-Arranged Sidebar
  - Added FontAwesome (Iconfont)
  - Custom scrollbar styling for documents list
  - Improved saving-animation
  - Added delete all button
- v0.2.4 (14. April 2015)
  - Improved renaming function (checking for empty value)
  - Made sidebar scrollable
- v0.2.3 (9. April 2015)
  - Improved title handling
  - Renaming documents is now possible inside the documents list (click active document once again)
  - Focus-loss fixed when deleting documents
  - Added new formatting styling
  - Updated "New Document" label
- v0.2.2 (8. April 2015)
  - Autosave system tweaks
  - Document list now ordered by "most recent update" DESC
  - Current document will move to the top of the document list (only when edited/saved)
  - Headlines of current document will be shown inside the documents list
  - Clicking on the headlines will scroll to that position inside your current document
  - Changing the document will jump back to top
  - Improved document listing in main-nav
  - Removing documents is now possible (confirmation needed)
- v0.2.1 (7. April 2015)
  - Adding new documents is now possible
  - New documents will be saved automatically
  - Added markdown cheat-sheet on "start screen"
  - Added document renaming
  - Added warning before leaving page without saving
  - Added auto-save (interval: 5s)
- v0.2.0 (26. March 2015)
  - New layout
  - Editor Javascript adjustment
- v0.1.0 (11. March 2015)
  - deprecated
  - some stuff was integrated here. Who knows.

## Known bugs

[Known bugs and other issues can be found here](https://github.com/opoloo/maxdown/issues)

## Contribution

Feel free to fork the code to contribute and/or open issues for bugs/suggestions/whatsoever. Thanks!

## Used software

- [jQuery](http://jquery.com)
- [CodeMirror](http://codemirror.net)
- [Mousetrap](https://craig.is/killing/mice)
- [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)