
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = isVisible ? animation : 'opacity-0';
  const animationDelay = delay ? { animationDelay: `${delay}s` } : {};

  return (
    <div ref={ref} className={cn(animationClass, className)} style={animationDelay}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
