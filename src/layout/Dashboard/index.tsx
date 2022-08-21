import DashboardLayout from './DashboardLayout';

interface IDashboardProps {
  children?: JSX.Element;
}

export default (props: IDashboardProps): JSX.Element => {
  return (<DashboardLayout {...props} />)
};
