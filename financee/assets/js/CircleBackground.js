import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleBackground = () => {
  const circles = [];
  const colors = ['red', 'blue', 'green', 'yellow', 'orange']; // Adicione mais cores conforme necessário
  const minSize = 600;
  const maxSize = 900;
  const numCircles = 5;
  const step = (maxSize - minSize) / (numCircles - 1);

  for (let i = 0; i < numCircles; i++) {
    const size = minSize + i * step;
    const color = colors[i % colors.length];
    circles.push(
      <View
        key={i}
        style={{
          ...styles.circle,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
      />
    );
  }

  return <View style={styles.container}>{circles}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleBackground;
