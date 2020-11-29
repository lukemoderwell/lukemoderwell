---
path: /git-rename-branch
date: 2020-11-24T02:00:34.415Z
tags:
  - git
  - how-to
title: How To Rename A Git Branch
description: Exploring a few ways to git that branch name just how you like it.
---
Sometimes in your git workflow, you may want to rename a branch. One reason to do so might be if you are using [Netlify’s excellent branch sub domains feature](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains) like I do for this very site. Recently I wanted to change from `blog.` to `writing.` just to be a little fancier.

To rename any branch use `git branch -m <old branch> <new branch>`

What you are really doing under the hood is moving the branch (thus -m). One way to make this a bit easier to remember is by making a custom alias like this `git config --global alias.rename 'branch -m'`. 

You should always be careful when doing this because the old branch still exists and can cause you trouble. One option is to delete this branch `git push <remote> --delete <old_name>` and then set upstream up with the new branch: `git push <remote> -u <new_name>`
