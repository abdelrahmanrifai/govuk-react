import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GREY_2 } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING, SPACING_MAP } from '@govuk-react/constants';

const TabPanel = styled('section')({
  marginBottom: SPACING_MAP[8].mobile,
  [MEDIA_QUERIES.TABLET]: {
    marginBottom: SPACING_MAP[0].tablet,
    paddingTop: SPACING.SCALE_6,
    paddingRight: SPACING.SCALE_4,
    paddingBottom: SPACING.SCALE_6,
    paddingLeft: SPACING.SCALE_4,
    border: `1px solid ${GREY_2}`,
    borderTop: '0',
    '& >: last-child': {
      marginBottom: 0,
    },
  },
},
({ isActive }) => ({
  display: 'block',
  [MEDIA_QUERIES.TABLET]: {
    display: !isActive && 'none',
  },
}));

TabPanel.PropTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default TabPanel;
