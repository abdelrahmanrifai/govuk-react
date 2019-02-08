import styled from 'styled-components';
import { BLACK } from 'govuk-colours';
import {
  FONT_SIZE,
  NTA_LIGHT,
  LINE_HEIGHT,
  SPACING_MAP,
} from '@govuk-react/constants';

const Tabs = styled('div')({
  fontFamily: NTA_LIGHT,
  webkitFontSmoothing: 'antialiased',
  mozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  fontSize: FONT_SIZE.SIZE_19,
  lineHeight: LINE_HEIGHT.SIZE_19,
  color: BLACK,
  marginTop: SPACING_MAP[1].mobile,
  marginBottom: SPACING_MAP[6],
});

export default Tabs;
