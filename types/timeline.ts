export type TimelineNormalItem = {
  type: 'normal';
  startAt?: string;
  endAt?: string;
  title: string;
  link?: string;
};

export type TimelineLargeItem = {
  type: 'large';
  startAt?: string;
  endAt?: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
};

export type TimelineItem = TimelineNormalItem | TimelineLargeItem;
