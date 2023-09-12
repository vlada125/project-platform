// Dependencies
import React, { FC } from 'react';

// Types
import { AvatarProps } from './types';

// Export component
export const Avatar: FC<AvatarProps> = (props) => {
  const { avatarUrl, size = 20, shadow, username, className } = props;

  return (
    <div
      className={`${className} ${shadow ? 'card-shadow' : ''} rounded-full overflow-hidden bg-[#6C6EA0] flex items-center justify-center`}
      style={{
        width: size,
        height: size,
      }}
    >
      {avatarUrl ? <img className="w-full h-full object-cover" src={avatarUrl} alt={'avatar'} /> : <p className="text-white">{username?.slice(0, 1)}</p>}
    </div>
  );
};
