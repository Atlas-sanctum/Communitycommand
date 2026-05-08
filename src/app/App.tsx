import { useState } from 'react';
import { Home, ListTodo, Users, Trophy, AlertCircle } from 'lucide-react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Community from './components/Community';
import Rewards from './components/Rewards';
import Alerts from './components/Alerts';

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return <Dashboard />;
      case 1:
        return <Tasks />;
      case 2:
        return <Community />;
      case 3:
        return <Rewards />;
      case 4:
        return <Alerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-gray-50">
      <div className="flex-1 overflow-auto pb-16">
        {renderContent()}
      </div>

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={currentTab}
          onChange={(event, newValue) => {
            setCurrentTab(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Tasks" icon={<ListTodo />} />
          <BottomNavigationAction label="Community" icon={<Users />} />
          <BottomNavigationAction label="Rewards" icon={<Trophy />} />
          <BottomNavigationAction label="Alerts" icon={<AlertCircle />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
