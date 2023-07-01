export const getColorBrightness = (hexColor: string) => {
    const brightnessThreshold = 128;
  
    const color = parseInt(hexColor.replace('#', ''), 16);
  
    const red = (color >> 16) & 255;
    const green = (color >> 8) & 255;
    const blue = color & 255;
  
    const brightness = (red + green + blue) / 3;
  
    if (brightness < brightnessThreshold) {
      return 'dark';
    }
  
    return 'light';
  };