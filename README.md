# COSMIC Dock
![screenshot](https://github.com/micheleg/dash-to-dock/raw/master/media/screenshot.jpg)

## A dock for the Pop_Shell
This extension adds a configurable dock to the system and allows it to be placed in both the overview and the desktop. It enables fast application switching and launching directly from the desktop view without needing to open the Applications view. COSMIC Dock is based on [Ubuntu Dock](https://github.com/micheleg/dash-to-dock/tree/ubuntu-dock) and [Dash-to-Dock](https://github.com/micheleg/dash-to-dock).

This extension is part of [COSMIC](https://github.com/pop-os/cosmic), the Computer Operating System Main Interface Components.

## Installation
Installation is recommended from the package manager within Pop!_OS. It should be pre-installed as part of COSMIC on Pop!_OS 21.04 and later, but in case it isn't it can be installed using the following command:

```
sudo apt install gnome-shell-extension-cosmic-dock
```

### From source code
The extension can be installed directly from source, either for the convenience of using git or to test the latest development version. Clone the desired branch with git

<pre>git clone https://github.com/pop-os/cosmic-dock</pre>
or download the branch from github. A simple Makefile is included. Then run

```
make
make install
```
to install the extension in your home directory. (Note, use of `sudo` is not necessary and is discouraged.)

A Shell reload is required `Alt+F2` `r` `Enter` and the extension has to be enabled  with *gnome-tweak-tool*, *GNOME Extensions* or with *dconf*.

## Removal
If the extension is installed from source, it may be necessary to remove the manually-installed copy. The extension can be removed using this command:

```
rm -r ~/.local/share/gnome-shell/extensions/cosmic-dock@system76.com
```

## Bugs
 Please report bugs in the Github issue tracker: https://github.com/pop-os/cosmic-dock/issues

## License
COSMIC Dock is distributed under the terms of the GNU General Public License,
version 2 or later. See the COPYING file for details.

## Special Thanks

Special thanks to the team maintaining [Ubuntu Dock](https://github.com/micheleg/dash-to-dock/tree/ubuntu-dock) and [Dash-to-Dock](https://github.com/micheleg/dash-to-dock).
