import React from 'react';
import withData from './withData';

const Post = ({ data }) => {
  return data?.map((d) => <div>{d?.title}</div>);
};

export default withData(Post);
