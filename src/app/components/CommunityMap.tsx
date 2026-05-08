import { MapPin, Droplet, Trash2, AlertTriangle, Users } from 'lucide-react';
import { useState } from 'react';

interface MapMarker {
  id: number;
  type: 'waste' | 'water' | 'danger' | 'worker';
  x: number;
  y: number;
  label: string;
}

export default function CommunityMap() {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  const markers: MapMarker[] = [
    { id: 1, type: 'waste', x: 25, y: 35, label: 'Waste Hotspot - Railway' },
    { id: 2, type: 'waste', x: 60, y: 55, label: 'Illegal Dumping Site' },
    { id: 3, type: 'water', x: 45, y: 25, label: 'Clean Water Station' },
    { id: 4, type: 'water', x: 70, y: 70, label: 'Water Point - Queue' },
    { id: 5, type: 'danger', x: 35, y: 65, label: 'Blocked Drainage' },
    { id: 6, type: 'danger', x: 80, y: 40, label: 'Contamination Alert' },
    { id: 7, type: 'worker', x: 50, y: 50, label: 'Active Cleanup Crew' },
    { id: 8, type: 'worker', x: 28, y: 42, label: 'Waste Collectors' },
  ];

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'waste':
        return <Trash2 className="w-4 h-4" />;
      case 'water':
        return <Droplet className="w-4 h-4" />;
      case 'danger':
        return <AlertTriangle className="w-4 h-4" />;
      case 'worker':
        return <Users className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'waste':
        return 'bg-purple-500';
      case 'water':
        return 'bg-blue-500';
      case 'danger':
        return 'bg-red-500';
      case 'worker':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-gray-200 overflow-hidden">
        {markers.map((marker) => (
          <button
            key={marker.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getMarkerColor(
              marker.type
            )} text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer z-10`}
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            onClick={() => setSelectedMarker(marker)}
          >
            {getMarkerIcon(marker.type)}
          </button>
        ))}

        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10">
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {selectedMarker && (
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2">
            <div
              className={`${getMarkerColor(selectedMarker.type)} text-white p-2 rounded-full`}
            >
              {getMarkerIcon(selectedMarker.type)}
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {selectedMarker.label}
              </div>
              <div className="text-sm text-gray-600 capitalize">
                {selectedMarker.type} Location
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span>Waste Hotspots</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Water Stations</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Danger Zones</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Active Workers</span>
        </div>
      </div>
    </div>
  );
}
