import React from 'react';
import { aclonica } from '@/app/ui/fonts';
import styles from './styles.module.scss';

const Page = () => {
  return (
    <p className={`${aclonica.className} ${styles.someClass}`}>
      Customers Page
    </p>
  );
};

export default Page;
