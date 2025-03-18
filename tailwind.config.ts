import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1650px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#15AA7A",
        title: "#050505",
        sub: "#33404A",
        content: "#231F20",
      },
      keyframes: {
        textGradientToLeft: {
          '0%': {
            backgroundPosition: '100%'
          },
          '100%': {
            backgroundPosition: '0'
          },
        },
        floatLeft: {
          '0%, 100%': {
            transform: 'translateX(calc(25% - 5px)) translateY(calc(33.333% - 5px))',
          },
          '50%': {
            transform: 'translateX(calc(25% + 5px)) translateY(calc(33.333% + 5px))',
          }
        },
        floatRight: {
          '0%, 100%': {
            transform: 'translateX(calc(-25% + 5px)) translateY(calc(33.333% - 5px))',
          },
          '50%': {
            transform: 'translateX(calc(-25% - 5px)) translateY(calc(33.333% + 5px))',
          }
        },
        cloudMove: {
          '0%': {
            transform: 'translate(0)',
          },
          '100%': {
            transform: 'translate(25%, 25%)',
          }
        },
        deco2Move: {
          '0%': {
            transform: 'translate(0)',
          },
          '100%': {
            transform: 'translateY(-25%)',
          }
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          }
        },
        circleAnimation: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            filter: 'brightness(1)'
          },
          '25%': {
            transform: 'rotate(90deg) scale(1.05)',
            filter: 'brightness(1.1)'
          },
          '50%': {
            transform: 'rotate(180deg) scale(1)',
            filter: 'brightness(1)'
          },
          '75%': {
            transform: 'rotate(270deg) scale(0.95)',
            filter: 'brightness(0.9)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
            filter: 'brightness(1)'
          }
        },
        circlePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.9'
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1'
          }
        },
        emojiBounceSoft: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        emojiBounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-12px)'
          },
          '60%': {
            transform: 'translateY(-5px)'
          }
        },
        emojiPulse: {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.15)'
          }
        },
        emojiBounceRotate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-10px) rotate(5deg)'
          },
          '50%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '75%': {
            transform: 'translateY(-5px) rotate(-5deg)'
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        popUp: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '70%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        textGradient: 'textGradientToLeft 5s linear infinite alternate',
        floatLeft: 'floatLeft 6s ease-in-out infinite',
        floatRight: 'floatRight 6s ease-in-out infinite',
        cloudMove: 'cloudMove 5s ease-in-out infinite alternate',
        deco2Move: 'deco2Move 3s ease-in-out infinite alternate',
        slowRotate: 'rotate 20s linear infinite',
        circleGlow: 'circleAnimation 12s ease-in-out infinite',
        circlePulse: 'circlePulse 4s ease-in-out infinite',
        emojiBounceSoft: 'emojiBounceSoft 1s ease-in-out infinite',
        emojiBounce: 'emojiBounce 2s ease-in-out infinite',
        emojiPulse: 'emojiPulse 1.5s ease-in-out infinite',
        emojiBounceRotate: 'emojiBounceRotate 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        popUp: 'popUp 0.9s ease-out forwards',
        fadeInUpDelay1: 'fadeInUp 0.8s ease-out 0.2s forwards',
        fadeInUpDelay2: 'fadeInUp 0.8s ease-out 0.4s forwards',
        fadeInUpDelay3: 'fadeInUp 0.8s ease-out 0.6s forwards',
        slideInLeftDelay1: 'slideInLeft 0.8s ease-out 0.3s forwards',
        slideInRightDelay1: 'slideInRight 0.8s ease-out 0.3s forwards',
        popUpDelay1: 'popUp 0.9s ease-out 0.5s forwards',
      },
      backgroundImage: {
        'text-gradient': "url('/images/textGradient.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;