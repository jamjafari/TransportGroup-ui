// DriverStatusCell.jsx

import StatusChip from '@/components/common/chips/StatusChip';

const DriverStatusCell = ({ value }) => {
  // console.log(widget.rows);
  return <StatusChip status={value} />;
};

export default DriverStatusCell;
