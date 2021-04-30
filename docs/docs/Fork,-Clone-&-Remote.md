---
id: Fork,-Clone-&-Remote
title: Fork, Clone & Remote
---

## Fork

_**Note**: This is only needed if you want to contribute to the project_.

If you want to contribute to the project you will have to create your own copy of the project on GitHub. You can do this by clicking the **Fork** button that can be found on the top right corner of the [landing page](https://github.com/anitab-org/bridge-in-tech-web) of the repository.

<img width="788" alt="Screen Shot 2020-07-19 at 9 16 07 am" src="https://user-images.githubusercontent.com/29667122/87863680-cd079d00-c9a0-11ea-836a-eb73da3d89c5.png"/>


## Clone

_**Note**: For this you need to install [git](https://git-scm.com) on your machine. You can download the git tool from [here](https://git-scm.com/downloads)_.

* If you have forked the project, run the following command -

`git clone https://github.com/YOUR_GITHUB_USER_NAME/bridge-in-tech-web`

where `YOUR_GITHUB_USER_NAME` is your GitHub handle.

If you haven't forked the project, run the following command -

`git clone https://github.com/anitab-org/bridge-in-tech-web`

## Remote

_**Note**: This is only needed if you want to contribute to the project_.

When a repository is cloned, it has a default remote named origin that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -

`git remote add upstream https://github.com/anitab-org/bridge-in-tech-web`

You can check that the previous command worked by running git remote -v. You should see the following output:

```
$ git remote -v
origin  https://github.com/YOUR_GITHUB_USER_NAME/bridge-in-tech-web (fetch)
origin  https://github.com/YOUR_GITHUB_USER_NAME/bridge-in-tech-web (push)
upstream        https://github.com/anitab-org/bridge-in-tech-web.git (fetch)
upstream        https://github.com/anitab-org/bridge-in-tech-web.git (push)
```

