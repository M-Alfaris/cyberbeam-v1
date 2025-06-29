/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'supabase-green': '#3ECF8E',
        'supabase-dark': '#1A1A1A',
        'supabase-darker': '#0F0F0F',
        'supabase-gray': '#2A2A2A',
        'supabase-light-gray': '#404040',
        'supabase-accent': '#F97316',
        'supabase-blue': '#3B82F6',
        'supabase-purple': '#8B5CF6',
        'custom-teal': '#11998E',
        'custom-green': '#38EF7D',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'supabase-gradient': 'linear-gradient(135deg, #3ECF8E, #3B82F6, #8B5CF6)',
        'custom-gradient': 'linear-gradient(135deg, #11998E, #38EF7D)',
      },
      spacing: {
        'rtl-safe': '0.75rem',
      }
    },
  },
  plugins: [],
};