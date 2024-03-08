import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import typography from '../theme/typography';

interface TextProps {
  children: any;
}

export const Title: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.title, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const Subtitle: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.subtitle, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const SubtitleSmall: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.subtitleSmall, customStyles]} {...props}>
      {children}
    </Text>
  );
};

//@ts-ignore
const CustomText = ({children, style}) => {
  return (
    <Text style={StyleSheet.flatten([typography.body, style])}>{children}</Text>
  );
};
/*
export const HtmlBody: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  const htmlContent = children; // This should be your HTML-like content string

  const customStyleSheet = {
    br: {
      height: 8, // Adjust this value as needed to change the height of <br /> tags
    },
  };
  */
/*
  return (
    <HTMLView
      value={htmlContent}
      stylesheet={customStyleSheet}
      renderNode={(node, index, siblings, parent) => {
        if (node.type === 'text' && parent && parent.name !== 'a') {
          // Apply custom styles to text nodes, excluding those inside 'a' tags
          return (
            <CustomText key={index} style={customStyles}>
              {node.data}
            </CustomText>
          );
        }
      }}
    />
  );
};*/

export const Body: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.body, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const BodyFat: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.bodyFat, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const BodySmall: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.bodySmall, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const BodySmallFat: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.bodySmallFat, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const BodyTiny: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.bodyTiny, customStyles]} {...props}>
      {children}
    </Text>
  );
};

export const ButtonText: React.FC<TextProps & {styles?: any}> = ({
  children,
  styles: customStyles,
  ...props
}) => {
  return (
    <Text style={[typography.buttonText, customStyles]} {...props}>
      {children}
    </Text>
  );
};
