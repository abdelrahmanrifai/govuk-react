import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from '@govuk-react/lib';
import { stripUnit } from 'polished';

import { BLACK, BORDER_COLOUR, GREY_4, WHITE, YELLOW } from 'govuk-colours';
import { SPACING, MEDIA_QUERIES, FOCUSABLE } from '@govuk-react/constants';

const StyledListItem = styled('li')({
  marginLeft: SPACING.SCALE_5,
  ':before': {
    content: "'— '",
    marginLeft: -SPACING.SCALE_5,
    paddingRight: SPACING.SCALE_1,
  },
  [MEDIA_QUERIES.TABLET]: {
    marginLeft: 0,
    ':before': {
      content: 'none',
    },
  },
});

const govukFocusableFill = {
  ':focus': {
    backgroundColor: YELLOW,
  },
};

const StyledHyperLink = styled('a')(
  typography.font({ size: 19 }),
  FOCUSABLE,
  {
    ...govukFocusableFill,

    display: 'inline-block',
    paddingTop: SPACING.SCALE_2,
    paddingBottom: SPACING.SCALE_2,
  },
  ({ isActive }) => ({
    color: isActive && BLACK,
    textDecoration: isActive && 'none',
    [MEDIA_QUERIES.TABLET]: {
      marginRight: SPACING.SCALE_1,
      float: 'left',
      color: BLACK,
      textAlign: 'center',
      textDecoration: 'none',

      marginTop: isActive && -SPACING.SCALE_1,
      marginBottom: isActive && '-1px',
      paddingTop: isActive && `${stripUnit(SPACING.SCALE_3) - 1}px`,
      paddingRight: isActive
        ? `${stripUnit(SPACING.SCALE_4) - 1}px`
        : SPACING.SCALE_4,
      paddingBottom: isActive && `${stripUnit(SPACING.SCALE_3) + 1}px`,
      paddingLeft: isActive
        ? `${stripUnit(SPACING.SCALE_4) - 1}px`
        : SPACING.SCALE_4,

      border: isActive && `1px solid ${BORDER_COLOUR}`,
      borderBottom: isActive && 0,
      backgroundColor: isActive ? WHITE : GREY_4,
      ':focus': {
        backgroundColor: isActive ? 'transparent' : GREY_4,
      },
    },
  }),
);

const Tab = ({
 children, isActive, href, onClick 
}) => (
  <StyledListItem>
    <StyledHyperLink
      isActive={isActive}
      onClick={(e) => {
        e.preventDefault();
        return onClick(e);
      }}
      href={href}
    >
      {children}
    </StyledHyperLink>
  </StyledListItem>
);

Tab.defaultProps = {
  isActive: false,
  href: '#',
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
