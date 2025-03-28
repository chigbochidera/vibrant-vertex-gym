
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerCardProps {
  image: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const TrainerCard: React.FC<TrainerCardProps> = ({
  image,
  name,
  specialty,
  experience,
  bio,
  socials,
}) => {
  return (
    <div className="gym-card overflow-hidden group">
      <div className="relative overflow-hidden h-72">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkGray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex space-x-4 mb-4">
            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-goldenYellow/80 transition-colors"
                aria-label={`${name}'s Facebook`}
              >
                <Facebook size={16} className="text-white" />
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-goldenYellow/80 transition-colors"
                aria-label={`${name}'s Instagram`}
              >
                <Instagram size={16} className="text-white" />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-goldenYellow/80 transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={16} className="text-white" />
              </a>
            )}
          </div>
          <p className="text-white/90 text-sm">{bio}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-teal font-semibold mb-2">{specialty}</p>
        <p className="text-gray-500 text-sm">{experience} experience</p>
      </div>
    </div>
  );
};

export default TrainerCard;
