import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage:{
      'img_bg_hero':"url('../assets/logo-phone-shop.png')",
    },
    extend: {
      colors:{
        'primary-blue':'#00A1EE'
      }
    },
  },
  plugins: [],
}
export default config
