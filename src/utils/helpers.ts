import {Linking} from 'react-native';

export const openInBrowser = async (link: string) => {
  const prefixes = ['https://', 'http://', 'www.', 'mailto:', 'tel:', 'sms:'];
  let hasPrefix = false;
  prefixes.forEach(prefix => {
    if (link.startsWith(prefix)) {
      hasPrefix = true;
    }
  });
  if (!hasPrefix) {
    link = `https://${link}`;
  }
  const url = link ?? '';

  // Check if the device supports the Linking API
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Open the URL in the device's default browser
    await Linking.openURL(url);
  } else {
    console.error("Don't know how to open URI: " + url);
  }
};
