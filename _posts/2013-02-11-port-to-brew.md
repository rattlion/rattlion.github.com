---
layout: post
title: "Ports a Brewin'"
---

I <i class="icon-heart"></i> Linux. But my day to day OS is OS X. That may change with time but, for now that's how it is. One of things that suck about developing on a Mac is that there's no package manager. This typically comes up during app development and mostly web based apps. Xcode and its command line tools only take us so far. And since most web apps run on a Linux we inevitably have to install additional software so that OS X can have access to packages we run on Linux. Manually compiling software can lead to [ dependency hell ](http://en.wikipedia.org/wiki/Dependency_hell). Something no one in their right mind actually deals with nowadays. Instead we use package managers and for a long time we all used [ Macports ](http://macports.com). Today I want to talk about another option, one that I've come to love, [Homebrew](http://mxcl.github.com/homebrew/). I know what you're [finking](http://www.finkproject.org/) about. There are more than just two. This is true, but the first two I mention have the largest community support.

> "If you're going through hell, keep going." - Winston Churchill

There are plenty of flame wars going on about which is the best and why others aren't as good. I won't get into that. I can tell you that for mobility's sake I became frustrated with Macports and decided to Homebrew a chance. Sorry Winston, but I don't like to continually struggle. If there is a viable alternative, with less headaches, and equal results I'll take it. And I have yet to find a package I need that is not available on either. But Homebrew gets it to you faster. However, making the switch was intimidating. You know, I had a LAMP stack installed and configured, Ruby and gems going, databases, a mail server... Reconfiguring that looks painful. Guess what, it is. But, it's worth it. Do it, and don't look back.

I didn't have any local databases that weren't copies of live servers. So I didn't back them up, I opted to recreate them from the production environment. Other than that, if you have some incredible ini/config files you can't live without go ahead and back them up. But there's something to be said for clean slate. We all love a fresh start, it polls well across the board. Give yourself a chance. Here's how:

    sudo port -f uninstall installed
    sudo rm -rf /opt/local
    sudo rm -rf /Applications/MacPorts
    sudo rm -rf /Library/LaunchDaemons/org.macports.*
    sudo rm -rf /Library/Receipts/MacPorts*.pkg
    sudo rm -rf /Library/Tcl/macports1.0

Kill running lamp processes or restart. After that Macports is gone. You should feel vulnerable at this point. You have nothing. Rise from the ashes of the phoenix and meet your make file. Right, so now you want to install Homebrew. Prerequisites include the latest Xcode and command line utilities.

    ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"

God damn that was easy. Too easy in fact. There may be a little tidying up to do. Follow the prompts given by the following command. There may be existing packages you've compiled manually, and modifications to your path, or permissions problems, all of which were already problems but Macports never mentioned them. Take the time, clean house, feel good.

    brew doctor

After that's done. You're ready to get all the brew you want. But I'll hold your hand a little longer and outline an AMP stack. To start use Mac apache, its fine. Autostart it now.

    sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist

Get a better PHP though, the default doesn't have a lot going on. Jose Gonzales is running an excellent repo that contains a multitude of packages for a number of different versions. Choose the one that's right for you, which should be 5.4 at the time of writing this. But, if you need backwards compatible support do what I did.

    brew tap josegonzales/php
    brew install php53 --with-debug --with-imap --with-tidy

You can add as many additional packages as you like, such as

    brew install php53-memcached php53-mcrypt php53-uploadprogress

Get MySQL and follow the instructions on screen. Be sure to update you MySQL socket to match what you've chosen during the installation. To configure it, edit the `/etc/my.cnf` file. Yes go ahead and create it if it's not there.

    brew install mysql

Andddddd we're done. If you find yourself needing more packages look for them without leaving your terminal. Fire at will.

    brew search imagema
    brew install imagemagick

For Ruby management I'd suggest [ RVM ](https://rvm.io/), a powerful little tool that makes jumping from one Ruby version to next less painful.

    END
