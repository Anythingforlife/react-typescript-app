import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoaderComponent(props: any) {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      visible={props.visible}
    />
  );
}
