import * as React from 'react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import SingleConnectedAutocompleteField from './Single';
import MultiConnectedAutocompleteField from './Multi';

import { SelectEntry } from '../..';
import { buildListingEndpoint } from '../../../..';

export default { title: 'InputField/Autocomplete/Connected' };

const buildEntities = (from) => {
  return Array(10)
    .fill(0)
    .map((_, index) => ({
      id: from + index,
      name: `Entity ${from + index}`,
    }));
};

const buildResult = ({ page, withPagination = false }) => ({
  meta: withPagination
    ? {
        pagination: {
          limit: 10,
          page,
          total: 40,
        },
      }
    : {
        limit: 10,
        page,
        total: 40,
      },
  result: buildEntities((page - 1) * 10),
});

const baseEndpoint = 'endpoint';
const baseEndpointWithPagination = 'endpointWithPagination';
const getEndpoint = ({ endpoint, parameters }): string =>
  buildListingEndpoint({
    baseEndpoint: endpoint,
    parameters,
  });

const mockedAxios = new MockAdapter(axios, { delayResponse: 500 });

mockedAxios
  .onGet(
    /endpoint\?page=\d+(?:&search={"\$or":\[{"host\.name":{"\$rg":".*"}}]})?/,
  )
  .reply((config) => {
    return [
      200,
      buildResult({
        page: parseInt(config.url?.split('page=')[1][0] || '0', 10),
      }),
    ];
  });

mockedAxios
  .onGet(
    /endpointWithPagination\?page=\d+(?:&search={"\$or":\[{"host\.name":{"\$rg":".*"}}]})?/,
  )
  .reply((config) => {
    return [
      200,
      buildResult({
        page: parseInt(config.url?.split('page=')[1][0] || '0', 10),
        withPagination: true,
      }),
    ];
  });

export const single = (): JSX.Element => (
  <SingleConnectedAutocompleteField
    field="host.name"
    getEndpoint={(parameters) => {
      return getEndpoint({ endpoint: baseEndpoint, parameters });
    }}
    getOptionsFromResult={(result): Array<SelectEntry> => result}
    initialPage={1}
    label="Single Connected Autocomplete"
    placeholder="Type here..."
  />
);

export const multi = (): JSX.Element => (
  <MultiConnectedAutocompleteField
    field="host.name"
    getEndpoint={(parameters) => {
      return getEndpoint({ endpoint: baseEndpoint, parameters });
    }}
    getOptionsFromResult={(result): Array<SelectEntry> => result}
    initialPage={1}
    label="Multi Connected Autocomplete"
    placeholder="Type here..."
  />
);

const getEndpointWithPagination = (parameters) =>
  getEndpoint({ endpoint: baseEndpointWithPagination, parameters });

export const singleWithCustomPathToPaginationProperties = (): JSX.Element => (
  <SingleConnectedAutocompleteField
    field="host.name"
    getEndpoint={getEndpointWithPagination}
    getOptionsFromResult={(result): Array<SelectEntry> => result}
    initialPage={1}
    label="Single Connected Autocomplete"
    paginationPath={['pagination']}
    placeholder="Type here..."
  />
);
