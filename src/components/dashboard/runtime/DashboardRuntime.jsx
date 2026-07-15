import React, { memo } from 'react';

import DashboardLayout from '../layout/DashboardLayout';
import DashboardSection from '../layout/DashboardSection';

import WidgetRenderer from './WidgetRenderer';

import {
  DashboardRuntimePropTypes,
  DashboardRuntimeDefaultProps,
} from './DashboardRuntime.types';

const DashboardRuntime = ({ layout }) => {
  if (!layout || layout.length === 0) {
    return null;
  }

  return (
    <DashboardLayout>
      {layout.map((section) => (
        <DashboardSection key={section.id} title={section.title}>
          {section.widgets.map((widgetId) => (
            <WidgetRenderer
              key={widgetId}
              widgetId={widgetId}
              columns={section.columns}
            />
          ))}
        </DashboardSection>
      ))}
    </DashboardLayout>
  );
};

DashboardRuntime.propTypes = DashboardRuntimePropTypes;

DashboardRuntime.defaultProps = DashboardRuntimeDefaultProps;

export default memo(DashboardRuntime);
