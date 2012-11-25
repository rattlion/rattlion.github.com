---
layout: post
title: "Form v. Function"
---

This is the fifth blog I've built for myself and the only one that still lives. Although this site is in its infancy I have a strong feeling this will take me far. The most difficult part of maintaining a blog, for me anyway, is surprisingly enough not actually writing the post. There will be grammatical errors, spelling mistakes, a lack of clarity in thought... that doesn't bother me. I'm not overly self-conscious about the quality of the writing found here. These days, I'm first and foremost a programmer. Some of my best writing is never actually read by a human but only experienced. I like that about my work. But I enjoy having another creative outlet and means for expression. That being said, even though I hope non-developers will find something interesting here I imagine most of the posts to be relating to my work in some way. Unfortunately, for the members of the aforementioned group this first post is entirely technical. The reason I have a good feeling about this go-around is because of the way the site is constructed.

Of the previous four, the only blog I had written in with any extended period of dedication was a blog completely unrelated to my professional life. It was about music and it was entirely for amusement. It was built on a notorious platform, Wordpress. It was my first blog, I designed a simple theme, I coded it, and got my first hosting account, and I put it together myself. That part too was fun. At the present time, I couldn't tell you how many Wordpress sites I've built. At some point the Wordpress UI became so bloated with features it became difficult to to write a simple post. For example, in most posts there are a paragraphs and possible an image. Shouldn't require a lot of though. But, with the introduction of custom fields, post-types, menu items, etc. etc. I found myself spending more time working on the site than actually writing content. It's not that I found the features overwhelming, just unnecessarily complicated for the average blogger. I tried several other platforms and they all just felt dirty. In looking for a new alternative I had only one requirement, easy publishing.

I choose to host this blog freely on [Github](http://github.com), where publishing is managed through a distributed versioning control system called [Git](http://git-scm.org), and where I most easily could write entries via VIM. Probably doesn't sound too easy to most people and I guess it's not really. Here's the thing about me, I love the terminal. I like a black screen, white letters, no mouse, no buttons. I like seeing everything happen on a lower level. Things like Microsoft Excel literally frighten me. I like having greater control. As such, my comfort zone is in the terminal. I wrote this post with a text editor that was first released in 1978. Guess what... it's still the best. We can talk about it some time but, the point is that it is was easier to write an article this way. Even easier than writing an article in Microsoft Word thanks to a markup language called [Markdown](http://daringfireball.net/projects/markdown/).

> But Matt, I don't understand how learning yet another language could be easier than using a WYSIWIG, or even some simple HTML.

If you used a WYSIWIG for an extended period of time, you know it does some absurdly annoying things. Puts line breaks where you don't want them, throws empty div tags in randomly, alignment pft... yeah. No fun there. Simple HTML is fine, if you prefer HTML, that is all valid is Markdown. But, seriously, take the 15 minutes to learn markdown. It's easily worth it the time it takes.

> Ok so let's say I learn Markdown and yes, its amazeballs. Why is publishing so easy?

The publishing part should be straight forward for anyone considering themselves to be a *developer*. Have you ever heard of Linus Torvalds? If not you probably already stopped reading. Here's my publish button:

    $ git commit -m 'Post: Form V. Function' && git push

Github not only offers free hosting, but allows users to publish [Jekyll](http://jekyllrb.com/) based blogs on a push and runs the auto-generation of the site converting it to static HTML. Pretty cool stuff, geek out and read the [ documentation ](https://github.com/mojombo/jekyll/wiki). The point is, with this setup it's actually fun to write again. One of the awesome parts about using Jekyll as my platform is that I can easily change the design and layout of the site. So if this does keep my interest it won't be too difficult to change. Yay! Hope you enjoyed this a bit, there's more to come.



