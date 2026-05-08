import { Trophy, Award, TrendingUp, Wallet, Star, Medal } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

export default function Rewards() {
  const [tabValue, setTabValue] = useState(0);

  const achievements = [
    {
      id: 1,
      title: 'Water Guardian',
      description: 'Complete 10 water quality checks',
      progress: 7,
      total: 10,
      icon: '💧',
      earned: false,
    },
    {
      id: 2,
      title: 'Waste Ranger',
      description: 'Collect 100kg of waste',
      progress: 100,
      total: 100,
      icon: '♻️',
      earned: true,
    },
    {
      id: 3,
      title: 'Health Sentinel',
      description: 'Complete 5 health surveys',
      progress: 3,
      total: 5,
      icon: '🏥',
      earned: false,
    },
    {
      id: 4,
      title: 'Community Builder',
      description: 'Participate in 15 missions',
      progress: 15,
      total: 15,
      icon: '🏘️',
      earned: true,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Akinyi', points: 2850, neighborhood: 'Soweto East' },
    { rank: 2, name: 'James Ochieng', points: 2640, neighborhood: 'Olympic' },
    { rank: 3, name: 'Mary Wanjiku', points: 2450, neighborhood: 'Laini Saba' },
    { rank: 4, name: 'Peter Otieno', points: 2280, neighborhood: 'Gatwekera' },
    { rank: 5, name: 'Grace Muthoni', points: 2150, neighborhood: 'Soweto East' },
  ];

  const recentRewards = [
    { id: 1, activity: 'Waste Collection', points: 150, date: 'Today' },
    { id: 2, activity: 'Water Testing', points: 200, date: 'Yesterday' },
    { id: 3, activity: 'Tree Planting', points: 100, date: '2 days ago' },
    { id: 4, activity: 'Drainage Repair', points: 300, date: '3 days ago' },
  ];

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Rewards</h1>
        <p className="text-sm text-gray-600">
          Track your impact and achievements
        </p>
      </div>

      <Card elevation={2} className="bg-gradient-to-br from-blue-500 to-purple-600">
        <CardContent>
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm opacity-90">Impact Wallet</span>
            </div>
            <div className="text-4xl font-bold mb-1">1,840</div>
            <div className="text-sm opacity-90">Total Points</div>

            <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs opacity-90">Missions</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs opacity-90">Badges</div>
              </div>
              <div>
                <div className="text-2xl font-bold">#8</div>
                <div className="text-xs opacity-90">Rank</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Achievements" />
        <Tab label="Leaderboard" />
        <Tab label="History" />
      </Tabs>

      {tabValue === 0 && (
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              elevation={1}
              className={achievement.earned ? 'border-2 border-yellow-400' : ''}
            >
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {achievement.title}
                      </h3>
                      {achievement.earned && (
                        <Chip
                          label="Earned"
                          color="success"
                          size="small"
                          icon={<Star />}
                        />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {achievement.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold">
                          {achievement.progress}/{achievement.total}
                        </span>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={(achievement.progress / achievement.total) * 100}
                        color={achievement.earned ? 'success' : 'primary'}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tabValue === 1 && (
        <div className="space-y-2">
          {leaderboard.map((entry) => (
            <Card
              key={entry.rank}
              elevation={1}
              className={entry.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}
            >
              <CardContent>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                      entry.rank === 1
                        ? 'bg-yellow-400 text-yellow-900'
                        : entry.rank === 2
                        ? 'bg-gray-300 text-gray-700'
                        : entry.rank === 3
                        ? 'bg-orange-400 text-orange-900'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {entry.rank <= 3 ? <Medal className="w-5 h-5" /> : entry.rank}
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {entry.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {entry.neighborhood}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-blue-600">
                      {entry.points.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tabValue === 2 && (
        <div className="space-y-2">
          {recentRewards.map((reward) => (
            <Card key={reward.id} elevation={1}>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {reward.activity}
                    </div>
                    <div className="text-sm text-gray-600">{reward.date}</div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    +{reward.points}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
