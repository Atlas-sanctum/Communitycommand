import { Vote, MessageSquare, Camera, MapPin, ThumbsUp, ThumbsDown, TrendingUp } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import IncidentReportDialog from './IncidentReportDialog';

export default function Community() {
  const [tabValue, setTabValue] = useState(0);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

  const proposals = [
    {
      id: 1,
      title: 'Install Solar Lights in Market Area',
      creator: 'James Ochieng',
      budget: 5000,
      votes: { support: 87, oppose: 12 },
      status: 'Active',
      comments: 24,
    },
    {
      id: 2,
      title: 'Community Composting Center',
      creator: 'Mary Wanjiku',
      budget: 8000,
      votes: { support: 145, oppose: 8 },
      status: 'Funded',
      comments: 35,
    },
    {
      id: 3,
      title: 'Youth Training Program - Recycling',
      creator: 'Peter Otieno',
      budget: 12000,
      votes: { support: 203, oppose: 15 },
      status: 'Under Review',
      comments: 52,
    },
  ];

  const incidents = [
    {
      id: 1,
      type: 'Flooding',
      location: 'Railway Bridge Area',
      status: 'Verified',
      priority: 'High',
      reporter: 'Anonymous',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'Illegal Dumping',
      location: 'Near Water Station',
      status: 'Response Team Assigned',
      priority: 'Medium',
      reporter: 'Grace M.',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'Broken Infrastructure',
      location: 'Community Center',
      status: 'Resolved',
      priority: 'Low',
      reporter: 'John K.',
      time: '1 day ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'primary';
      case 'Funded':
        return 'success';
      case 'Under Review':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Community</h1>
          <p className="text-sm text-gray-600">
            Proposals, incidents & civic action
          </p>
        </div>
        <Button
          variant="contained"
          color="error"
          onClick={() => setReportDialogOpen(true)}
        >
          <Camera className="w-4 h-4 mr-1" />
          Report
        </Button>
      </div>

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Proposals" />
        <Tab label="Incidents" />
      </Tabs>

      {tabValue === 0 && (
        <div className="space-y-3">
          <Button variant="outlined" fullWidth>
            Submit New Proposal
          </Button>

          {proposals.map((proposal) => (
            <Card key={proposal.id} elevation={1}>
              <CardContent>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {proposal.title}
                  </h3>
                  <Chip
                    label={proposal.status}
                    color={getStatusColor(proposal.status)}
                    size="small"
                  />
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  <div>By {proposal.creator}</div>
                  <div className="font-semibold text-green-600 mt-1">
                    Budget: ${proposal.budget}
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Community Support</span>
                    <span className="font-semibold">
                      {Math.round(
                        (proposal.votes.support /
                          (proposal.votes.support + proposal.votes.oppose)) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={
                      (proposal.votes.support /
                        (proposal.votes.support + proposal.votes.oppose)) *
                      100
                    }
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      <ThumbsUp className="w-3 h-3 inline mr-1" />
                      {proposal.votes.support}
                    </span>
                    <span>
                      <ThumbsDown className="w-3 h-3 inline mr-1" />
                      {proposal.votes.oppose}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="contained" size="small" fullWidth>
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Support
                  </Button>
                  <Button variant="outlined" size="small" fullWidth>
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {proposal.comments}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tabValue === 1 && (
        <div className="space-y-3">
          {incidents.map((incident) => (
            <Card key={incident.id} elevation={1}>
              <CardContent>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {incident.type}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3" />
                      {incident.location}
                    </div>
                  </div>
                  <Chip
                    label={incident.priority}
                    color={getPriorityColor(incident.priority)}
                    size="small"
                  />
                </div>

                <div className="my-2">
                  <Chip label={incident.status} size="small" variant="outlined" />
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Reported by {incident.reporter}</span>
                  <span>{incident.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <IncidentReportDialog
        open={reportDialogOpen}
        onClose={() => setReportDialogOpen(false)}
      />
    </div>
  );
}
