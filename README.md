# [PG4D](https://developer.groupe-psa.io/)
PG4D is **P**SA **G**roupe **4** **D**eveloppers website. It's a documentation webiste with references, tutorials and good practices for developers using Groupe PSA's APIs.

# Stack
PG4D is a [Jekyll](https://github.com/jekyll/jekyll) static website using [Bulma](https://bulma.io/) CSS framework. It is hosted on [GitHub Pages](https://help.github.com/en/github/working-with-github-pages). Search engine is [Lunr.js](https://lunrjs.com/).


# For documentation mistakes, misprints...
You can ["Propose File Change"](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-another-users-repository) with GitHub interface.

# Work on this website locally
- If you don't have one, create an account on [GitHub](https://github.com/).
- Fork this [repo](https://github.com/GroupePSA/groupepsa.github.io).
- Pull the forked repo hosted on your account.
- [Install Ruby & Jekyll](https://jekyllrb.com/).
- Use `bundle exec jekyll serve` command to browse the website locally.
- Use git to commit and push your work on the external repo.
- Go to [github.com](https://github.com/), browse your fork of groupepsa.github.io and click `New pull request`.
- Give a name to the pull request and click `Create new pull request`.

> If the repo as been updated by someone else, this link could help: [https://help.github.com/en/articles/syncing-a-fork](https://help.github.com/en/articles/syncing-a-fork)

# Structure
- **includes**: Files that can be included in a page of the website.
- **layout**: Files that construct the base layout of a page.
- **sections**: Webapi (b2b/b2c) / webportal. At the moment, mobile-sdk is not realeased on external.
- **collections**: Those folders begining with `underscore` are used as lists of files used to create content (like list of functions for sdk)
- **sass**: The `overide.sass` file is used to update CSS of the framework.
- **config**: in this config file is also stored the URL of the APIs as variables.
- **content**: in sections folders there is content folder that store some content of a section. It's a way to maintain only one document and display it in different sections.
- **lunr.js**: is a js library providing search engine for static website.
- **swagger UI**: is a javaScript program used to display OpenAPI spec files. Currently, used in Monitor B2B/B2C and Remote B2B.
- **Redoc**: as swagger UI, Redoc is a program used to display OpenAPI spec in Reference API B2B/B2C.

# Ressources
- [Jekyll](https://jekyllrb.com/)
- [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Bulma](https://bulma.io/)
- [Liquid](https://shopify.github.io/liquid/)
- [Redoc](https://github.com/Redocly/redoc)
- [Lunr with jekyll](https://jekyllcodex.org/without-plugin/search-lunr/).