import * as React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {BodySmallFat} from './Typography';
import {colors} from '../theme/colors';

interface Props {
  placeholder?: string;
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (event: any) => void;
  onFocus?: (layout: any) => void;
  onBlur?: (layout: any) => void;
  value?: any;
  style?: any;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  defaultValue?: string;
  maxLength?: number;
  readonly?: boolean;
  inputMode?:
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
}

const TextField: React.FC<Props> = ({
  placeholder,
  title,
  keyboardType,
  onChangeText,
  onFocus,
  onBlur,
  value,
  secureTextEntry,
  autoFocus,
  defaultValue,
  maxLength,
  inputMode,
  style,
  readonly,
}) => {
  return (
    <View style={{width: '100%'}}>
      {title && <BodySmallFat styles={{color: 'white'}}>{title}</BodySmallFat>}
      <TextInput
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={[styles.textField, style]}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        inputMode={inputMode}
        maxLength={maxLength}
        readOnly={readonly}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    backgroundColor: colors.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 16,
    padding: 16,
    width: '100%',
    color: colors.white,
    fontFamily: 'Tajawal-Regular',
  },
});

export default TextField;
