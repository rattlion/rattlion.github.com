---
layout: post
title: "Jekyll Never Sleeps"
---

# Putting Hyde to bed.

    (function() {
        var method;
        var noop = function noop() {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());

Most programming blogs are so fucking dull any possibility for an audience is lost somewhere in the first paragraph. It's been a long time since I've tried my hand at the pen but, I've been missing it very much lately. I didn't have a change of mind, I'm not writing poetry, I still write code as I'm sure will become immediately apparent. Where most people read novels or fiction I've become pretty narrow minded. I'm not particularly proud of this, but I've learned a lot, and what I've done is focus entirely on my field. All books, manuals, blog posts, magazine articles, bathroom scribblings, have all been programming related. Blah, *that* is fucking dull. I do vow to improve the breadth of my leisure reading but first let me tell you about this new blog.

This is blog number five for me. Truly, I do enjoy writing. I swear. But, I have always become bored or at least lost focus after a while. Given my skill set until recently and being dependant on the most readily available technology, my technique for publishing was determined by the lame blogging community. I'm talking about the people that chronicle their every meal, photograph every stupid tree, and tweet every thought that comes to mind.

> But Matt, those moments are the momemts that make people people. It's only natural to want to remember each precious moment.

Don't get me wrong, I love a little social networking and all that. I mean you're reading my blog right now. However, there are people that live for the moment and then people that record that moment and refer to it repeatedly.

> But Matt, what is this blog post about?

Having to deal with the shortcomings of blogging software, I was frustrated. I never could stick with it. But, here we are again. I've got something cooking that I hope will keep me interested for a while. As you might have guessed this post will be about the software. :) Before I get into the nitty gritty of it, let me tell you a few pro's my setup has going for it (which you might think are cons):

+ During the writing process, I never once leave my text editor. Not destracted by Microsoft Office, not distracted by related tumblr posts, not distracted by Wordpress not doing what I want, Drupal... actually never tried that, Blogger, ugh... It's just me and VIM.
+ I've never FTP'd a single file. It ain't the 90's anymore. We do it the GIT way.
+ Drafting. Because it's wrapped in a pretty GIT bow, I've got versioning, distributed versioning.
+ Performance. In one command, I have a generated static site. Optimal performance.
+ No database. Databases are a pain, I'd rather not when all I'm doing is writing.
+ Security udpates? What are you going to hack into? There are no moving parts here.
+ Hosting? Free, thanks @github.
+ Open Source. Even the bog itself is now open source.
+ [Markdown](http://daringfireball.net/projects/markdown/), sweet syntax, way more fun than html.

***
