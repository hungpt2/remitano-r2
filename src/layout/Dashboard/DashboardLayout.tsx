import Navbar from '../../components/Navbar';

interface IDashboardProps {
  children?: JSX.Element;
}

const DashboardLayout = (props: IDashboardProps) => {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className="mt-16 h-full w-full overflow-auto">
        { props.children }
      </div>
    </div>
  );
};

export default DashboardLayout;