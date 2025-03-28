
import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  link?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  image,
  description,
  duration,
  level,
  link = '/programs',
}) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="gym-card group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded ${getLevelColor()}`}>
            {level}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users size={16} className="mr-1" />
            <span className="text-sm">{level}</span>
          </div>
        </div>
        <Link to={link} className="btn-primary text-center w-full">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
