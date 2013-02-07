---
layout: post
title: "Ports a Brewin'"
published: false
---
test

    sudo port -f uninstall installed
    sudo rm -rf /opt/local
    sudo rm -rf /Applications/DarwinPorts
    sudo rm -rf /Applications/MacPorts
    sudo rm -rf /Library/LaunchDaemons/org.macports.*
    sudo rm -rf /Library/Receipts/DarwinPorts*.pkg
    sudo rm -rf /Library/Receipts/MacPorts*.pkg
    sudo rm -rf /Library/StartupItems/DarwinPortsStartup
    sudo rm -rf /Library/Tcl/darwinports1.0
    sudo rm -rf /Library/Tcl/macports1.0
    sudo rm -rf ~/.macports


Use mac apache, its fine. Autostart it

    sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist

Kill running lamp processes or restart.

Install brew

    ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"

Test config

    brew docotor

Follow instructions

Get a better php

    brew tap josegonzales/php

Confige php

Configure apache

    brew install pear

    brew install mysql

follow instructions on screen

create /etc/my.cnf

update socket to match /tmp


