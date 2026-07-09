import React, { memo } from 'react';

import DashboardLayout from '../layout/DashboardLayout';
import DashboardSection from '../layout/DashboardSection';
import DashboardColumn from '../layout/DashboardColumn';

import getWidget from '../registry/getWidget';

const DashboardRuntime = ({ layout }) => {
  return (
    <DashboardLayout>
      {layout.map((section) => (
        <DashboardSection
          key={section.id}

          title={section.title}
        >
          {section.widgets.map((widgetId) => {
            const widget = getWidget(widgetId);

            if (!widget) {
              return null;
            }

            const Component = widget.component;

            return (
              <DashboardColumn
                key={widget.id}

                md={12 / section.columns}
              >
                <Component />
              </DashboardColumn>
            );
          })}
        </DashboardSection>
      ))}
    </DashboardLayout>
  );
};

export default memo(DashboardRuntime);
