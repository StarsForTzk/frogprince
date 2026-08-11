import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { ink: '#000000', paper: '#ffffff', char: '#1c1c1c', mist: '#e5e4e4', smoke: '#8d8d8d', pewter: '#666666', ember: '#b75928' },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Lora', 'serif'] },
      fontSize: { body: ['15px', '1.5'], 'heading-sm': ['22px', '1.25'], heading: ['36px', '1.2'], 'heading-lg': ['62px', '1.1'], display: ['clamp(80px, 12vw, 168px)', '0.8'] },
      letterSpacing: { 'display-tight': '-0.025em', 'heading-tight': '-0.02em', 'body-loose': '0.01em' },
      borderRadius: { card: '8px', button: '80px', badge: '1584px' },
      boxShadow: { none: 'none' }
    }
  }
}
