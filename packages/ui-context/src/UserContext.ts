import * as React from 'react';

import { UserContext } from './types';

const defaultUser = {
  locale: navigator.language,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  username: '',
};

const defaultAcl = {
  actions: {
    host: {
      acknowledgement: false,
      check: false,
      disacknowledgement: false,
      downtime: false,
      submit_status: false,
    },
    service: {
      acknowledgement: false,
      check: false,
      disacknowledgement: false,
      downtime: false,
      submit_status: false,
    },
  },
};

const defaultContext = {
  ...defaultUser,
  acl: defaultAcl,
};

const Context = React.createContext<UserContext>(defaultContext);

const useUserContext = (): UserContext => React.useContext(Context);

export default Context;

export { useUserContext, defaultUser, defaultAcl };
