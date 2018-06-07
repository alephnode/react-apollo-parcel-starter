export const COLORS = {
  PRIMARY: '#003265',
  SECONDARY: '#7E8EB4',
  ACCENT: '#028090',
  OFFWHITE: '#F3F4F8',
  PASTEL_BLUE: '#B5BDD4',
}

export const MEDIA = {
  MOBILE_UP: '@media (min-width: 500px)',
  TABLET_UP: '@media (min-width: 768px)',
  TABLET_DOWN: '@media (max-width: 767px)',
  DESKTOP_UP: '@media (min-width: 1200px)',
  DESKTOP_DOWN: '@media (max-width: 1199px)',
  TAB_DESK_DOWN: '@media (max-width: 992px)',
}

export const FONTS = {
  ROBOTO: '"Roboto Mono", sans-serif',
  SYSTEM: '',
}

export const SPACING = {
  VERTICAL_HEIGHT: {
    BODY_SECTION: '2rem',
  },
  GUTTER: {
    PADDING_LEFT: '30px',
  },
}

export const TRANSITION_TIMIGS = {
  CUBIC: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  FLICKER: 'cubic-bezier(0, 0.51, 0.22,-0.29)',
  EASE: 'ease-in',
}

export const COMMON_STYLES = {
  MOBILE_ONLY: {
    [MEDIA.TABLET_UP]: {
      display: 'none',
    },
  },
  CLICKABLE: {
    cursor: 'pointer',
    transition: `all 0.2s ${TRANSITION_TIMIGS.EASE}`,
  },
  MOBILE_HIDDEN: {
    [MEDIA.TABLET_DOWN]: {
      display: 'none',
    },
  },
  DESKTOP_ONLY: {
    [MEDIA.TABLET_DOWN]: {
      display: 'none',
    },
  },
}
