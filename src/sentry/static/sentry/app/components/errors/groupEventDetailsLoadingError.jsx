import React, {PropTypes} from 'react';

import {t} from '../../locale';
import DetailedError from './detailedError';

const GroupEventDetailsLoadingError = ({onRetry}) => {
  const reasons = [
    t('The events are still processing and are on their way'),
    t('The events have been deleted'),
    t('There is an internal systems error or active issue')
  ];

  return (
    <DetailedError
      onRetry={onRetry}
      heading="Sorry, the events for this issue could not be found."
      message={
        <div>
          <p>This could be due to a handful of reasons:</p>
          <ol className="detailed-error-list">
            {reasons.map((reason, i) => (
              <li key={i}>
                {reason}
              </li>
            ))}
          </ol>
        </div>
      }
    />
  );
};

GroupEventDetailsLoadingError.propTypes = {
  onRetry: PropTypes.func
};

export default GroupEventDetailsLoadingError;