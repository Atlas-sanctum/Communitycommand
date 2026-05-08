import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Camera, MapPin, AlertTriangle } from 'lucide-react';

interface IncidentReportDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function IncidentReportDialog({
  open,
  onClose,
}: IncidentReportDialogProps) {
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState('');
  const [description, setDescription] = useState('');

  const categories = [
    'Flooding',
    'Violence',
    'Illegal Dumping',
    'Broken Infrastructure',
    'Water Contamination',
    'Fire',
    'Health Hazard',
  ];

  const severityLevels = ['Low', 'Medium', 'High', 'Critical'];

  const handleSubmit = () => {
    console.log({ category, severity, description });
    setCategory('');
    setSeverity('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Report Incident</DialogTitle>
      <DialogContent>
        <div className="space-y-4 pt-2">
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Severity"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            fullWidth
          >
            {severityLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Description"
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the incident..."
            fullWidth
          />

          <div className="flex gap-2">
            <Button variant="outlined" fullWidth>
              <Camera className="w-4 h-4 mr-1" />
              Add Photo
            </Button>
            <Button variant="outlined" fullWidth>
              <MapPin className="w-4 h-4 mr-1" />
              GPS Tag
            </Button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              Your report will be verified by community coordinators and
              assigned to response teams.
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!category || !severity}
        >
          Submit Report
        </Button>
      </DialogActions>
    </Dialog>
  );
}
