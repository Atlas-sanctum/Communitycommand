import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface RegenerationScoreProps {
  score: number;
}

export default function RegenerationScore({ score }: RegenerationScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#3b82f6';
    if (score >= 40) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={score}
        size={60}
        thickness={5}
        sx={{
          color: getScoreColor(score),
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
        >
          {score}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{ fontSize: '0.6rem', color: 'text.secondary' }}
        >
          REGEN
        </Typography>
      </Box>
    </Box>
  );
}
