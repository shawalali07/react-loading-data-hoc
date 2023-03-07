import React from 'react';

const withData = (WrappedComponent) => {
  const WithData = ({ data, loading, ...props }) => {
    if (!data?.length && !loading) {
      return <div>No data available</div>;
    }

    if (loading) return <h1>Loading...</h1>;

    return <WrappedComponent data={data} {...props} />;
  };

  return WithData;
};

export default withData;
