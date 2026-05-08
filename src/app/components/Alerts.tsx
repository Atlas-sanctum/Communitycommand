import {
  AlertTriangle,
  Droplet,
  Activity,
  Wind,
  MapPin,
  Bell,
  CloudRain,
  Flame,
} from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';

export default function Alerts() {
  const [emergencyBanner] = useState({
    active: true,
    message: 'Heavy rain expected - Flooding risk in low-lying areas',
    type: 'warning',
  });

  const activeAlerts = [
    {
      id: 1,
      type: 'Water Contamination',
      severity: 'critical',
      location: 'Main Water Point - Olympic',
      description: 'High bacterial count detected. Do not consume without boiling.',
      time: '1 hour ago',
      icon: Droplet,
      color: 'red',
      verified: true,
    },
    {
      id: 2,
      type: 'Health Risk',
      severity: 'high',
      location: 'Soweto East',
      description: 'Multiple cholera symptoms reported. Seek immediate medical attention if experiencing symptoms.',
      time: '3 hours ago',
      icon: Activity,
      color: 'orange',
      verified: true,
    },
    {
      id: 3,
      type: 'Air Quality',
      severity: 'medium',
      location: 'Near Railway',
      description: 'Smoke pollution from burning waste. Avoid outdoor activity.',
      time: '5 hours ago',
      icon: Wind,
      color: 'yellow',
      verified: false,
    },
    {
      id: 4,
      type: 'Flooding',
      severity: 'high',
      location: 'Laini Saba',
      description: 'Standing water creating mosquito breeding grounds.',
      time: '1 day ago',
      icon: CloudRain,
      color: 'blue',
      verified: true,
    },
  ];

  const waterQuality = [
    {
      id: 1,
      location: 'Community Center Station',
      status: 'safe',
      lastCheck: '2 hours ago',
      turbidity: 'Low',
      ph: '7.2',
      bacterial: 'Safe',
    },
    {
      id: 2,
      location: 'Olympic Water Point',
      status: 'caution',
      lastCheck: '1 hour ago',
      turbidity: 'Medium',
      ph: '6.8',
      bacterial: 'Elevated',
    },
    {
      id: 3,
      location: 'Railway Station',
      status: 'unsafe',
      lastCheck: '30 mins ago',
      turbidity: 'High',
      ph: '8.5',
      bacterial: 'Unsafe',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'caution':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'unsafe':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <Bell className="w-6 h-6" />
          Alerts
        </h1>
        <p className="text-sm text-gray-600">
          Health, water & emergency notifications
        </p>
      </div>

      {emergencyBanner.active && (
        <Alert severity="warning" variant="filled">
          <AlertTitle>Emergency Broadcast</AlertTitle>
          {emergencyBanner.message}
        </Alert>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          Active Alerts
        </h2>

        <div className="space-y-3">
          {activeAlerts.map((alert) => {
            const IconComponent = alert.icon;
            return (
              <Card key={alert.id} elevation={1}>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full bg-${alert.color}-100 text-${alert.color}-600`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {alert.type}
                        </h3>
                        <Chip
                          label={alert.severity}
                          color={getSeverityColor(alert.severity)}
                          size="small"
                        />
                      </div>

                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <MapPin className="w-3 h-3" />
                        {alert.location}
                      </div>

                      <p className="text-sm text-gray-700 mb-2">
                        {alert.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {alert.time}
                        </span>
                        {alert.verified && (
                          <Chip
                            label="Verified"
                            size="small"
                            variant="outlined"
                            color="success"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Droplet className="w-5 h-5 text-blue-600" />
          Water Quality Status
        </h2>

        <div className="space-y-3">
          {waterQuality.map((point) => (
            <Card key={point.id} elevation={1}>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {point.location}
                  </h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                      point.status
                    )}`}
                  >
                    {point.status.toUpperCase()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 my-3 text-sm">
                  <div>
                    <div className="text-gray-600">Turbidity</div>
                    <div className="font-semibold">{point.turbidity}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">pH Level</div>
                    <div className="font-semibold">{point.ph}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Bacterial</div>
                    <div className="font-semibold">{point.bacterial}</div>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  Last checked: {point.lastCheck}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card elevation={2} className="bg-blue-50">
        <CardContent>
          <h3 className="font-semibold text-gray-900 mb-2">
            Report Symptoms
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            Help protect your community by reporting health symptoms early.
          </p>
          <Button variant="contained" fullWidth>
            Submit Health Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
