import styled from 'styled-components';
import { GREY_2 } from 'govuk-colours';
import { SPACING_MAP, MEDIA_QUERIES } from '@govuk-react/constants';

const clearfix = {
  '::after': {
    content: "''",
    display: 'block',
    clear: 'both',
  },
};

const TabList = styled('ul')({
  margin: 0,
  marginBottom: SPACING_MAP[6].mobile,
  padding: 0,
  listStyle: 'none',

  [MEDIA_QUERIES.TABLET]: {
    marginBottom: 0,
    borderBottom: `1px solid ${GREY_2}`,
    ...clearfix,
  },
});

export default TabList;
