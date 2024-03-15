// PROJECT IMPORTS
import Default from './default';
import Theme1 from './theme1';
import Theme2 from './theme2';
import Theme3 from './theme3';
import Theme4 from './theme4';
import Theme5 from './theme5';
import Theme6 from './theme6';
import Theme7 from './theme7';
import Theme8 from './theme8';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (presetColor, mode) => {
  switch (presetColor) {
    case 'theme1':
      return Theme1(mode);
    case 'theme2':
      return Theme2(mode);
    case 'theme3':
      return Theme3(mode);
    case 'theme4':
      return Theme4(mode);
    case 'theme5':
      return Theme5(mode);
    case 'theme6':
      return Theme6(mode);
    case 'theme7':
      return Theme7(mode);
    case 'theme8':
      return Theme8(mode);
    default:
      return Default(mode);
  }
};

export default Theme;
