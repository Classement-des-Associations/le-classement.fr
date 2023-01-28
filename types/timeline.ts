export type TimelineNormalItem = {
  type: 'normal';
  startAt: string;
  title: string;
};

export type TimelineLargeItem = {
  type: 'large';
  startAt: string;
  endAt: string;
  icon: string;
  title: string;
  description: string;
};

export type TimelineItem = TimelineNormalItem | TimelineLargeItem;
