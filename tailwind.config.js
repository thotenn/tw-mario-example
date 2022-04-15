const base_dir = (process.env.npm_lifecycle_event === 'build' ? '': 'public/');
module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.js',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      fontFamily: {
        iflower: ['Indie Flower', 'Open Sans']
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      rotate: {
        '-180': '-180deg',
          '-90': '-90deg',
         '-45': '-45deg',
          '0': '0',
          '45': '45deg',
          '90': '90deg',
         '135': '135deg',
          '180': '180deg',
         '270': '270deg',
         '405': '405deg'
      },
      extend: {
        backgroundImage: theme => ({
          'wave-pattern': `url(../${base_dir}assets/img/wave-white.png)`,
          'wave-pattern-dots': `url(../${base_dir}assets/img/pattern-white-dots.png)`,
          'pattern-characters-red': `url('../${base_dir}assets/img/pattern-characters-red.png')`,
          'character-mario': `url('../${base_dir}assets/img/character-l.png')`,
          'wave-pink': `url('../${base_dir}assets/img/wave-pink.png')`,
          'yellow-dots': `url('../${base_dir}assets/img/pattern-yellow-dots.png')`
        })
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [],
  }