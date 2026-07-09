export const bindWidgetData = async ({ widget, apiClient }) => {
  if (!widget.dataSource) {
    return widget.data || null;
  }

  const response = await apiClient(
    widget.dataSource.endpoint,
    widget.dataSource.query,
  );

  return response.data;
};
