import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tag as TagType } from '../types';

interface TagProps {
  tag: TagType;
  onClick?: (tagId: string) => void;
  selected?: boolean;
}

const Tag = ({ tag, onClick, selected = false }: TagProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(tag.id);
    }
  };

  return (
    <Badge
      variant={selected ? "default" : "secondary"}
      className={`text-xs ${onClick ? 'cursor-pointer hover:bg-primary/20' : ''}`}
      onClick={handleClick}
    >
      {tag.name}
    </Badge>
  );
};

export default Tag;
