# Theme ITOU Discourse

> Thème pour le [forum des acteurs de l'inclusion](forum.inclusion.beta.gouv.fr/).

### Built With

 - Sass
 - [Discourse](https://github.com/discourse/discourse)
 - [discourse_theme](https://github.com/discourse/discourse_theme)

## Getting Started

This is a discourse theme, you'll want to check the [official documentation](https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648).

To get a local copy up and running or to use this in production, follow these simple steps:

### Prerequisites

 - You need to have a discourse forum where you are admin in order to add this theme.
 - It's best to have the `[discourse_theme](https://github.com/discourse/discourse_theme)` gem installed on your local machine in order to ensure a smooth development experience. This tool watches for changes in your local repository and updates the theme in consequence.

### Local development:

 - On your forum (say it's running on `http://localhost:3000`)
   - if it's [itou-discourse](https://github.com/betagouv/itou-discourse), run it with `make run`
   - create a [new API key](http://localhost:3000/admin/api/keys/new). It should be a **User API key**, NOT a global API key.
 - clone this project on your machine (say you clone it in /home/itou/theme-itou-discourse)
 - configure [`discourse_theme`](https://github.com/discourse/discourse_theme), by providing:
    - your forum URL
    - your API key
 - run `discourse_theme watch /home/itou/theme-itou-discourse`
 - if you want to see the mobile view, go to `http://localhost:3000?mobile_view=1`

Now, every change made to the theme will be updated on the forum.
If changes are not picked up, you may need to ensure the right theme is being used.

### Formatting

You can autoformat the styles using [`scssfmt`](https://github.com/morishitter/scssfmt). You can install it with `yarn`, then run:

```
./node_modules/scssfmt/cli.js  scss/**/*.scss
```

### Production

 - Import the theme in the admin panel (in `admin/customize/themes`) by providing this Git repository
 - More info in the [official documentation](https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648)

### Documentation

If you are getting started making a discourse theme, I’ve found these links to be useful:

 - [Developper’s Guide to Discourse Themes](https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648)
 - [The pluginApi source code](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/app/lib/plugin-api.js)
 - [Designer’s Guide to Discourse Themes](https://meta.discourse.org/t/designers-guide-to-discourse-themes/152002)
 - [Beginners’ guide to using Theme Creator and Theme CLI to start building a Discourse theme](https://meta.discourse.org/t/beginners-guide-to-using-theme-creator-and-theme-cli-to-start-building-a-discourse-theme/108444)
 - [Structure of themes and theme components](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
 - [How to add custom content that only appears on your homepage](https://meta.discourse.org/t/how-to-add-custom-content-that-only-appears-on-your-homepage/131415)
 - [Splitting up theme SCSS into multiple files](https://meta.discourse.org/t/splitting-up-theme-scss-into-multiple-files/115126)
 - [Splitting up theme Javascript into multiple files](https://meta.discourse.org/t/splitting-up-theme-javascript-into-multiple-files/119369)
 - On customizing specific categories: [A](https://meta.discourse.org/t/adding-custom-css-on-particular-categories/140954) and [B](https://meta.discourse.org/t/modify-new-topic-editor-grey-guide-text-copy-per-category/128920/3). (I mostly want to ensure something is clear: I’m innocent, they made me do it.)


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPL License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/betagouv/itou-theme-discourse](https://github.com/betagouv/itou-theme-discourse)
