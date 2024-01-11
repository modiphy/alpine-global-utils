let mix = require('laravel-mix')

mix.js('src/index.js', 'dist/js').postCss('src/app.css', 'dist/css', [require('tailwindcss')])
