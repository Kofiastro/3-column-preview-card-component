/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        Bigshoulders: ['Big Shoulders Display', 'cursive'],
        Lexend: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        Brightorange: 'hsl(31, 77%, 52%)',
        Darkcyan: 'hsl(184, 100%, 22%)',
        Verydarkcyan: 'hsl(179, 100%, 13%)',
        //Heading and Paragraphs and Buttons
        Transparentwhite: 'hsla(0, 0%, 100%, 0.75)',
        Verylightgray: 'hsl(0, 0%, 95%)',
      },
    },
  },
  plugins: [],
}

