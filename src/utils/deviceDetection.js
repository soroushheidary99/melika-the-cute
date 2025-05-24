export const isMobileDevice = () => {
  // Check for mobile user agents
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUserAgent = mobileRegex.test(navigator.userAgent);
  
  // Check for touch capability
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Check for small screen size (typically mobile)
  const isSmallScreen = window.innerWidth <= 768;
  
  // Combination of factors suggests mobile device
  return isMobileUserAgent || (hasTouchScreen && isSmallScreen);
};

export const getDeviceType = () => {
  if (isMobileDevice()) {
    return 'mobile';
  }
  return 'desktop';
}; 