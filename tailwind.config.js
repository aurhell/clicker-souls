module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eater: ["Eater-Regular", "cursive"],
        loveLight: ["LoveLight-Regular", "cursive"],
        medievalSharp: ["MedievalSharp-Regular", "fantasy"],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
