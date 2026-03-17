import * as React from 'react';
import '../global.css';
import {Image} from 'react-native';

export default function Logo(props: { className: string | undefined; }) {
  return (
    <>
      <Image
      source={require("../assets/logo-transparent.png")}
      className={props.className}
      />
    </>
  );
}