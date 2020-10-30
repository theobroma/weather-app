import React from 'react';

type Props = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

export const Location: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <h2>
        {location.name}, {location.region}, {location.country}
      </h2>
    </div>
  );
};
export default Location;
