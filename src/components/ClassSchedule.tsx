
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ClassInfo {
  time: string;
  name: string;
  trainer: string;
  duration: string;
}

interface ScheduleData {
  [key: string]: ClassInfo[];
}

const scheduleData: ScheduleData = {
  monday: [
    { time: '06:00 AM', name: 'Morning HIIT', trainer: 'Sarah Johnson', duration: '45 min' },
    { time: '09:00 AM', name: 'Strength & Conditioning', trainer: 'Mike Chen', duration: '60 min' },
    { time: '12:00 PM', name: 'Lunch Express', trainer: 'Lisa Wong', duration: '30 min' },
    { time: '06:00 PM', name: 'CrossFit', trainer: 'Alex Rodriguez', duration: '60 min' },
    { time: '08:00 PM', name: 'Yoga Flow', trainer: 'Emma Patel', duration: '45 min' },
  ],
  tuesday: [
    { time: '07:00 AM', name: 'Spin Class', trainer: 'David Kim', duration: '45 min' },
    { time: '10:00 AM', name: 'Body Pump', trainer: 'Sarah Johnson', duration: '60 min' },
    { time: '01:00 PM', name: 'Pilates', trainer: 'Emma Patel', duration: '45 min' },
    { time: '05:30 PM', name: 'Boxing', trainer: 'Mike Chen', duration: '60 min' },
    { time: '07:30 PM', name: 'Core & Abs', trainer: 'Lisa Wong', duration: '30 min' },
  ],
  wednesday: [
    { time: '06:00 AM', name: 'Circuit Training', trainer: 'Alex Rodriguez', duration: '45 min' },
    { time: '09:00 AM', name: 'Senior Fitness', trainer: 'Emma Patel', duration: '45 min' },
    { time: '12:00 PM', name: 'Lunch Express', trainer: 'Mike Chen', duration: '30 min' },
    { time: '06:00 PM', name: 'Zumba', trainer: 'Lisa Wong', duration: '60 min' },
    { time: '08:00 PM', name: 'Meditation', trainer: 'Sarah Johnson', duration: '30 min' },
  ],
  thursday: [
    { time: '07:00 AM', name: 'Morning HIIT', trainer: 'Sarah Johnson', duration: '45 min' },
    { time: '10:00 AM', name: 'Strength & Conditioning', trainer: 'Alex Rodriguez', duration: '60 min' },
    { time: '01:00 PM', name: 'Yoga Flow', trainer: 'Emma Patel', duration: '45 min' },
    { time: '05:30 PM', name: 'CrossFit', trainer: 'Mike Chen', duration: '60 min' },
    { time: '07:30 PM', name: 'Body Pump', trainer: 'Lisa Wong', duration: '60 min' },
  ],
  friday: [
    { time: '06:00 AM', name: 'Spin Class', trainer: 'David Kim', duration: '45 min' },
    { time: '09:00 AM', name: 'Pilates', trainer: 'Emma Patel', duration: '45 min' },
    { time: '12:00 PM', name: 'Lunch Express', trainer: 'Mike Chen', duration: '30 min' },
    { time: '06:00 PM', name: 'Boxing', trainer: 'Alex Rodriguez', duration: '60 min' },
    { time: '08:00 PM', name: 'Yoga Flow', trainer: 'Sarah Johnson', duration: '45 min' },
  ],
  saturday: [
    { time: '08:00 AM', name: 'Weekend Warrior', trainer: 'Mike Chen', duration: '75 min' },
    { time: '10:00 AM', name: 'Family Fitness', trainer: 'Lisa Wong', duration: '60 min' },
    { time: '12:00 PM', name: 'Zumba', trainer: 'Emma Patel', duration: '60 min' },
    { time: '03:00 PM', name: 'Core & Abs', trainer: 'Sarah Johnson', duration: '30 min' },
  ],
  sunday: [
    { time: '09:00 AM', name: 'Yoga Flow', trainer: 'Emma Patel', duration: '60 min' },
    { time: '11:00 AM', name: 'Body Pump', trainer: 'Mike Chen', duration: '60 min' },
    { time: '01:00 PM', name: 'Meditation', trainer: 'Sarah Johnson', duration: '45 min' },
  ],
};

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const ClassSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('monday');

  return (
    <div className="w-full">
      <div className="flex flex-wrap mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={cn(
              'px-4 py-3 text-sm font-medium capitalize transition-colors duration-300 flex-grow sm:flex-grow-0',
              activeDay === day
                ? 'bg-teal text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trainer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scheduleData[activeDay].map((classInfo, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {classInfo.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                  {classInfo.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classInfo.trainer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classInfo.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassSchedule;
