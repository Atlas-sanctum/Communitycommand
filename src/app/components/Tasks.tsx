import { Briefcase, Clock, MapPin, DollarSign, Award } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

export default function Tasks() {
  const [tabValue, setTabValue] = useState(0);

  const availableTasks = [
    {
      id: 1,
      title: 'Waste Collection - Railway Area',
      type: 'Cleanup',
      reward: 150,
      duration: '2-3 hours',
      distance: '0.3 km',
      urgency: 'high',
      badge: 'Waste Ranger',
    },
    {
      id: 2,
      title: 'Water Quality Testing',
      type: 'Monitoring',
      reward: 200,
      duration: '1 hour',
      distance: '0.8 km',
      urgency: 'medium',
      badge: 'Water Guardian',
    },
    {
      id: 3,
      title: 'Community Survey - Health',
      type: 'Survey',
      reward: 100,
      duration: '3-4 hours',
      distance: '1.2 km',
      urgency: 'low',
      badge: 'Health Sentinel',
    },
    {
      id: 4,
      title: 'Drainage Repair Assistance',
      type: 'Infrastructure',
      reward: 300,
      duration: '4-5 hours',
      distance: '0.5 km',
      urgency: 'critical',
      badge: 'Community Builder',
    },
  ];

  const myTasks = [
    {
      id: 1,
      title: 'Tree Planting Event',
      status: 'In Progress',
      progress: 65,
      reward: 100,
      deadline: '2 hours left',
    },
    {
      id: 2,
      title: 'Plastic Cleanup - Market',
      status: 'Pending Verification',
      progress: 100,
      reward: 150,
      deadline: 'Awaiting approval',
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical':
        return 'error';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      default:
        return 'success';
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Tasks & Jobs</h1>
        <p className="text-sm text-gray-600">
          Earn rewards through regenerative work
        </p>
      </div>

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Available" />
        <Tab label="My Tasks" />
      </Tabs>

      {tabValue === 0 && (
        <div className="space-y-3">
          {availableTasks.map((task) => (
            <Card key={task.id} elevation={1}>
              <CardContent>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {task.title}
                    </h3>
                    <Chip label={task.type} size="small" variant="outlined" />
                  </div>
                  <Chip
                    label={task.urgency}
                    color={getUrgencyColor(task.urgency)}
                    size="small"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {task.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {task.distance}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">
                      {task.reward} points
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-600">{task.badge}</span>
                  </div>
                </div>

                <Button variant="contained" fullWidth>
                  Accept Task
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tabValue === 1 && (
        <div className="space-y-3">
          {myTasks.length === 0 ? (
            <Card elevation={1}>
              <CardContent>
                <div className="text-center py-8">
                  <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">No active tasks</p>
                  <p className="text-sm text-gray-500">
                    Accept a task to get started
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            myTasks.map((task) => (
              <Card key={task.id} elevation={1}>
                <CardContent>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <Chip label={task.status} size="small" color="primary" />
                  </div>

                  <div className="my-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{task.deadline}</span>
                    <span className="font-semibold text-green-600">
                      +{task.reward} pts
                    </span>
                  </div>

                  {task.status === 'In Progress' && (
                    <Button variant="outlined" fullWidth className="mt-3">
                      Update Progress
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
}
