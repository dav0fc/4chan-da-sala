import * as React from 'react';
import { Image } from 'react-native';

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      source={require('../../assets/logo-transparent.png')}
      className={className}
    />
  );
}