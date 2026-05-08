import { Droplet, Users, Trash2, Heart, TrendingUp, MapPin, AlertTriangle } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CommunityMap from './CommunityMap';
import RegenerationScore from './RegenerationScore';

export default function Dashboard() {
  const missions = [
    {
      id: 1,
      title: 'Plastic cleanup near railway',
      urgency: 'high',
      reward: 150,
      distance: '0.3 km',
      participants: 5,
    },
    {
      id: 2,
      title: 'Blocked drainage requires action',
      urgency: 'critical',
      reward: 250,
      distance: '0.8 km',
      participants: 2,
    },
    {
      id: 3,
      title: 'Water contamination reported',
      urgency: 'critical',
      reward: 300,
      distance: '1.2 km',
      participants: 8,
    },
    {
      id: 4,
      title: 'Tree planting event',
      urgency: 'low',
      reward: 100,
      distance: '2.1 km',
      participants: 12,
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
      {/* Community Status Header */}
      <Card elevation={2}>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Kibera Command</h1>
            <RegenerationScore score={73} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-600">Active Workers</div>
                <div className="text-lg font-semibold">127</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Droplet className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-600">Water Quality</div>
                <div className="text-lg font-semibold text-green-600">Safe</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-yellow-600" />
              <div>
                <div className="text-sm text-gray-600">Health Risk</div>
                <div className="text-lg font-semibold text-yellow-600">Caution</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-purple-600" />
              <div>
                <div className="text-sm text-gray-600">Waste Collection</div>
                <div className="text-lg font-semibold">68%</div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <LinearProgress variant="determinate" value={68} />
          </div>
        </CardContent>
      </Card>

      {/* Community Pulse Widget */}
      <Card elevation={2}>
        <CardContent>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold">Community Pulse</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">324</div>
              <div className="text-sm text-gray-600">People Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">1.8T</div>
              <div className="text-sm text-gray-600">Waste Removed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">89</div>
              <div className="text-sm text-gray-600">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">$12.4K</div>
              <div className="text-sm text-gray-600">Treasury Growth</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Community Map */}
      <Card elevation={2}>
        <CardContent>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-semibold">Community Map</h2>
          </div>
          <CommunityMap />
        </CardContent>
      </Card>

      {/* Daily Missions Feed */}
      <div>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          Active Missions
        </h2>

        <div className="space-y-3">
          {missions.map((mission) => (
            <Card key={mission.id} elevation={1}>
              <CardContent>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                  <Chip
                    label={mission.urgency}
                    color={getUrgencyColor(mission.urgency)}
                    size="small"
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {mission.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {mission.participants} joined
                  </span>
                  <span className="font-semibold text-green-600">
                    +{mission.reward} pts
                  </span>
                </div>

                <Button variant="contained" fullWidth>
                  Join Mission
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
