import React, { memo } from 'react';

import { LAYOUT_TYPES, NODE_TYPES } from './layoutTypes';

import Row from './Row';
import Column from './Column';
import Grid from './Grid';
import Group from './Group';
import Section from './Section';
import TabsLayout from './TabsLayout';

import FormFieldRenderer from '../builder/FormFieldRenderer';

const LayoutEngine = ({ node }) => {
  if (!node) {
    return null;
  }

  switch (node.type) {
    case NODE_TYPES.FORM:
      return (
        <>
          {node.children?.map((child, index) => (
            <LayoutEngine key={child.id ?? index} node={child} />
          ))}
        </>
      );

    case LAYOUT_TYPES.ROW:
      return <Row node={node} />;

    case LAYOUT_TYPES.COLUMN:
      return <Column node={node} />;

    case LAYOUT_TYPES.GRID:
      return <Grid node={node} />;
    case LAYOUT_TYPES.GROUP:
      return <Group node={node} />;

    case LAYOUT_TYPES.SECTION:
      return <Section node={node} />;

    case LAYOUT_TYPES.TABS:
      return <TabsLayout node={node} />;

    case NODE_TYPES.FIELD:
      return <FormFieldRenderer field={node} />;

    default:
      return null;
  }
};

export default memo(LayoutEngine);
