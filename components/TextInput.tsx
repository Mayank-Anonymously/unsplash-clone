import React, { useEffect, useRef } from "react";
import { View, TextInput, Text, Animated } from "react-native";
export type Input = {
  value: string;
  onChangeText: (value: any) => void;
  style: any;
  placeholderTextColor: string;
  placeholder: string;
  // onFocus: any;
  // onBlur: any;
  getter: any;
  handleCancel: any;
};

interface FadeInView {
  children: any;
}
const TextField: React.FC<Input> = ({
  value,
  onChangeText,
  style,
  placeholderTextColor,
  placeholder,
  // onBlur,
  // onFocus,
  getter,
  handleCancel,
}) => {
  // const FadeInView = (props: FadeInView) => {
  //   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  //   useEffect(() => {
  //     if (getter !== "") {
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }).start();
  //     }
  //   }, [fadeAnim]);

  //   return (
  //     <Animated.View // Special animatable View
  //       style={{
  //         opacity: fadeAnim, // Bind opacity to animated value
  //       }}
  //     >
  //       {props.children}
  //     </Animated.View>
  //   );
  // };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        // onBlur={onBlur}
        // onFocus={onFocus}
      />
      {/* <FadeInView>
        <Text
          onPress={() => handleCancel()}
          style={{
            fontSize: 12,
            textAlign: "center",
            margin: 10,
            color: "white",
          }}
        >
          Search
        </Text>
      </FadeInView> */}
    </View>
  );
};

export default TextField;
