import React from 'react';
import { useTranslation } from 'react-i18next';

const Project = props => {
  const { test } = props;
  const { t } = useTranslation();

  return (
    <div>
      {t('hello-world')}
      {test}
    </div>
  );
};

export default Project;
