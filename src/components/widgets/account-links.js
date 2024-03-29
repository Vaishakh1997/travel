import React from 'react';
import { Link } from 'react-router-dom';

const AccountLinks = () => {
  const items = [
    {
      url: '/',
      name: 'Today',
    },
    {
      url: '/',
      name: 'This week',
    },
    {
      url: '/',
      name: 'This month',
    },
    {
      url: '/',
      name: 'This year',
    },
    {
      url: '/',
      name: 'Life time',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <ul className="list-none">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              to={item.url}
              className="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-grey-100 dark:bg-dark-95 dark:hover:bg-dark-90"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountLinks;
